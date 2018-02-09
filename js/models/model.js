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
    this._weatherState = data.data[0].weather.icon;
    this._temperature = data.data[0].temp;
    this._tempMin = data.data[0].min_temp;
    this._tempMax = data.data[0].max_temp;
    this._location = data.city_name;
    this._country = data.country_code;
    this._description = data.data[0].weather.description;
    this._humidity = data.data[0].rh;
    this._velocity = data.data[0].wind_spd;
    this._direction = data.data[0].wind_cdir;
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
  get weatherState() {
    return this._weatherState;
  }
  get temperature() {
    return this._temperature;
  }
  get temperatureUnits() {
    return this._currentTemperatureUnits;
  }
  get tempMin() {
    return this._tempMin;
  }
  get tempMax() {
    return this._tempMax;
  }
  get location() {
    return this._location;
  }
  get country() {
    return this._country;
  }
  get description() {
    return this._description;
  }
  get humidity() {
    return this._humidity;
  }
  get velocity() {
    return this._velocity;
  }
  get velocityUnits() {
    return this._currentVelocityUnits;
  }
  get direction() {
    return this._direction;
  }

  switchUnits(units) {
    if (this._currentUnits == units) return;
    if (units == "metric") {
      this._currentUnits = "metric";
      this._temperature = toCelsius(this._temperature);
      this._tempMin = toCelsius(this._tempMin);
      this._tempMax = toCelsius(this._tempMax);
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._velocity = toMs(this._velocity);
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
    } else if (units == "imperial") {
      this._currentUnits = "imperial";
      this._temperature = toFahrenheit(this._temperature);
      this._tempMin = toFahrenheit(this._tempMin);
      this._tempMax = toFahrenheit(this._tempMax);
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._velocity = toMph(this._velocity);
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
    }
  }
}
