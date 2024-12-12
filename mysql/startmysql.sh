#!/usr/bin/env bash

ULCASE=`echo ${USER}|dd conv=lcase`
BASEDIR=/local/${ULCASE}
set -e
rm -rf "$BASEDIR/mysql"

mkdir -p $BASEDIR/{mysql,mysqldrun,mysqldlog}

chmod 0700 $BASEDIR
cp -r /var/lib/mysql.empty/* /local/${ULCASE}/mysql/
chmod -R 0777 $BASEDIR/mysql


if [ ! -f $HOME/.my.cnf ]
then
cat > $HOME/.my.cnf << EOF
[client]
port		= 3306
socket		= /local/${ULCASE}/mysqldrun/mysqld.sock
EOF
fi

/usr/sbin/mysqld --skip-grant-tables --datadir=$BASEDIR/mysql \
    --pid-file=$BASEDIR/mysqldrun/mysqld.pid \
    --slow-query-log-file=$BASEDIR/mysqldlog/ubupc-slow.log \
    --log-error=$BASEDIR/mysqldlog/error.log \
    --general-log-file=$BASEDIR/mysqldlog/ubupc.log \
    --socket=$BASEDIR/mysqldrun/mysqld.sock
