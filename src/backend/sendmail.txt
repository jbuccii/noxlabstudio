<?php
// Disabilita errori a schermo per sicurezza
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo "Please fill out all fields.";
    exit;
  }

  $to = "info@nox-lab.it";
  $subject = "New message from NOxLAB website";
  $body = "
    <h2>New Message from Website</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Message:</strong><br>{$message}</p>
  ";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "From: {$name} <{$email}>\r\n";

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Email sent successfully.";
  } else {
    http_response_code(500);
    echo "Failed to send email.";
  }
}
?>
