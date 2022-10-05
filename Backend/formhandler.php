<?php 
    $name = $_POST['name'];

    $title = $_POST["subject"];

    $visitorEmail = $_POST['email'];
    
    $emailFrom = 'abiodunoluwapelumi859@gmail.com';

    $message = $_POST["message"];

    $emailBody = "Subject: $title.\n".
                    "Name: Email: $visitorEmail.\n".
                        "User Message: $message.\n";

    $to = "oluwapelumiabiodun45@gmail.com";

    $headers = "From: $visitorEmail \r\n";

    $headers .="Reply to: $visitorEmail \r\n";

    mail($to, $title, $emailBody, $headers);
    header("Location: /index.html");
?>