<?php
// db_connection.php

header("Access-Control-Allow-Origin: *");

$servername = "kienzhe.dk.mysql";
$username = "kienzhe_dkairplate";
$password = "passwordProxy123";
$dbname = "kienzhe_dkairplate";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}