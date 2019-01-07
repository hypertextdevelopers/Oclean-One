<?php

    $mail = $_GET['mail'];
    $name = $_GET['name'];
    $last_name = $_GET['last_name'];
    $topic = $_GET['topic'];
    $message = $_GET['message'];
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= 'Od: '.$mail."\r\n";
    $headers .= 'Imię: '.$name."\r\n";
    $headers .= 'Nazwisko: '.$last_name."\r\n";

    echo $mail;
    echo $name;
    echo $last_name;
    echo $topic;
    echo $message;

    mail('kontakt@oclean.pl', $topic, $message, $headers);

?>