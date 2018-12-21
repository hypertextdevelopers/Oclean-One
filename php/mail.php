<?php

    $mail = $_GET['mail'];
    $name = $_GET['name'];
    $last_name = $_GET['last_name'];
    $topic = $_GET['topic'];
    $message = $_GET['message'];
    $headers = 'Od: '.$mail.', '.$name.', '.$last_name; 

    echo $mail;
    echo $name;
    echo $last_name;
    echo $topic;
    echo $message;

    mail('kontakt@oclean.pl', $topic, $message, $headers);

?>