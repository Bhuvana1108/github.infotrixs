const apiKey="90baab7fb855b6f389429b640f0bf0b1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){

  const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src= "images/clouds.png";
  }

  else if(data.weather[0].main == "Clear"){
    weatherIcon.src= "images/clear.png";
  }

  else if(data.weather[0].main == "Rain"){
    weatherIcon.src= "images/rain.png";
  }


  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src= "images/drizzle.png";
  }

  else if(data.weather[0].main == "Mist"){
    weatherIcon.src= "images/mist.png";
  }

  else if(data.weather[0].main == "Snow"){
    weatherIcon.src= "images/snow.png";
  }

  else if(data.weather[0].main == "Clear"){
    weatherIcon.src= "images/clear.png";
  }
 
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});
