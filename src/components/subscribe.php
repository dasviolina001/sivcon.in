<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = 'localhost'; // or your actual DB host from Hostinger
$db   = 'u285438128_registration';
$user = 'u285438128_registration';
$pass = 'VioAsh@123';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed."]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email."]);
    exit();
}

$email = $conn->real_escape_string($data['email']);

$query = "INSERT INTO subscribers (email) VALUES ('$email')";

if ($conn->query($query) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Subscribed successfully."]);
} else {
    http_response_code(409);
    echo json_encode(["status" => "error", "message" => "Email already subscribed or query failed."]);
}

$conn->close();
?>
