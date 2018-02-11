import * as config from "../config.js";
import * as helper from "../helper.js";

export class Weather {
  constructor(data, units) {
    this._data = data;
    this._currentUnits = units;
    if (units == "metric") {
      this._currentUnitsCode = config.unitSystems.metric.code;
      this._currentTemperatureUnits = config.unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = config.unitSystems.metric.velocityUnit;
    } else {
      this._currentUnitsCode = config.unitSystems.imperial.code;
      this._currentTemperatureUnits = config.unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = config.unitSystems.imperial.velocityUnit;
    }
  }

  get data() {
    return this._data;
  }

  get currentUnits() {
    return this._currentUnits;
  }

  get currentUnitsCode() {
    return this._currentUnitsCode;
  }

  get currentTemperatureUnits() {
    return this._currentTemperatureUnits;
  }

  get currentVelocityUnits() {
    return this._currentVelocityUnits;
  }

  switchUnits(units) {
    if (this._currentUnits == units) return;
    if (units == "metric") {
      this._currentUnits = "metric";
      this._currentUnitsCode = config.unitSystems.metric.code;
      this._currentTemperatureUnits = config.unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = config.unitSystems.metric.velocityUnit;
      for (let i = 0; i < config.numOfDays; i++) {
        this._data.data[i].temp = helper.toCelsius(this._data.data[i].temp);
        this._data.data[i].min_temp = helper.toCelsius(this._data.data[i].min_temp);
        this._data.data[i].max_temp = helper.toCelsius(this._data.data[i].max_temp);
        this._data.data[i].wind_spd = helper.toMs(this._data.data[i].wind_spd);
      }
    } else if (units == "imperial") {
      this._currentUnits = "imperial";
      this._currentUnitsCode = config.unitSystems.imperial.code;
      this._currentTemperatureUnits = config.unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = config.unitSystems.imperial.velocityUnit;
      for (let i = 0; i < config.numOfDays; i++) {
        this._data.data[i].temp = helper.toFahrenheit(this._data.data[i].temp);
        this._data.data[i].min_temp = helper.toFahrenheit(this._data.data[i].min_temp);
        this._data.data[i].max_temp = helper.toFahrenheit(this._data.data[i].max_temp);
        this._data.data[i].wind_spd = helper.toMph(this._data.data[i].wind_spd);
      }
    }
  }
}
