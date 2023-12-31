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
$userEmail = $data->userEmail; // Antag, at du sender brugerens e-mail fra frontend
$resultUser = $conn->query("SELECT * FROM User WHERE email = '$userEmail'");

if ($resultUser && $resultUser->num_rows > 0) {
    $userData = $resultUser->fetch_assoc();
    $userId = $userData['id']; // Dette er den relevante user_id

    // Hent serienumre for brugeren
    $serialNumArray = [];
    $resultUserSerials = $conn->query("SELECT serial_num FROM registration WHERE User_id = '$userId'");
    while ($row = $resultUserSerials->fetch_assoc()) {
        $serialNumArray[] = $row['serial_num'];
    }

    // Send svar til frontend med serienumre
    echo json_encode(['success' => true, 'serialNumArray' => $serialNumArray]);
} else {
    echo json_encode(['success' => false, 'message' => 'User not found']);
}

$conn->close();
?>