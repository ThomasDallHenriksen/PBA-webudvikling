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

$stmt = $conn->prepare("SELECT * FROM User WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $stored_hashed_password = $row['password'];

    // Verify the entered password against the stored hashed password
    if (password_verify($password, $stored_hashed_password)) {
        // Authentication successful
        session_start();
        $_SESSION['user'] = $row['email'];
        $_SESSION['userId'] = $row['id'];

        echo json_encode(['success' => true, 'userId' => $_SESSION['userId'], 'user' => $row, 'userName' => $_SESSION['user'], 'message' => 'login successful']);
    } else {
        // Invalid password
        echo json_encode(['success' => false, 'message' => 'Invalid password']);
    }
} else {
    // User not found
    echo json_encode(['success' => false, 'message' => 'User not found']);
}

$stmt->close();
$conn->close();
?>
