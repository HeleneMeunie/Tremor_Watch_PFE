""" Transfer file from source to destination """

from pathlib import Path
from shutil import copyfile

import filecmp


def transfer_data(filename: Path, src_dir: Path, dst_dir: Path):
    """ Copy file

        :param
        filename: Path
            Name of file to copy
        src_dir: Path
            Directory of source file
        dst_dir: Path
            Destination directory
    """

    src_file_path = src_dir / filename
    dst_file_path = dst_dir / filename

    # Check if source file path and destination directory exist
    if src_file_path.exists() and dst_dir.exists():
        # Check if file exists in directory
        if dst_file_path.exists():
            # Compare file in destination directory and source file
            if not filecmp.cmp(
                    src_file_path,
                    dst_file_path,
            ):
                # Transfer file if different
                copyfile(src_file_path, dst_file_path)
        else:
            copyfile(src_file_path, dst_file_path)
