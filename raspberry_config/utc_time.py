""" Get local time (UTC) and save to file """

from datetime import datetime
from pathlib import Path


def fetch_utc(utc_filename: Path):
    """ Fetch local time and save to file

        :param
        utc_filename: Path
            Filename and path where the local time will be saved
    """

    try:
        # Fetch local time
        local_time = datetime.now()

        # Save local time in file
        with open(utc_filename, "w+") as utc_file:
            utc_file.write(str(local_time))
        
    except IOError:
        print("File not accessible")
