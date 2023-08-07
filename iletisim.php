<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $gender = $_POST["gender"];

    echo "Adınız Soyadınız: " . $name . "<br>";
    echo "E-posta Adresiniz: " . $email . "<br>";
    echo "Mesajınız: " . $message . "<br>";
    echo "Cinsiyetiniz: " . $gender . "<br>";
    echo '<br><a href="http://localhost/index.html" class="btn btn-primary mt-3">Ana Sayfaya Dön</a>';
}
?>
