<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'connection/dbconnect.php';

// $userId = $_SESSION['userId'];

// Check if the serial number exists in the AirPlate table
$airplateQuery = "SELECT * FROM Drone_format";
$airplateResult = $conn->query($airplateQuery);
$data = [];
while ($row = $airplateResult->fetch_assoc()) {
        $data[$row['id']] ??= $row['class'];
    }
echo json_encode(array_values($data));
$conn->close();
?>