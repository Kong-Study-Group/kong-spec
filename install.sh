#!/bin/bash

# For CentOS Linux release 7.3.1611 (Core)

sudo rpm -ivh https://kojipkgs.fedoraproject.org//packages/http-parser/2.7.1/3.el7/x86_64/http-parser-2.7.1-3.el7.x86_64.rpm

sudo yum -y install nodejs npm
sudo yum -y install openssl-devel.x86_64   openssl.x86_64

npm install --save-dev frisby 
npm install --save-dev jest
