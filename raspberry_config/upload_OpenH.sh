#!/bin/bash

exec 1> /home/pi/test_output.log 2>&1
set -vx

TOKEN=$1
URL=https://www.openhumans.org/api/direct-sharing/project/files/upload/?access_token=$TOKEN

http --ignore-stdin --verbose --form POST $URL \
  project_member_id=$2 \
  metadata='{"tags":["'"$3"'","time","x","y","z","score"],"description":"Motion data","md5":"156da7fc980988c51682374436849943"}' \
  data_file@$4
