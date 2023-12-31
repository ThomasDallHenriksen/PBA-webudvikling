<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

include 'connection/dbconnect.php';

$input = json_decode(file_get_contents("php://input"), true);

$email = $input['email'];

// Tjek om e-mail er null eller tom
if (!empty($email)) {
    // Tjek om e-mail allerede eksisterer i databasen
    $check_query = "SELECT * FROM Newsletter WHERE email = '$email'";
    $check_result = $conn->query($check_query);

    if ($check_result->num_rows == 0) {
        // Hvis e-mail ikke eksisterer, så indsæt den i databasen
        $insert_query = "INSERT INTO Newsletter (email) VALUES ('$email')";
        $result = $conn->query($insert_query);

        if ($result) {
            echo json_encode(['message' => 'E-mail added successfully']);
        } else {
            echo json_encode(['error' => 'Error adding e-mail to database']);
        }
    } else {
        echo json_encode(['message' => 'E-mail already exists']);
    }
} else {
    echo json_encode(['error' => 'E-mail cannot be null or empty']);
}

$conn->close();
?>