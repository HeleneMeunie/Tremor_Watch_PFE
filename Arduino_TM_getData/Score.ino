#include <MPU9250_asukiaaa.h>
#include <Adafruit_LittleFS.h>
#include <InternalFileSystem.h>
#include <Arduino.h>

#if defined ARDUINO_NRF52840_CIRCUITPLAY
#define  PIN_VBAT          A8   // this is just a mock read, we'll use the light sensor, so we can run the test
#endif

uint32_t vbat_pin = PIN_VBAT;             // A7 for feather nRF52832, A6 for nRF52840

#define VBAT_MV_PER_LSB   (0.73242188F)   // 3.0V ADC range and 12-bit ADC resolution = 3000mV/4096

#ifdef NRF52840_XXAA
#define VBAT_DIVIDER      (0.5F)          // 150K + 150K voltage divider on VBAT
#define VBAT_DIVIDER_COMP (2.0F)          // Compensation factor for the VBAT divider
#else
#define VBAT_DIVIDER      (0.71275837F)   // 2M + 0.806M voltage divider on VBAT = (2M / (0.806M + 2M))
#define VBAT_DIVIDER_COMP (1.403F)        // Compensation factor for the VBAT divider
#endif

#define REAL_VBAT_MV_PER_LSB (VBAT_DIVIDER_COMP * VBAT_MV_PER_LSB)



using namespace Adafruit_LittleFS_Namespace;



int dataMode = 1; //0 : raw int | 1 : Float
float accelRange = 16.0;
float gyroRange = 250.0;

uint8_t* accelBuf;
uint8_t* gyroBuf;
uint8_t* magBuf;

int Fmax = 16 ;
int Fe = 2 * Fmax ;


char FILENAME[15];
String msg;
int timer,timer_unpluged;
bool recorded_unpluged = false;
int counter = 0;
bool low_bat = false;
float E;

File file(InternalFS);

MPU9250_asukiaaa mySensor(0x69);
float aX, aY, aZ, aSqrt, vgX, vgY, vgZ, gX, gY, gZ, X, Y, Z;
float p_vgX, p_vgY, p_vgZ = 0;
float readVBAT(void) {
  float raw;

  // Set the analog reference to 3.0V (default = 3.6V)
  analogReference(AR_INTERNAL_3_0);

  // Set the resolution to 12-bit (0..4095)
  analogReadResolution(12); // Can be 8, 10, 12 or 14

  // Let the ADC settle
  delay(1);

  // Get the raw 12-bit, 0..3000mV ADC value
  raw = analogRead(vbat_pin);

  // Set the ADC back to the default settings
  analogReference(AR_DEFAULT);
  analogReadResolution(10);

  // Convert the raw value to compensated mv, taking the resistor-
  // divider into account (providing the actual LIPO voltage)
  // ADC range is 0..3000mV and resolution is 12-bit (0..4095)
  return raw * REAL_VBAT_MV_PER_LSB;
}

uint8_t mvToPercent(float mvolts) {
  if (mvolts < 3300)
    return 0;

  if (mvolts < 3600) {
    mvolts -= 3300;
    return mvolts / 30;
  }

  mvolts -= 3600;
  return 10 + (mvolts * 0.15F );  // thats mvolts /6.66666666
}


void readSerialPort() {
  msg = "";
  if (Serial.available()) {
    delay(1);
    while (Serial.available() > 0) {
      msg += (char)Serial.read();
    }
    Serial.flush();

  }
}

void Serialsending() {
  int i = 0;


  for (i = 0; i <= counter; i ++) {


    if (file.isOpen()) {
      file.close();
    }

    while (file.isOpen());

    sprintf(FILENAME, "infotext%d.txt", i);
    file.open(FILENAME, FILE_O_READ);
    if ( file )
    {

      uint32_t readlen;
      char buffer[file.size()] = { 0 };
      readlen = file.read(buffer, sizeof(buffer));
      buffer[readlen] = 0;

      Serial.print(buffer);
      file.close();

      InternalFS.remove(FILENAME);
    }
  }
  InternalFS.format();
  counter = 0;

}

void readSensors() {
  uint8_t sensorId;
  if (mySensor.accelUpdate() == 0) {
    aX = mySensor.accelX() * 9.81;
    aY = mySensor.accelY() * 9.81;
    aZ = mySensor.accelZ() * 9.81;
    aSqrt = mySensor.accelSqrt();
  } else {
    Serial.println("Cannod read accel values");
  }

}


float norm(float ax, float ay, float az) {
  return sqrt(sq(aX) + sq(aY) + sq(aZ));
}

void setup() {

  Serial.begin(115200);
  while (!Serial) {}

  InternalFS.begin();

#ifdef ESP32_HAL_I2C_H // For ESP32
  Wire.begin(SDA_PIN, SCL_PIN);
  mySensor.setWire(&Wire);
#endif

  Wire.begin();

  readVBAT();

  mySensor.beginAccel();
  mySensor.beginGyro();
  mySensor.beginMag();
  delay(1);
}

void loop() {

  sprintf(FILENAME, "infotext%d.txt", counter);
  timer = millis();
  // Get a raw ADC reading
  float vbat_mv = readVBAT();

  // Convert from raw mv to percentage (based on LIPO chemistry)
  uint8_t vbat_per = mvToPercent(vbat_mv);
  Serial.println(vbat_per);
  //readSensors();
  
  if (vbat_per <= 102) {
    if (!recorded_unpluged) {
      timer_unpluged = timer;
      recorded_unpluged = true;
    }

    if (vbat_per < 8) {
      low_bat = true;
      if (file) {
        file.close();
      }
    } else {

      if (!file.isOpen()) {
        file.open(FILENAME, FILE_O_WRITE);
      }
      delay(1);
      if (file.isOpen()) {
        readSensors();

        char msg_send[24];
        sprintf(msg_send, "%d,%d,%d,%d\n", timer - timer_unpluged, round(aX * 100), round(aY * 100), round(aZ * 100));
        file.write(msg_send, strlen(msg_send));

        if (file.size() >= 2000) {
          counter ++;
          file.close();
        }
      }
    }

  }
  else {

    if (low_bat && vbat_per >= 8) {
      low_bat = false;
    }

    readSerialPort();
    delay(1);
    Serial.println(msg);
    if (msg == "link ok\n") {
      Serial.println("OK");
      recorded_unpluged = false;
      Serialsending();
    }
  }

  delay(1000 / Fe) ;
}
