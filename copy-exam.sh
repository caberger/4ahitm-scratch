#!/usr/bin/env bash

set -e

EXPORT_NAME=chuck-norris
TAR_NAME=$EXPORT_NAME.tgz
EXPORT_DIR=~/Downloads/$EXPORT_NAME

rm -rf $EXPORT_DIR 
pushd frontend
    rm -rf node_modules package-lock.json target dist
popd
pushd backend
    rm -rf target
popd

mkdir -p $EXPORT_DIR
cp -r . $EXPORT_DIR
pushd $EXPORT_DIR
    pushd backend/src/main/java/at/ac/htl
        rm Mapper.java
        rm -r ./features/{todo,chuck}
    popd
    rm -rf .git .gitsecret
    rm -rf ./docker-compose/
    rm -rf doc
    pushd frontend
        #npm install
        chmod -w index.html
    popd
    pushd backend
    popd
    rm -f copy-exam.sh
    rm -f mysql/st*.sh
    pushd ..
        rm -f $TAR_NAME
        tar --disable-copyfile -czf $TAR_NAME $EXPORT_NAME
        scp $TAR_NAME c.aberger@edufs:Downloads
    popd
popd
