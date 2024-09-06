export default function renderWeather(data) {
  let dateTime = document.querySelector(".dateTime");
  let dayDesc = document.querySelector(".dayDesc");
  let weekDesc = document.querySelector(".weekDesc");
  let conditions = document.querySelector(".conditions");
  let precipProb = document.querySelector(".precipProb");
  let humidity = document.querySelector(".humidity");
  let location = document.querySelector(".location");
  let temp = document.querySelector(".temp");
  let tempMax = document.querySelector(".tempMax");
  let tempMin = document.querySelector(".tempMin");
  let iconContainer = document.querySelector("#weather-icon-container");
  let allIcons = iconContainer.querySelectorAll("img");

  allIcons.forEach((icon) => {
    icon.classList.add("hidden");
  });

  location.textContent = data.resolvedAddress;
  dateTime.textContent = data.day.datetime;
  dayDesc.textContent = data.day.description;
  weekDesc.textContent = data.weekDescription;
  conditions.textContent = data.day.conditions;
  precipProb.textContent = `Chance of Precipitation: ${data.day.precipprob}%`;
  humidity.textContent = `Humidity: ${data.day.humidity}%`;
  if (data.unit === "metric") {
    temp.textContent = `${data.day.temp}°C`;
  } else {
    temp.textContent = `${data.day.temp}°F`;
  }
  tempMax.textContent = `${data.day.tempmax}°`;
  tempMin.textContent = `${data.day.tempmin}°`;

  let icon = document.querySelector(`.${data.icon}`);
  if (icon.classList.contains("hidden")) {
    icon.classList.toggle("hidden");
  }
}
