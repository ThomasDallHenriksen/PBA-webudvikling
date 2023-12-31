<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'connection/dbconnect.php';

$input = json_decode(file_get_contents("php://input"), true);

$email = $input['email'];
$password = $input['password'];

error_log("Received data: " . print_r($input, true));

error_log("Received password: " . $password);

$sql = "SELECT * FROM User WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Tjek om $row er sat og om 'password' indeks er sat i $row
    if ($row && isset($row['password'])) {
        // Debugging: Output hashed password from the database
        echo 'Hashed password from the database: ' . $row['password'] . '<br>';

        // Tjek om 'password' indeks i $input er sat
        if (isset($input['password'])) {
            // Sammenlign den indtastede adgangskode med den hashede adgangskode i databasen
            if (password_verify($password, $row['password'])) {
                session_start();
                $_SESSION['user'] = $row['email'];
                $_SESSION['userId'] = $row['id'];

                echo json_encode(['success' => true, 'userID' => $_SESSION['userId'], 'user' => $_SESSION['user'], 'message' => 'Login successful']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
            }
        } else {
            // 'password' indeks i $input er ikke sat
            echo json_encode(['success' => false, 'message' => 'Password not provided']);
        }
    } else {
        // Noget gik galt, og passwordindeks eller $row var ikke sat
        echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
    }
} else {
    // Authentication invalid
    echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
}

$conn->close();
?>