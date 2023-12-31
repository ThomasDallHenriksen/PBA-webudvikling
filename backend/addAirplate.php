<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection/dbconnect.php';

$data = json_decode(file_get_contents("php://input"));
error_log(print_r($data, true));

// Brug de korrekte navne baseret på frontendens forventninger
$serialNum = $data->serialNum;
$userId = $data->userId;

// Tjek om serial_number eksisterer i Airplate-tabel
$resultAirplate = $conn->query("SELECT * FROM Airplate WHERE serial_num = '$serialNum'");

if ($resultAirplate && $resultAirplate->num_rows > 0) {
    // Serial number eksisterer i Airplate-tabel

    // Tjek om serial_number eksisterer i registration-tabel
    $resultRegistration = $conn->query("SELECT * FROM registration WHERE serial_num = '$serialNum'");

    if ($resultRegistration && $resultRegistration->num_rows > 0) {
        // Serial number is already registered by any user
        echo json_encode(['success' => false, 'message' => 'Serial number already registered']);
    } else {
        // Serial number is not registered, so insert data
        $conn->query("INSERT INTO registration (serial_num, User_id) VALUES ('$serialNum', '$userId')");
        
        // Send svar til frontend
        echo json_encode(['success' => true]);
    }
} else {
    // Serial number eksisterer ikke i Airplate-tabel
    echo json_encode(['success' => false, 'message' => 'Serial number not found']);
}

$conn->close();
?>