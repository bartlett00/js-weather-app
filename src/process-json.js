import renderWeather from "./render-weather";

export default function processJSON(promise) {
  let promiseData = {};
  promise.then((response) => {
    Object.assign(promiseData, response);
    renderWeather(promiseData);
    console.log(promiseData);
  });
  return promiseData;
}
