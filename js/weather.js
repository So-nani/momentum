const API_KEY = "751c8e29897ce0420a8d4bf563b80197"

function onGeoWorked (position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');

    weather.innerText =  `현재 날씨: ${data.weather[0].main} / 현재 기온: ${data.main.temp}`;
    city.innerText = data.name;
    
  });
}

function onGeoError (){
  alert("날씨 정보를 불러올 수 없습니다!")
}


// 날씨, GPS 정보 등등
navigator.geolocation.getCurrentPosition(onGeoWorked, onGeoError)

// getCurrentPosition : 2개 인수(매개변수) 필요 - 1)정상 작동시 2)에러 발생시