#!/usr/bin/env bash

set -e

EXPORT_DIR=~/Downloads/todos
rm -rf $EXPORT_DIR todos.tgz
pushd frontend
rm -rf node_modules package-lock.json target dist
popd
pushd backend
rm -rf target
popd

mkdir -p $EXPORT_DIR
cp -r . $EXPORT_DIR
pushd $EXPORT_DIR
    pushd frontend
        #npm install
        rm -rf ./target
        chmod -w index.html
    popd
    pushd backend
    popd
    rm -f copy-exam.sh
    rm -f mysql/st*.sh
    pushd ..
        rm -f exam-todo.tgz
        tar --disable-copyfile -czf exam-todo.tgz todos
        scp exam-todo.tgz c.aberger@edufs:Downloads
    popd
popd
