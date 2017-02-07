#!/bin/bash
e=$1
echo "$e"
if [[ $e != 'pro' && $e != 'dev' && $e != 'staging' ]]
 then
  e='dev'
fi
pm2 deploy start-app.json $e update
