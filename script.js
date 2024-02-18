function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let h1 = document.querySelector(".current-city");
  h1.innerHTML = city.value;
}
let form = document.querySelector("#form-input");
form.addEventListener("submit", changeCity);

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let day = document.querySelector("#day");
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentDay = weekdays[currentTime.getDay()];

if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
hour.innerHTML = currentHour;
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
minute.innerHTML = currentMinute;
day.innerHTML = currentDay;
