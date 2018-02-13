import * as config from "../config.js";

/** Class representing a weather service. */
export class WeatherService {
  /**
   * Creates weather service.
   * @constructor
   */
  constructor() {}

  /**
   * Get weather data for specified location
   * @param {string} city - specified location
   * @param {string} unitsCode - string code, representing system of measurement units
   * @returns {Promise|null} - weather data or null in case of error
   */
  getWeather(city, unitsCode) {
    let url = `${config.apiLink}${config.keyMod}${config.key}${config.daysMod}${config.numOfDays}${config.unitsMod}${unitsCode}${config.locMod}${city}`;
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
