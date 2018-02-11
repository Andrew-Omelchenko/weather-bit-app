/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_controller__ = __webpack_require__(1);


window.onload = function() {
  let weatherController = new __WEBPACK_IMPORTED_MODULE_0__controllers_controller__["a" /* WeatherController */](document, window);
  weatherController.start(window.location.href);
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_favorites_service_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_history_service_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_weather_service_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_model_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_view_js__ = __webpack_require__(9);









class WeatherController {
  constructor(doc, wnd) {
    this._doc = doc;
    this._wnd = wnd;
    this._base = extractBase(this._wnd.location.href);
    this._storageService = new __WEBPACK_IMPORTED_MODULE_2__services_storage_service_js__["a" /* StorageService */](this._wnd);
    this._favoritesService = new __WEBPACK_IMPORTED_MODULE_3__services_favorites_service_js__["a" /* FavoritesService */](
      this._storageService,
      "favorites"
    );
    this._historyService = new __WEBPACK_IMPORTED_MODULE_4__services_history_service_js__["a" /* HistoryService */](this._storageService, "history");
    this._weatherService = new __WEBPACK_IMPORTED_MODULE_5__services_weather_service_js__["a" /* WeatherService */]();
    this._weather = new __WEBPACK_IMPORTED_MODULE_6__models_model_js__["a" /* Weather */](mockData, "metric");
    this._screen = new __WEBPACK_IMPORTED_MODULE_7__views_view_js__["a" /* Screen */](doc, this._weather, this);
    // this._screen.update(this._weather);
  }

  switchUnits(units) {
    this._weather.switchUnits(units, this._screen);
    this._screen.update(this._weather);
  }

  changeLocation(loc) {
    this._weatherService
      .getWeather(loc, this._weather.currentUnitsCode)
      .then(data => {
        if (!data) {
          return;
        }
        this._weather = new __WEBPACK_IMPORTED_MODULE_6__models_model_js__["a" /* Weather */](data, this._weather.currentUnits);
        this._screen.update(this._weather);
        this._wnd.history.pushState(
          {},
          this._doc.title,
          `${this._base}?city=${this._weather.data.city_name},${this._weather.data.country_code}`
        );
        console.log("Inside changeLocation:");
        console.log(
          `Add to history: ${this._weather.data.city_name},${this._weather.data.country_code}`
        );
        let result = this.addHistoryItem(
          `${this._weather.data.city_name},${this._weather.data.country_code}`
        );
        if (result) {
          let listId = this._doc.getElementById(ids.historyListId);
          clearSelect(listId);
          populateSelect(this._doc, listId, this.getHistory(), "reverse");
        }
      });
  }

  start(startUrl) {
    let loc = parseLocation(startUrl);
    if (!loc) {
      loc = "Kyiv,UA";
    }
    this.changeLocation(loc);
  }

  getFavorites() {
    return this._favoritesService.data;
  }

  addFavorite() {
    return this._favoritesService.add(
      `${this._weather.data.city_name},${this._weather.data.country_code}`
    );
  }

  clearFavorites() {
    this._favoritesService.clear();
  }

  getHistory() {
    return this._historyService.data;
  }

  addHistoryItem(item) {
    return this._historyService.add(item);
  }

  clearHistory() {
    this._historyService.clear();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WeatherController;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apiLink = "https://api.weatherbit.io/v2.0/forecast/daily";
/* unused harmony export apiLink */

const keyMod = "?key=";
/* unused harmony export keyMod */

const key = "91e53c3974b54ac9871fe08adfd31dd9";
/* unused harmony export key */

const daysMod = "&days=";
/* unused harmony export daysMod */

const locMod = "&city=";
/* unused harmony export locMod */

const unitsMod = "&units=";
/* unused harmony export unitsMod */

const iconLink = "https://www.weatherbit.io/static/img/icons/";
/* unused harmony export iconLink */


const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
/* unused harmony export dayOfWeek */


const limit = 30;
/* unused harmony export limit */

const numOfDays = 7;
/* unused harmony export numOfDays */


// Unit systems
const unitSystems = {
  metric: {
    name: "metric",
    code: "M",
    temperatureUnit: "C",
    velocityUnit: "m/s"
  },
  imperial: {
    name: "imperial",
    code: "I",
    temperatureUnit: "F",
    velocityUnit: "mph"
  }
};
/* unused harmony export unitSystems */


// ids of elements
const ids = {
  locFieldId: "loc-field",
  baseUnitsId: "base-units",
  temperatureId: "temperature",
  temperatureUnitsId: "temperature-units",
  addFavoriteBtnId: "add-favorite-btn",
  tempMinId: "temp-min",
  tempMinUnitsId: "temp-min-units",
  tempMaxId: "temp-max",
  tempMaxUnitsId: "temp-max-units",
  locationId: "location",
  iconId: "icon",
  descriptionId: "description",
  humidityId: "humidity",
  velocityId: "velocity",
  velocityUnitsId: "velocity-units",
  directionId: "direction",
  cityListId: "list-of-cities",
  favoritesFieldId: "favorites-field",
  favoritesListId: "favorites-lst",
  favoritesGoBtnId: "favorites-go-btn",
  clearFavoritesBtnId: "clear-favorites-btn",
  historyFieldId: "history-field",
  historyListId: "history-lst",
  historyGoBtnId: "history-go-btn",
  clearHistoryBtnId: "clear-history-btn",
  currentDayId: "current-day",
  anotherDaysId: "another-days"
};
/* unused harmony export ids */


// Mock weather data
const mockData = {
  data: [
    {
      wind_cdir: "NE",
      rh: 93,
      wind_spd: 7,
      pop: 50,
      wind_cdir_full: "northeast",
      slp: 1013.3,
      app_max_temp: -5.5,
      pres: 996.8,
      dewpt: -1,
      snow: 33.23,
      uv: 2,
      ts: 1518091200,
      wind_dir: 45,
      weather: { icon: "s02d", code: "601", description: "Snow" },
      app_min_temp: -5.9,
      max_temp: 0.3,
      snow_depth: 63.2,
      precip: 4.25,
      max_dhi: 218.5,
      datetime: "2018-02-08",
      temp: 0,
      min_temp: 0,
      clouds: 100,
      vis: 4
    },
    {
      wind_cdir: "NE",
      rh: 97,
      wind_spd: 5,
      pop: 75,
      wind_cdir_full: "northeast",
      slp: 1010.2,
      app_max_temp: -3.7,
      pres: 993.7,
      dewpt: -0.4,
      snow: 100.64,
      uv: 2,
      ts: 1518177600,
      wind_dir: 45,
      weather: { icon: "s03d", code: "602", description: "Heavy snow" },
      app_min_temp: -4.9,
      max_temp: 1,
      snow_depth: 163.8,
      precip: 14.05,
      max_dhi: 228.2,
      datetime: "2018-02-09",
      temp: 0,
      min_temp: 0,
      clouds: 98,
      vis: 2
    },
    {
      wind_cdir: "E",
      rh: 97,
      wind_spd: 2,
      pop: 45,
      wind_cdir_full: "east",
      slp: 1013.1,
      app_max_temp: -1.3,
      pres: 996.5,
      dewpt: -0.4,
      snow: 27.65,
      uv: 2,
      ts: 1518264000,
      wind_dir: 90,
      weather: { icon: "s02d", code: "601", description: "Snow" },
      app_min_temp: -2.8,
      max_temp: 1,
      snow_depth: 191.5,
      precip: 3.9,
      max_dhi: 247.6,
      datetime: "2018-02-10",
      temp: 0,
      min_temp: -0.3,
      clouds: 94,
      vis: 4
    },
    {
      wind_cdir: "S",
      rh: 95,
      wind_spd: 1,
      pop: 10,
      wind_cdir_full: "south",
      slp: 1014,
      app_max_temp: 0.3,
      pres: 997.4,
      dewpt: -0.7,
      snow: 3.34,
      uv: 2,
      ts: 1518350400,
      wind_dir: 173,
      weather: { icon: "c03d", code: "803", description: "Broken clouds" },
      app_min_temp: -3,
      max_temp: 1,
      snow_depth: 194.8,
      precip: 0.36,
      max_dhi: 330.3,
      datetime: "2018-02-11",
      temp: 0,
      min_temp: -2,
      clouds: 77,
      vis: 6
    },
    {
      wind_cdir: "NE",
      rh: 93,
      wind_spd: 1,
      pop: 15,
      wind_cdir_full: "northeast",
      slp: 1013.9,
      app_max_temp: 0.1,
      pres: 997.4,
      dewpt: -1,
      snow: 6.01,
      uv: 2,
      ts: 1518436800,
      wind_dir: 45,
      weather: { icon: "c04d", code: "804", description: "Overcast clouds" },
      app_min_temp: -3,
      max_temp: 0.8,
      snow_depth: 200.8,
      precip: 0.69,
      max_dhi: 262.2,
      datetime: "2018-02-12",
      temp: 0,
      min_temp: -2,
      clouds: 91,
      vis: 7
    },
    {
      wind_cdir: "ESE",
      rh: 84,
      wind_spd: 0,
      pop: 15,
      wind_cdir_full: "east-southeast",
      slp: 1019.1,
      app_max_temp: -0.8,
      pres: 1002.1,
      dewpt: -3.4,
      snow: 2.66,
      uv: 2,
      ts: 1518523200,
      wind_dir: 112,
      weather: { icon: "c04d", code: "804", description: "Overcast clouds" },
      app_min_temp: -3.4,
      max_temp: 0,
      snow_depth: 203.5,
      precip: 0.24,
      max_dhi: 267.1,
      datetime: "2018-02-13",
      temp: -1,
      min_temp: -2.3,
      clouds: 90,
      vis: 10
    },
    {
      wind_cdir: "ENE",
      rh: 85,
      wind_spd: 0,
      pop: 10,
      wind_cdir_full: "east-northeast",
      slp: 1026.2,
      app_max_temp: -1.4,
      pres: 1009.3,
      dewpt: -3.2,
      snow: 3.75,
      uv: 2,
      ts: 1518609600,
      wind_dir: 67,
      weather: { icon: "c04d", code: "804", description: "Overcast clouds" },
      app_min_temp: -3.6,
      max_temp: -0.5,
      snow_depth: 207.3,
      precip: 0.36,
      max_dhi: 242.8,
      datetime: "2018-02-14",
      temp: -1,
      min_temp: -2.5,
      clouds: 95,
      vis: 10
    }
  ],
  city_name: "Kiev",
  lon: "30.5238",
  timezone: "Europe/Kiev",
  lat: "50.45466",
  country_code: "UA",
  state_code: "12"
};
/* unused harmony export mockData */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export extractBase */
/* unused harmony export parseLocation */
/* unused harmony export toFahrenheit */
/* unused harmony export toCelsius */
/* unused harmony export toMph */
/* unused harmony export toMs */
/* unused harmony export clearSelect */
/* unused harmony export populateSelect */
function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

function parseLocation(urlString) {
  let parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

function toMph(value) {
  return Math.round(value * 2.25);
}

function toMs(value) {
  return Math.round(value / 2.25);
}

function clearSelect(selectId) {
  while (selectId.firstChild) {
    selectId.removeChild(selectId.firstChild);
  }
}

function populateSelect(doc, selectId, data, direction) {
  let opt = null;
  if (direction == "normal") {
    for (let elem of data) {
      opt = doc.createElement("option");
      opt.value = elem;
      selectId.appendChild(opt);
    }
  } else if (direction == "reverse") {
    for (let i = data.length - 1; i >= 0; i--) {
      opt = doc.createElement("option");
      opt.value = data[i];
      selectId.appendChild(opt);
    }
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StorageService {
  constructor(wnd) {
    this._wnd = wnd;
  }

  write(obj, name) {
    let serialized = JSON.stringify(obj);
    this._wnd.localStorage.setItem(name, serialized);
  }

  read(name) {
    return JSON.parse(this._wnd.localStorage.getItem(name));
  }

  remove(name) {
    this._wnd.localStorage.removeItem(name);
  }

  clear() {
    this._wnd.localStorage.clear();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StorageService;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FavoritesService extends ListService {
  constructor(storageSvc, name) {
    super(storageSvc, name);
  }

  add(item) {
    // is there the same element?
    for (let elem of this._data) {
      if (elem == item) {
        console.log("Item is already present.")
        return false;
      }
    }
    // check length limit
    if (this._data.length == limit) {
      this._data.pop();
    }
    // add item
    this._data.push(item);
    this._data.sort();
    this._storageService.write(this._data, this._name);
    console.log("Favorites service. Adding favorite.");
    console.log(this._data);
    return true;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FavoritesService;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HistoryService extends ListService {
  constructor(storageSvc, name) {
    super(storageSvc, name);
  }

  add(item) {
    // check last
    if (item == this._data[this._data.length - 1]) {
      console.log("Such last entry already exists.");
      return false;
    }
    // remove duplicates
    if (this._data && this._data.length > 0) {
      let tmp = [];
      for (let elem of this._data) {
        if (elem != item) {
          tmp.push(elem);
        }
      }
      this._data = tmp;
    }
    // check length limit
    if (this._data.length == limit) {
      this._data.shift();
    }
    // add item
    this._data.push(item);
    this._storageService.write(this._data, this._name);
    console.log("History service. Adding history item.");
    console.log(this._data);
    return true;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HistoryService;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class WeatherService {
  constructor() {}

  getWeather(city, unitsCode) {
    let url = `${apiLink}${keyMod}${key}${daysMod}${numOfDays}${unitsMod}${unitsCode}${locMod}${city}`;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = WeatherService;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Weather {
  constructor(data, units) {
    this._data = data;
    this._currentUnits = units;
    if (units == "metric") {
      this._currentUnitsCode = unitSystems.metric.code;
      this._currentTemperatureUnits = unitSystems.metric.temperatureUnit;
      this._currentVelocityUnits = unitSystems.metric.velocityUnit;
    } else {
      this._currentUnitsCode = unitSystems.imperial.code;
      this._currentTemperatureUnits = unitSystems.imperial.temperatureUnit;
      this._currentVelocityUnits = unitSystems.imperial.velocityUnit;
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
      this._currentUnitsCode = unitSystems.metric.code;
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
      this._currentUnitsCode = unitSystems.imperial.code;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Weather;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Screen {
  constructor(doc, weather, controller) {
    this._doc = doc;
    this._controller = controller;
    this._weather = weather;
    // controls
    this._favoritesListId = doc.getElementById(ids.favoritesListId);
    this._historyListId = doc.getElementById(ids.historyListId);
    // data
    this._currentDayId = doc.getElementById(ids.currentDayId);
    this._anotherDaysId = doc.getElementById(ids.anotherDaysId);
    // init
    this._init();
  }

  _init() {
    console.log("Screen. Getting favorites");
    populateSelect(
      this._doc,
      this._favoritesListId,
      this._controller.getFavorites(),
      "normal"
    );
    populateSelect(
      this._doc,
      this._historyListId,
      this._controller.getHistory(),
      "reverse"
    );

    this._addListeners(this, this._doc, this._controller);
  }

  _addListeners(view, doc, controller) {
    // add event listener to Clear button
    doc
      .getElementById(ids.locFieldId)
      .addEventListener("change", function(event) {
        let fld = doc.getElementById(ids.locFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to select element
    doc
      .getElementById(ids.baseUnitsId)
      .addEventListener("change", function(event) {
        controller.switchUnits(event.target.value);
      });

    // add event listener to add favorite button
    doc
      .getElementById(ids.addFavoriteBtnId)
      .addEventListener("click", function(event) {
        let result = controller.addFavorite();
        if (result) {
          clearSelect(view._favoritesListId);
          populateSelect(
            view._doc,
            view._favoritesListId,
            controller.getFavorites(),
            "normal"
          );
        }
      });

    // add event listener to go to favorite button
    doc
      .getElementById(ids.favoritesGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(ids.favoritesFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to clear favorites button
    doc
      .getElementById(ids.clearFavoritesBtnId)
      .addEventListener("click", function(event) {
        controller.clearFavorites();
        clearSelect(view._favoritesListId);
        populateSelect(
          view._doc,
          view._favoritesListId,
          controller.getFavorites(),
          "normal"
        );
        let fld = doc.getElementById(ids.favoritesFieldId);
        fld.value = "";
      });

    // add event listener to go to history item button
    doc
      .getElementById(ids.historyGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(ids.historyFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to clear history button
    doc
      .getElementById(ids.clearHistoryBtnId)
      .addEventListener("click", function(event) {
        controller.clearHistory();
        clearSelect(view._historyListId);
        populateSelect(
          view._doc,
          view._historyListId,
          controller.getHistory(),
          "reverse"
        );
        let fld = doc.getElementById(ids.historyFieldId);
        fld.value = "";
      });
  }

  update(weather) {
    // update reference to current Weather object
    this._weather = weather;

    this._currentDayId.innerHTML = "";
    let currentDayString = `<section class="flex-container main-panel">
      <div class="flex-container top-panel">
        <span class="location">
          <div id="location">${weather.data.city_name},${
      weather.data.country_code
    }</div>
        </span>
      </div>
      <div class="flex-container left-panel">
        <div class="left-top">
          <div class="day" id="day">
            ${dayOfWeek[new Date(weather.data.data[0].datetime).getDay()]}
          </div>
          <time class="date" datetime="${weather.data.data[0].datetime}">
            ${weather.data.data[0].datetime}
          </time>
          <div class="add-temp temp-max">
            max: <span id="temp-max">
              ${Math.round(weather.data.data[0].max_temp)}
            </span>&deg;
            <span id="temp-max-units">
              ${weather.currentTemperatureUnits}
            </span>
          </div>
          <div class="add-temp temp-min">
            min: <span id="temp-min">
              ${Math.round(weather.data.data[0].min_temp)}
            </span>&deg;
            <span id="temp-min-units">
              ${weather.currentTemperatureUnits}
            </span>
          </div>
        </div>
        <div class="left-bottom">
          <div class="temperature">
            <span id="temperature">${Math.round(
              weather.data.data[0].temp
            )}</span>&deg;<span id="temperature-units">${
      weather.currentTemperatureUnits
    }</span>
          </div>
        </div>
      </div>
      <div class="flex-container right-panel">
        <div class="right-top">
          <img class="icon" id="icon" 
            src="${iconLink}${weather.data.data[0].weather.icon}.png" 
            alt="weather-state">
        </div>
        <div class="right-bottom">
          <div id="description">
            ${weather.data.data[0].weather.description}
          </div>
          <div class="humidity">
            <img class="humidity-icon" src="img/humidity.png" alt="humidity: ">
            <span id="humidity">
              ${weather.data.data[0].rh}
            </span>%
          </div>
          <div class="wind">
            <span id="velocity">
              ${weather.data.data[0].wind_spd}
            </span><span id="velocity-units">
              ${weather.currentVelocityUnits}
            </span>
            <span id="direction">
              ${weather.data.data[0].wind_cdir}
            </span>
          </div>
        </div>
      </div>
    </section>`;
    this._currentDayId.insertAdjacentHTML("beforeend", currentDayString);

    this._anotherDaysId.innerHTML = "";
    for (let i = 1; i < numOfDays; i++) {
      let yetAnotherDaysString = `<div class="flex-container day-panel">
          <div class="date center">
            ${dayOfWeek[new Date(weather.data.data[i].datetime).getDay()]}
          </div>
          <div>
            <img class="icon" src="${iconLink}${
        weather.data.data[i].weather.icon
      }.png">
          </div>
          <div class="temp center">
            ${weather.data.data[i].temp.toString()}&deg;${
        weather.currentTemperatureUnits
      }
          </div>
        </div>`;
      this._anotherDaysId.insertAdjacentHTML("beforeend", yetAnotherDaysString);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Screen;



/***/ })
/******/ ]);