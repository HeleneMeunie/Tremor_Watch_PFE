# Raspberry for Tremor Watch

The aim of the Tremor Watch project is to monitor the tremors of patients with diseases such as Parkinson's disease, essential tremors, 
or any other pathology causing tremors. This Watch, when worn, captures data from the patients tremors thanks to its sensors (accelerometer
and giroscope). To recharge the battery and retrieve this data, the watch needs to be plugged to a Raspberry pi 3. In this README file, you 
will learn how to set up and install the programs as well as the configurations needed for the process of automatically retrieval and computing 
of the data.

## Installation

For all aspects of this project to work, the Raspberry Pi 3 should have access to the internet as well the right local time clock and be powered.

#### Service

Save the file "upload.service" in the following directory of the Raspberry: "/etc/systemd/system/".

#### Scripts

The following files should be saved together in the same directory (ex: /home/pi/Documents/code): 
- linkwatch.py
- data_computing.py
- score.py
- transfer_rasp_usb.py
- utc_time.py
- upload_OpenH.sh

Make sure to allow the execution of these files using the command ```chmod a+x </path/to/file>```, ex: ```chmod a+x data_computing.py```.

If certain imports do not work, make sure to install the right packages using: ```sudo pip3 install <my_package>```, ex: ```sudo pip3 install scipy```.
And if the previous pip3 command is not found: ```sudo apt-get update``` followed by ```sudo apt-get install python3-pip```.

Paths for file access and data storing at the beginning of both "data_computing.py" and "linkwatch.py" should be modified as wished.

#### Rules

Rules are used to trigger specific programs or services when certain actions are detected. In our case: plugging and unplugging a USB device 
corresponding to the Tremor Watch.
Save the file "10-usbmount.rules" in the following directory of the Raspberry: "/etc/udev/rules.d/".
In this file, modify the paths to the program and service to be run according to your previous savings. If you followed our examples, no modifications
should be needed.

#### Tremor Watch connection

1) Plug the movuino card to one of the Raspberry USB ports using a serial cable.
2) Use the command ```dmesg | grep tty``` to find the port name (ex: ttyACM0, ttyUSB0, etc.).
3) If needed, in "/etc/rules.d/10-usbmount.rules", change both kernel names using the port name found in step 2.
4) If needed, in the "linkwatch.py" script previously saved, change the port name "/dev/<my_port>" using the port name found in step 2.
5) If needed, in the "linkwatch.py" script, change the port number according to the one specified in your Tremor Watch Arduino code.

#### USB saving

1) Plug in the USB device you want to automatically save the Tremor Watch data to.
2) Check the device name using ```lsusb``` command or in ```ls /media/pi``` directory.
3) Change the device directory in "data_computing.py", line 22 in variable "dst_transfer", ex: "/media/pi/Disk".

#### Open Humans

To allow the upload of data to Open Human, the master token will be needed. You will need to be signed in and a member of the Tremor Watch project
to be able to do the following steps. To sign up to the Tremor Watch project, use the following link: 
"https://www.openhumans.org/direct-sharing/projects/on-site/authorize/tremor-watch/"

1) (If needed, refresh the master token at the bottom of the page: "https://www.openhumans.org/direct-sharing/projects/on-site/tremor-watch/").
2) Copy the master token located at the bottom of the page in step 1.
3) Paste the master token in the "data_computing.py" file, line 26 in the variable master_token.
4) Get the Project member ID from page "https://www.openhumans.org/activity/tremor-watch/"
5) Paste the Project member ID in "data_computing.py" file, line 28 in variable project_member_id.
6) Chose a tag in "data_computing.py" file, line 29 in variable metadata if you wish to be able to recognize the file/patient uploaded (ex: patient nb,
keyword, etc.)
7) All data can be accessed through the link: https://www.openhumans.org/api/direct-sharing/project/members/?access_token=<MASTER_ACCESS_TOKEN>

## Usage

After all configurations have been made correctly, plugging the Tremor Watch to the Raspberry will automatically transfer all the motion data to the raspberry.
This might take some time depending on how much time the watch was worn, hence depending on the amount of data stored on the watch.
Unplugging the watch will automatically trigger the computing and formatting of the data, as well as its transfer to the USB flash drive configured
previously. Wait some time to ensure the program is done running then unplug the USB drive. Plug it to a different computer and notice a new file was 
created containing all your motion data !
