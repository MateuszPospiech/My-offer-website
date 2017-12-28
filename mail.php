<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mateo.csgoboost.pl - mail</title>

    <!--css-->
    <link rel="stylesheet" href="style.css" tyle="text/css" />

</head>

<body>
    <div class="mail">
        <h3>Dziękujemy za wypełnienie formularza. Skontaktujemy się z Państwem najszybciej jak to możliwe.</h3>

        <div class="contactFormButton">
            <a href="http://www.mateo.csgoboost.pl"><input type="submit" name="submit" value="Powrót do strony" class="special"/></a>
        </div>
    </div>

    <?php

$to      = 'pospiechmateusz@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);

?>
</body>

</html>
