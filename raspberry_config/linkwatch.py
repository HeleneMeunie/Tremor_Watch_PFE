#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# lsusb to check device name
#dmesg | grep "tty" to find port name
import serial,time


# Variables regarding link to Tremor Watch + file saving
dev_name = "/dev/ttyACM0"
port_nb = 115200
save_filename = "/home/pi/Documents/data/raw_data.txt"

if __name__ == '__main__':
    time.sleep(1)
    print('Running. Press CTRL-C to exit.')
    with serial.Serial(dev_name, port_nb, timeout=1) as arduino:
        time.sleep(0.1) #wait for serial to open
        if arduino.isOpen():
            print("{} connected!".format(arduino.port))
            f = open(filename, "w+")
            try:
                cmd="link ok\n"
                time.sleep(2)
                arduino.write(cmd.encode())
                #time.sleep(0.1) #wait for arduino to answer
                while arduino.inWaiting() == 0:
                    pass
                if arduino.inWaiting() > 0:
                    answer = arduino.readlines()

                    for i in answer:
                        f.write(f'{i.decode().rstrip()}\n')

            except KeyboardInterrupt:
                print("KeyboardInterrupt has been caught.")

            f.close()
