<?php
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME  = "formajax";

//Connect to Mysql
$con = mysql_connect($DB_HOST,$DB_USER,$DB_PASS);
if (!$con) {
    die ("Could not connect: ". mysql_error($con));
}

// Connect database
mysql_select_db($DB_NAME) or die (mysql_error());