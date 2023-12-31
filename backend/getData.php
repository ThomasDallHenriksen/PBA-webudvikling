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

// Brug de korrekte navne baseret på frontendens forventninger
$serialNum = $data->serialNum;
$userId = $data->userId;

// Tjek om serial_number eksisterer i Airplate-tabel
$result = $conn->query("SELECT * FROM air WHERE serial_num = '$serialNum'");

if ($result && $result->num_rows > 0) {
    // Serial number eksisterer, så indsæt data i registering-tabellen
    $conn->query("INSERT INTO registration (serial_num, user_id) VALUES ('$serialNum', '$userId')");
    
    // Send svar til frontend
    echo json_encode(['success' => true]);
} else {
    // Serial number eksisterer ikke i Airplate-tabel
    echo json_encode(['success' => false]);
}

$conn->close();
?>