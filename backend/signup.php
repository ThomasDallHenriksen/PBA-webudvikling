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

// Assuming you are receiving data from a form POST request
$first_name = $input['first_name'];
$last_name = $input['last_name'];
$email = $input['email'];
$hashed_password = password_hash($input['password'], PASSWORD_DEFAULT);
$organisation = $input['organisation'];
$phone = $input['phone'];
$account_type = ($input['account_type'] === 'organisation') ? 1 : 0; // Convert to integer

// Check if email already exists in the database
$check_query = "SELECT * FROM User WHERE email = '$email'";
$check_result = $conn->query($check_query);

if ($check_result->num_rows == 0) {
    // If email does not exist, insert the user into the database
    $insert_query = $conn->prepare("INSERT INTO User (first_name, last_name, email, password, phone, account_type) VALUES (?,?,?,?,?,?)");
    $insert_query->bind_param("sssssi", $first_name, $last_name, $email, $hashed_password, $phone, $account_type);
    
    $result = $insert_query->execute();
    
    if ($account_type === 1 && !empty($organisation)) { // Check if it's an organization and organization name is not empty
        // Get the user's id after insertion
        $user_id = $conn->insert_id;

        $insert_organisation_query = "INSERT INTO Organisation (name, user_id) VALUES ('$organisation', '$user_id')";
        $organisation_result = $conn->query($insert_organisation_query);

        if ($organisation_result) {
            echo json_encode(['redirect' => '/login', 'message' => 'bruger og organisation oprettet']);
        } else {
            echo json_encode(['error' => 'fejl ved oprettelse']);
        }
    } else {
        echo json_encode(['redirect' => '/login', 'message' => 'bruger oprettet']);
    }
} else {
    echo json_encode(['error' => 'email eksisterer allerede']);
}

$conn->close();
?>