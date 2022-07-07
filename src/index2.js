// DATE

let now = new Date();

let day = now.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekDay = days[day];

let laterDaysArray = days
  .slice(now.getDay())
  .concat(days.slice(0, now.getDay()))
  .slice(1, 6);
let laterArray = document.getElementsByClassName("later");

function getLaterDays() {
  for (let i = 0; i < laterArray.length; i++) {
    laterArray[i].innerHTML = laterDaysArray[i];
  }
}

getLaterDays();

let month = now.getMonth();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let currentMonth = months[month];
let dayOfTheMonth = now.getDate();
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

function getCurrentTime() {
  document.getElementById(
    "current"
  ).innerHTML = `${weekDay}, ${currentHours}:${currentMinutes}`;
}

getCurrentTime();

function getCurrentDate() {
  document.getElementById(
    "today-date"
  ).innerHTML = `${weekDay}, ${currentMonth} ${dayOfTheMonth}`;
}

getCurrentDate();

// CURRENT BUTTON

function showCurrentCityWeather(response) {
  let currentTempElement = document.getElementById("temp-now");
  let temperature = Math.round(response.data.main.temp);
  currentTempElement.innerHTML = `${temperature}°C`;
}

function showCityData(response) {
  let currentCity = response.data[0].name;
  document.querySelector("#city-name").innerHTML = currentCity;
  let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apiKey}`;
  axios.get(url2).then(showCurrentCityWeather);
}

function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url1 = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;
  axios.get(url1).then(showCityData);
}

let currentBtn = document.getElementById("currentbtn");
// currentBtn.onclick = function onclick() {
//   navigator.geolocation.getCurrentPosition(retrievePosition);
// };

currentBtn.addEventListener('click', navigator.geolocation.getCurrentPosition(retrievePosition))

//CITY

let apiKey = "294a89684f421e2c70cadf6f7a72b25c";
let units = "metric";

// function shows weather in the city
function showCityWeather(response) {
  let currentTempElement = document.getElementById("temp-now");
  let temperature = Math.round(response.data.main.temp);
  currentTempElement.innerHTML = `${temperature}°C`;
}

// function names city
function nameCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  document.querySelector("#city-name").innerHTML = cityInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showCityWeather);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", nameCity);

//SWITCH DEGREES

let temps = document.getElementsByClassName("temp");

function handleChange(target) {
  for (let i = 0; i < temps.length; i++) {
    let tempNum = Number(temps[i].innerHTML.slice(0, 2));
    let tempNumC = Math.round((tempNum - 32) / 1.8);
    let tempNumF = Math.round(tempNum * 1.8 + 32);
    switch (target.id) {
      case "flexRadioDefault2":
        temps[i].innerHTML = `${tempNumF}°F`;
        break;
      case "flexRadioDefault1":
        temps[i].innerHTML = `${tempNumC}°C`;
        break;
      default:
        temps[i].innerHTML = `${tempNum}°C`;
        break;
    }
  }
}
let radios = document.getElementsByName("flexRadioDefault");
handleChange(radios);

