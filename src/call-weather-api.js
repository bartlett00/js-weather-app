export default async function callWeatherAPI(
  location = "chicago",
  unit = "us"
) {
  try {
    let weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=UF2QVGBH77WVG734K5L34RPUC&contentType=json`,
      {
        mode: "cors",
      }
    );
    const weatherJSON = await weatherData.json();
    console.log(weatherJSON);
    let weatherAppData = {};
    weatherAppData.resolvedAddress = weatherJSON.resolvedAddress;
    weatherAppData.weekDescription = weatherJSON.description;
    weatherAppData.day = {};
    weatherAppData.day.datetime = weatherJSON.days[0].datetime;
    weatherAppData.day.temp = weatherJSON.days[0].temp;
    weatherAppData.day.tempmax = weatherJSON.days[0].tempmax;
    weatherAppData.day.tempmin = weatherJSON.days[0].tempmin;
    weatherAppData.day.conditions = weatherJSON.days[0].conditions;
    weatherAppData.day.description = weatherJSON.days[0].description;
    weatherAppData.day.humidity = weatherJSON.days[0].humidity;
    weatherAppData.day.precipprob = weatherJSON.days[0].precipprob;
    weatherAppData.day.windspeed = weatherJSON.days[0].windspeed;
    weatherAppData.unit = unit;
    weatherAppData.icon = weatherJSON.currentConditions.icon;
    console.log(weatherAppData);
    return weatherAppData;
  } catch (error) {
    console.log(error);
    alert("There was an error with your search, please try again.");
  }
}
