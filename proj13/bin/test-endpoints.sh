#!/bin/bash

function print_red(){
	echo -e "\e[31m$@\e[0m"
}

function check(){
	if [[ $? != 0 ]]
		then
		print_red "FAILED"
		exit 1
	fi
}

npm install -g newman
newman run https://www.getpostman.com/collections/90361e4f436c6d5bf7be --color on
check