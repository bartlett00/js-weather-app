import callWeatherAPI from "./call-weather-api";
import processJSON from "./process-json";
import "./styles.css";

let weather = callWeatherAPI("Chicago", "us");
let appData = processJSON(weather);

console.log(appData);
console.log("hello world!");

const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("#location");
const unitBtn = document.querySelector(".unit-toggle");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!searchInput.checkValidity()) {
    searchInput.setCustomValidity("Please enter a location.");
    searchInput.reportValidity();
  } else {
    if (unitBtn.textContent === "°F") {
      let userQuery = callWeatherAPI(searchInput.value, "us");
      let userQueryJSON = processJSON(userQuery);
      console.log(userQueryJSON);
    } else {
      let userQuery = callWeatherAPI(searchInput.value, "metric");
      let userQueryJSON = processJSON(userQuery);
      console.log(userQueryJSON);
    }
  }
});

unitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (unitBtn.textContent === "°C") {
    unitBtn.textContent = "°F";
  } else {
    unitBtn.textContent = "°C";
  }
});
