
// 1. user의 위도와 경도를 얻는다.
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
    console.log("You live in", lat, lng)
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// user의 위치, 날씨, wifi 등의 정보를 준다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//2. 위도,경도의 숫자들을 장소로 바꿔줄 서비스를 사용한다.


