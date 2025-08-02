<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
error_reporting(E_ALL);
ini_set('display_errors', 1);


$host = 'localhost'; // or your actual DB host from Hostinger
$db   = 'u285438128_registration';
$user = 'u285438128_registration';
$pass = 'Mussabirsivcon@989';

// Connect to database
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if all required fields are set
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = $_POST['fullName'] ?? '';
    $email = $_POST['email'] ?? '';
    $contact = $_POST['contact'] ?? '';        // ← new line
    $institution = $_POST['institution'] ?? '';
    $experience = $_POST['experience'] ?? '';
    $committeePreference = $_POST['committeePreference'] ?? '';
    $portfolioPreference = $_POST['portfolioPreference'] ?? '';
    $accommodationNeeded = isset($_POST['accommodationNeeded']) ? 1 : 0;

    // Handle file upload
    $photoName = '';
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $photoTmp = $_FILES['photo']['tmp_name'];
        $photoName = basename($_FILES['photo']['name']);
        $uploadDir = __DIR__ . '/uploads/';
        $uploadPath = $uploadDir . $photoName;

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        if (!move_uploaded_file($photoTmp, $uploadPath)) {
            die("Error uploading file.");
        }
    }

    // Prepare and execute SQL query (now including contact)
    $stmt = $conn->prepare("
        INSERT INTO delegates 
            (fullName, email, contact, institution, experience, committeePreference, portfolioPreference, accommodationNeeded, photo) 
        VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    // seven strings, one integer, one string
    $stmt->bind_param(
        "sssssssis",
        $fullName,
        $email,
        $contact,               // ← new variable
        $institution,
        $experience,
        $committeePreference,
        $portfolioPreference,
        $accommodationNeeded,
        $photoName
    );

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Failed to register. Please try again.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
