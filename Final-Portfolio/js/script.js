let lat, long;



document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                
                getWeather();
            },
            function (error) {
                alert("Erro ao obter localização: " + error.message);
            }
        );
    } else {
        alert("Geolocalização não é suportada neste navegador.");
    }
});

function getWeather(){
    if(lat == null || long == null) return;

    console.log("Iniciando chamada API...");

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=119511082b57296fcbb32fec64eb0c53&units=metric`)
    .then(response => response.json())
    .then(data => setDataWeather(data))
    .catch(error => console.error('Erro: ' + error))
}

function setDataWeather(data){
    console.log(data);

    document.getElementById('tempIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById('tempTemp').innerHTML = data.main.temp.toFixed(0)
    document.getElementById('tempCity').innerHTML = data.name;
}


document.getElementById('cardEmail').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    
    modal.style.display === 'none' || modal.classList.contains('hidden')
        ? modal.classList.remove('hidden')
        : modal.classList.add('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    
    modal.style.display === 'none' || modal.classList.contains('hidden')
        ? modal.classList.remove('hidden')
        : modal.classList.add('hidden');
});