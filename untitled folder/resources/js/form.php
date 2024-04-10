<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Change these values to your email and desired subject
    $to = "088901@glr.nl";
    $subject = "New Message from $name";
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";
    
    $headers = "From: sender@example.com"; // Specify the "From" email address here
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message, $name. We will get back to you shortly!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
        // Output the error message if mail() function fails
        echo error_get_last()['message'];
    }
}
?>
