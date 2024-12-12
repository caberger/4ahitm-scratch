#!/usr/bin/env bash

ULCASE=`echo ${USER}|dd conv=lcase`
BASEDIR=/local/${ULCASE}

mysql -u root --password myroot -e "create database demo;"
