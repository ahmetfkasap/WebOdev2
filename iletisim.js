function validateForm() {
    

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (name.trim() === "") {
        alert("Adınız Soyadınız alanı boş bırakılamaz.");
        return false;
    }

    if (gender === null) {
        alert("Cinsiyet seçimi yapmalısınız.");
        return false;
    }

    if (email.trim() === "") {
        alert("E-posta Adresiniz alanı boş bırakılamaz.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Geçerli bir e-posta adresi giriniz.");
        return false;
    }

    if (message.trim() === "") {
        alert("Mesajınız alanı boş bırakılamaz.");
        return false;
    }


}


function resetForm() {
    document.getElementById("iletisimform").reset();
}
