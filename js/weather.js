const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");




function geoOk(position) {
    const log = position.coords.longitude;
    const lat = position.coords.latitude;
    const API_KEY = "cac17e14d02b1e4d773b1c7a4e02b5eb";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;


    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${Math.floor(data.main.temp)}˚C`;
        });

}

function geoError() {
    alert("Can`t Fint you. No weather for you");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
