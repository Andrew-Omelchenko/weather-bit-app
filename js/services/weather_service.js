class WeatherService {
  constructor() {}

  getWeather(city, unitsCode) {
    let url = `${apiLink}${key}${daysMod}${numOfDays}${unitsMod}${unitsCode}${locMod}${city}`;
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
      credentials: "omit"
    };
    return fetch(url, init)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        return data;
      }).catch(error => {
        console.log(error.message);
        if (error.message == "Unexpected end of JSON input") {
          alert("Requested location was not found. Try another one.");
        } else {
          alert("Error occured. Please try later.");
        }
      });
  }
}
