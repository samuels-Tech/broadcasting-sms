<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website= $_POST['website'];
$message = $_POST['message'];
if (!empty($email) && !empty ($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){//IF USER ENTERED EMAIL EMAIL IS VALID
        $receiver ="samkariuki8841@gmail.com";//email receiver email address
        $subject = "From:$name <$email>";//the subject
        $body= "Name:$name\nEmail:$email\nPhone:$phone\nwebsite:$website\nMessage:$message\n\nRegards,\n$name";
        $sender = "From: $email";//sender email
        if(mail($receiver, $subject, $body,$sender)){//mail() is a built php function to send email
            echo "Your message has been sent";


        }else{
            echo "Sorry failed to send your message!";
        }

    }else{
        echo "Enter a valid email address!";
    }
}else{
    echo "Email and password field is required";
}

?>