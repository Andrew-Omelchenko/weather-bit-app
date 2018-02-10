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
        // Treat network errors without responses as 500s.
        const status = error.response ? error.response.status : 500
        if (status === 404) {
          // Not found handler.
          alert("Requested location was not found. Try another one.");
        } else {
          // Other errors.
          alert("Error occured. Please try later.");
        }
      });
  }
}
