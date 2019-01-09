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

    $mess = 'Od: '.$mail."\r\n";
    $mess .= 'Imię: '.$name."\r\n";
    $mess .= 'Nazwisko: '.$last_name."\r\n";
    $mess .= $message;

    echo $mess;

    mail('kontakt@oclean.pl', $topic, $mess, $headers);

?>