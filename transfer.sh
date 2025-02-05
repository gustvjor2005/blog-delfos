#!/bin/bash
#run this shell on blog-delfos repository folder
#first give execute permission to this file
#>./transfer.sh
# Define variables
KEY="suntzukp.pem"
USER="ubuntu"
HOST="54.94.176.119"
REMOTE_DIR="/var/www/odin.com/html/"

# Run scp commands
scp -i "$KEY" gcd.html $USER@$HOST:$REMOTE_DIR
scp -i "$KEY" -r blog $USER@$HOST:$REMOTE_DIR
scp -i "$KEY" -r fa $USER@$HOST:$REMOTE_DIR

echo "All files have been uploaded!"
