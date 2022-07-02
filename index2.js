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

//CITY
function nameCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  if (cityInput.value.length > 1) {
    document.querySelector("#city-name").innerHTML = cityInput.value;
  } else {
    alert(`it's not even a city! try again`);
  }
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", nameCity);

//CURRENT TEMPERATURE

// function showCityWeather(response) {
//   let currentTempElement = document.getElementById("temp-now");
//   let temperature = Math.round(response.data.main.temp);
//   currentTempElement.innerHTML = `${temperature}°C`;
// }

// function showPosition(position) {
//   let apiKey = "294a89684f421e2c70cadf6f7a72b25c";
//   let cityElement = document.querySelector("h1");
//   let city = h1.value;
//   console.log(city);
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   axios.get(url).then(showWeather);
// }

// let temps = document.getElementsByClassName("temp");

// function handleChange(target) {
//   for (let i = 0; i < temps.length; i++) {
//     let tempNum = Number(temps[i].innerHTML.slice(0, 2));
//     let tempNumC = Math.round((tempNum - 32) / 1.8);
//     let tempNumF = Math.round(tempNum * 1.8 + 32);
//     switch (target.id) {
//       case "flexRadioDefault2":
//         temps[i].innerHTML = `${tempNumF}°F`;
//         break;
//       case "flexRadioDefault1":
//         temps[i].innerHTML = `${tempNumC}°C`;
//         break;
//       default:
//         temps[i].innerHTML = `${tempNum}°C`;
//         break;
//     }
//   }
// }
// let radios = document.getElementsByName("flexRadioDefault");
// handleChange(radios);

//city name

// function showCityWeather(response) {
//   let currentTempElement = document.getElementById("temp-now");
//   let temperature = Math.round(response.data);
//   console.log(temperature);

//   currentTempElement.innerHTML = `${temperature}°C`;
//   let title = document.querySelector("h1");
//   let cityname = title.innerHTML;
//   // console.log(`in ${cityname} is ${temperature}`);
//   let apiKey = "294a89684f421e2c70cadf6f7a72b25c";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metrics&appid=${apiKey}`;

//   axios.get(url).then(showCityWeather);
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", showCityWeather);

//current

// function showWeather(response) {
//   let currentTempElement = document.getElementById("temp-now");
//   let temperature = Math.round(response.data.main.temp);
//   currentTempElement.innerHTML = `${temperature}°C`;
// }

// function retrievePosition(position) {
//   let apiKey = "294a89684f421e2c70cadf6f7a72b25c";
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

//   axios.get(url).then(showWeather);
// }

// navigator.geolocation.getCurrentPosition(retrievePosition);

// currentBtn = document.querySelector("#currentbtn");

// currentBtn.addEventListener(
//   "click",
//   navigator.geolocation.getCurrentPosition(retrievePosition)
// );
