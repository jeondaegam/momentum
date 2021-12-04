const API_KEY = "a03c0c3ba01a8eb56dc2dd62f96171be";

// 1. user의 위도와 경도를 얻는다.
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // * JS를 통해 url을 부른다. (chrome -> network 통해 확인)
    // 서버의 응답을 기다리기 위해 then을 사용한다.
    // 서버에게 응답이 오면 => response의 json을 가져온다.
    fetch(url).then((response) => response.json()).then((data) => {

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;

        // const name = data.name;
        // const weather = data.weather[0].main;
        console.log(name, weather);
    });

    // console.log("You live in", lat, lon);
    // console.log(url);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// user의 위치, 날씨, wifi 등의 정보를 준다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//2. 위도,경도의 숫자들을 장소로 바꿔줄 서비스를 사용한다.


