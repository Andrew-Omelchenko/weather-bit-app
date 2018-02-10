class Weather {
  constructor(data, units) {
    this._data = data;
    this._currentUnits = units;
    if (units == "metric") {
      this.__currentUnitsCode = unitSystems.metric.code;
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
    } else {
      this.__currentUnitsCode = unitSystems.imperial.code;
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
    }
    this._location = data.city_name;
    this._country = data.country_code;
  }

  get data() {
    return this._data;
  }
  get currentUnits() {
    return this._currentUnits;
  }
  get currentTemperatureUnits() {
    return this._currentTemperatureUnits;
  }

  get currentVelocityUnits() {
    return this._currentVelocityUnits;
  }

  get location() {
    return this._location;
  }

  get country() {
    return this._country;
  }

  switchUnits(units) {
    if (this._currentUnits == units) return;
    if (units == "metric") {
      this._currentUnits = "metric";
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
      for (let i = 0; i < numOfDays; i++) {
        this._data.data[i].temp = toCelsius(this._data.data[i].temp);
        this._data.data[i].min_temp = toCelsius(this._data.data[i].min_temp);
        this._data.data[i].max_temp = toCelsius(this._data.data[i].max_temp);
        this._data.data[i].wind_spd = toMs(this._data.data[i].wind_spd);
      }
    } else if (units == "imperial") {
      this._currentUnits = "imperial";
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
      for (let i = 0; i < numOfDays; i++) {
        this._data.data[i].temp = toFahrenheit(this._data.data[i].temp);
        this._data.data[i].min_temp = toFahrenheit(this._data.data[i].min_temp);
        this._data.data[i].max_temp = toFahrenheit(this._data.data[i].max_temp);
        this._data.data[i].wind_spd = toMph(this._data.data[i].wind_spd);
      }
    }
  }
}
