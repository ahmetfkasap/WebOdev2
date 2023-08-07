function getJoke() {
    // API URL'si
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    // API'ye istek yapmak için 
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // API'den alınan veri
            const jokeDiv = document.getElementById('joke');
            jokeDiv.innerHTML = `<p>${data.value}</p>`;
        })
        .catch(error => {
            console.error('Şaka alınırken hata oluştu:', error);
        });
}
