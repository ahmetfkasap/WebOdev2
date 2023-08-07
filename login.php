<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifre kontrolü
    if ($username === "b211210007@ogr.sakarya.edu.tr" && $password === "b211210007") {
        echo "Giriş Başarılı! Ana Sayfaya Yönlendiriliyorsunuz..";
        header("Refresh: 3; url=http://localhost/index.html");
    } else {
        echo "Giriş Başarısız";
        echo '<br><a href="http://localhost/login.html" class="btn btn-primary mt-3">Tekrar Dene</a>';
    }
}
?>
