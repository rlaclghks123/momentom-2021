const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");




function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "cac17e14d02b1e4d773b1c7a4e02b5eb";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response => response.json()))
        .then((data => {
            city.innerText = data.name;
            weather.innerText = `${data.main.temp} 'C`;
        }));
}


function geoError() {
    alert("Can't get yout location");
}




navigator.geolocation.getCurrentPosition(geoOk, geoError);