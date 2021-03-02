""" Retrieve and compute the data from the Tremor Watch """

from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
import os
import score
import time as t
import transfer_rasp_usb
import utc_time

# Variables regarding retrieval and computation of data
directory = Path("/home/pi/Documents/data")
data_filename = directory / 'raw_data.txt'
time_filename = directory / 'utc_time.txt'
final_filename = directory / 'data_patient.txt'

# Variables regarding automatic transfer of data from raspberry to USB
transfer_filename = Path("data_patient.txt")
src_transfer_dir = Path("/home/pi/Documents/data")
dst_transfer = Path("/media/pi/Disk")

# Variables needed for data upload to Open Humans
pathfile_upload_code = "/home/pi/Documents/code/upload_OpenH.sh"
master_token = \
    "N54ZHjiggIB9rmXoEFPTylWEvNjV5QqUlLWGEz91cFXB6QJEHDKbsdRzCfkeP8fQ"
project_member_id = "94866389"
metadata = "patient1"
filename_to_upload = directory / "data.txt"

try:
    # Fetch data from the Tremor Watch stored in file "data_filename"
    with open(data_filename, "r") as f_data:
        data = f_data.readlines()

    # Fetch start time of data capture stored in file "time_filename"
    with open(time_filename, "r") as f_time:
        start_utc_time_str = f_time.read().rstrip()

    # Store new local start time of capture
    utc_time.fetch_utc(time_filename)

    # DATA PROCESSING

    total_list = []

    # Format data from file to list with 4 columns: clock, x, y, z
    for line in data:
        split_values = [
            float(value) / 100 for value in line.rstrip().split(",")
        ]
        total_list.append(split_values)

    # Split list into 4 arrays for readability
    clock_array = [i[0] / 10 for i in total_list]
    x_array = [i[1] for i in total_list]
    y_array = [i[2] for i in total_list]
    z_array = [i[3] for i in total_list]

    print(f'Clock array: {clock_array}')
    print(f'X array: {x_array}')
    print(f'Y array: {y_array}')
    print(f'Z array: {z_array}')

    # TIME PROCESSING

    utc_time_array = []

    # Convert start time from string to datetime format
    start_utc_time = datetime.strptime(
        start_utc_time_str, "%Y-%m-%d %H:%M:%S.%f"
    )

    # Calculate utc time of each data capture: start time + clock
    for i in clock_array:
        time = start_utc_time + timedelta(seconds=i)
        utc_time_array.append(str(time)[:-3])  # Keep only 3 decimals

    print(f'UTC time array: {utc_time_array}')

    # SCORE PROCESSING

    score_array, freq_array = score.score(clock_array, x_array, y_array, z_array)
    print(f'Score array: {score_array}')
    print(f'Frequency array: {freq_array}')

    # SAVE TO USB + OPEN HUMANS

    # Create final array with all data to save onto file
    final_array = [utc_time_array, x_array, y_array, z_array, score_array, freq_array]

    # Open final file (or create if non-existent)
    f_final_data = open(final_filename, "a")
    # Open file to upload on Open Humans (or create if non-existent)
    file_to_upload = open(filename_to_upload, "w+")

    formatted_final_list = \
        [
            f'\n{i[0]},{i[1]},{i[2]},{i[3]},{i[4]},{i[5]},'
            for i
            in np.transpose(final_array)
        ]

    # Save to files
    for line in formatted_final_list:
        f_final_data.write(line)
        file_to_upload.write(line)

    f_final_data.close()
    file_to_upload.close()

    # Call bash function to upload to Open Humans
    os.system(
        f'{pathfile_upload_code} %s %s %s %s' %
        (
            master_token, project_member_id, metadata, filename_to_upload
        )
    )

    # Call function to transfer data to usb device
    transfer_rasp_usb.transfer_data(
        transfer_filename,
        src_transfer_dir,
        dest_transfer,
    )

    t.sleep(2)

    os.remove(data_filename)
    os.remove(filename_to_upload)

except IOError:
    print("File not accessible")
