<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $formcontent="From: $name \n Message: $message";
    $recipent ="asa@asastallworth.com";
    $subject ="Contact Form";
    $mailheader ="From: $email \r\n;";

    mail($recipent, $subject, $formcontent, $mailheader)
     or die("Error!");

    echo "Thank You!";


?>