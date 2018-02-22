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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Constants, related to the weather data provider
const apiLink = "https://api.weatherbit.io/v2.0/forecast/daily";
/* harmony export (immutable) */ __webpack_exports__["a"] = apiLink;

const keyMod = "?key=";
/* harmony export (immutable) */ __webpack_exports__["g"] = keyMod;

const key = "91e53c3974b54ac9871fe08adfd31dd9";
/* harmony export (immutable) */ __webpack_exports__["f"] = key;

const daysMod = "&days=";
/* harmony export (immutable) */ __webpack_exports__["c"] = daysMod;

const locMod = "&city=";
/* harmony export (immutable) */ __webpack_exports__["i"] = locMod;

const unitsMod = "&units=";
/* harmony export (immutable) */ __webpack_exports__["m"] = unitsMod;

const iconLink = "https://www.weatherbit.io/static/img/icons/";
/* harmony export (immutable) */ __webpack_exports__["d"] = iconLink;


// Weekday names array
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
/* harmony export (immutable) */ __webpack_exports__["b"] = dayOfWeek;


// number of days to forecast
const numOfDays = 7;
/* harmony export (immutable) */ __webpack_exports__["k"] = numOfDays;


// Value, that limits number of entries in history or favorites lists
const limit = 30;
/* harmony export (immutable) */ __webpack_exports__["h"] = limit;


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
/* harmony export (immutable) */ __webpack_exports__["l"] = unitSystems;


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
/* harmony export (immutable) */ __webpack_exports__["e"] = ids;


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
/* harmony export (immutable) */ __webpack_exports__["j"] = mockData;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = extractBase;
/* harmony export (immutable) */ __webpack_exports__["d"] = parseLocation;
/* harmony export (immutable) */ __webpack_exports__["g"] = toFahrenheit;
/* harmony export (immutable) */ __webpack_exports__["f"] = toCelsius;
/* harmony export (immutable) */ __webpack_exports__["h"] = toMph;
/* harmony export (immutable) */ __webpack_exports__["i"] = toMs;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearSelect;
/* harmony export (immutable) */ __webpack_exports__["e"] = populateSelect;
/* harmony export (immutable) */ __webpack_exports__["a"] = addFavoriteLocation;
/**
 * Extracts base url from full url string
 * @param {string} urlString - current full url string
 * @returns {string} base url
 */
function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

/**
 * Extracts location from full url string
 * @param {string} urlString - current full url string
 * @returns {string} location
 */
function parseLocation(urlString) {
  let parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

/**
 * Converts temperature value from degrees Celsius to degrees Fahrenheit
 * @param {number} value - current value in degrees Celsius
 * @returns {number} value in degrees Fahrenheit
 */
function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

/**
 * Converts temperature value from degrees Fahrenheit to degrees Celsius
 * @param {number} value - current value in degrees Fahrenheit
 * @returns {number} value in degrees Celsius
 */
function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

/**
 * Converts velocity value from meters per second to miles per hour
 * @param {number} value - current value in m/s
 * @returns {number} value in mph
 */
function toMph(value) {
  return Math.round(value * 2.25);
}

/**
 * Converts velocity value from miles per hour to meters per second
 * @param {number} value - current value in mph
 * @returns {number} value in m/s
 */
function toMs(value) {
  return Math.round(value / 2.25);
}

/**
 * Clears content of the specified html element
 * @param {HTMLElementObject} selectId - html element
 */
function clearSelect(selectId) {
  while (selectId.firstChild) {
    selectId.removeChild(selectId.firstChild);
  }
}

/**
 * Populates <select> html element with child elements
 * @param {Document} doc - current Document object
 * @param {HTMLElementObject} selectId - html element
 * @param {[]]} data - data to insert
 * @param {string} direction - in "normal" or "reverse" direction
 */
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


/**
 * Helper function for 'add favorite' button listener
 * @param {Document} doc - current Document object
 * @param {WeatherController} controller - current WeatherController object
 * @param {HTMLElementObject} favListId - html element
 */
function addFavoriteLocation(doc, controller, favListId) {
  console.log("Inside add favorite listener");
  let result = controller.addFavorite();
  if (result) {
    clearSelect(favListId);
    populateSelect(
      doc,
      favListId,
      controller.getFavorites(),
      "normal"
    );
  }
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class representing a list service. */
class ListService {
  /**
   * Creates list service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    this._storageService = storageSvc;
    this._name = name;
    this._data = this._storageService.read(this._name);
    if (this._data == null) {
      this._data = [];
    }
  }

  /**
   * Getter function for reading current data from the list
   * @returns {[]} - current data
   */
  get data() {
    console.log(`ListService. Getting ${this._name} data.`);
    console.log(this._data);
    return this._data;
  }

  /**
   * Clears data in the list
   */
  clear() {
    this._storageService.remove(this._name);
    this._data = [];
    console.log(`ListService. Clearing ${this._name} data.`);
    console.log(this._data);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ListService;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_controller__ = __webpack_require__(4);


window.onload = function() {
  let weatherController = new __WEBPACK_IMPORTED_MODULE_0__controllers_controller__["a" /* WeatherController */](document, window);
  weatherController.start(window.location.href);
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_favorites_service_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_history_service_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_weather_service_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_model_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_view_js__ = __webpack_require__(10);









/** Class representing a weather controller. */
class WeatherController {
  /**
   * Creates weather controller.
   * @constructor
   */
  constructor(doc, wnd) {
    this._doc = doc;
    this._wnd = wnd;
    this._base = __WEBPACK_IMPORTED_MODULE_1__helper_js__["c" /* extractBase */](this._wnd.location.href);
    this._storageService = new __WEBPACK_IMPORTED_MODULE_2__services_storage_service_js__["a" /* StorageService */](this._wnd);
    this._favoritesService = new __WEBPACK_IMPORTED_MODULE_3__services_favorites_service_js__["a" /* FavoritesService */](
      this._storageService,
      "favorites"
    );
    this._historyService = new __WEBPACK_IMPORTED_MODULE_4__services_history_service_js__["a" /* HistoryService */](this._storageService, "history");
    this._weatherService = new __WEBPACK_IMPORTED_MODULE_5__services_weather_service_js__["a" /* WeatherService */]();
    this._weather = new __WEBPACK_IMPORTED_MODULE_6__models_model_js__["a" /* Weather */](__WEBPACK_IMPORTED_MODULE_0__config_js__["j" /* mockData */], "metric");
    this._screen = new __WEBPACK_IMPORTED_MODULE_7__views_view_js__["a" /* Screen */](doc, this._weather, this);
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
          let listId = this._doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].historyListId);
          __WEBPACK_IMPORTED_MODULE_1__helper_js__["b" /* clearSelect */](listId);
          __WEBPACK_IMPORTED_MODULE_1__helper_js__["e" /* populateSelect */](this._doc, listId, this.getHistory(), "reverse");
        }
      });
  }

  start(startUrl) {
    let loc = __WEBPACK_IMPORTED_MODULE_1__helper_js__["d" /* parseLocation */](startUrl);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Class representing a storage service. */
class StorageService {
  /**
   * Creates storage service.
   * @constructor
   * @param {Window} wnd - current Window object
   */
  constructor(wnd) {
    this._wnd = wnd;
  }

  /**
   * Writes object to the local storage
   * @param {Object} obj - object to add
   * @param {string} name - name of the key
   */
  write(obj, name) {
    let serialized = JSON.stringify(obj);
    this._wnd.localStorage.setItem(name, serialized);
  }

  /**
   * Reads object from the local storage
   * @param {string} name - name of the key
   */
  read(name) {
    return JSON.parse(this._wnd.localStorage.getItem(name));
  }

  /**
   * Removes object from the local storage
   * @param {string} name - name of the key
   */
  remove(name) {
    this._wnd.localStorage.removeItem(name);
  }

  /**
   * Clears local storage
   */
  clear() {
    this._wnd.localStorage.clear();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StorageService;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service_js__ = __webpack_require__(2);



/** Class representing a favorites service. */
class FavoritesService extends __WEBPACK_IMPORTED_MODULE_1__services_list_service_js__["a" /* ListService */] {
  /**
   * Creates favorites service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    super(storageSvc, name);
  }

  /**
   * Adds item to the favorites list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
  add(item) {
    // is there the same element?
    for (let elem of this._data) {
      if (elem == item) {
        console.log("Item is already present.")
        return false;
      }
    }
    // check length limit
    if (this._data.length == __WEBPACK_IMPORTED_MODULE_0__config_js__["h" /* limit */]) {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service_js__ = __webpack_require__(2);



/** Class representing a history service. */
class HistoryService extends __WEBPACK_IMPORTED_MODULE_1__services_list_service_js__["a" /* ListService */] {
  /**
   * Creates history service.
   * @constructor
   * @param {StorageService} storageSvc - StorageService object
   * @param {string} name - name of the key in the local storage
   */
  constructor(storageSvc, name) {
    super(storageSvc, name);
  }

  /**
   * Adds item to the history list
   * @param {string} item - item to add to the list
   * @returns {boolean} true, if item was added, false - otherwise
   */
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
    if (this._data.length == __WEBPACK_IMPORTED_MODULE_0__config_js__["h" /* limit */]) {
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);


/** Class representing a weather service. */
class WeatherService {
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
    let url = `${__WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* apiLink */]}${__WEBPACK_IMPORTED_MODULE_0__config_js__["g" /* keyMod */]}${__WEBPACK_IMPORTED_MODULE_0__config_js__["f" /* key */]}${__WEBPACK_IMPORTED_MODULE_0__config_js__["c" /* daysMod */]}${__WEBPACK_IMPORTED_MODULE_0__config_js__["k" /* numOfDays */]}${__WEBPACK_IMPORTED_MODULE_0__config_js__["m" /* unitsMod */]}${unitsCode}${__WEBPACK_IMPORTED_MODULE_0__config_js__["i" /* locMod */]}${city}`;
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_js__ = __webpack_require__(1);



/** Class representing a model. */
class Weather {
  /**
   * Creates model.
   * @constructor
   * @param {Object} data - weather data
   * @param {string} units - name of the system of measurement units
   */
  constructor(data, units) {
    this._data = data;
    this._currentUnits = units;
    if (units == "metric") {
      this._currentUnitsCode = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.code;
      this._currentTemperatureUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.temperatureUnit;
      this._currentVelocityUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.velocityUnit;
    } else {
      this._currentUnitsCode = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.code;
      this._currentTemperatureUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.temperatureUnit;
      this._currentVelocityUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.velocityUnit;
    }
  }

  /** Getters section. */

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

  /** Methods section. */

  /**
   * Switches current system of measurement units.
   * @param {string} units - name of the system of measurement units
   */
  switchUnits(units) {
    if (this._currentUnits == units) return;
    if (units == "metric") {
      this._currentUnits = "metric";
      this._currentUnitsCode = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.code;
      this._currentTemperatureUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.temperatureUnit;
      this._currentVelocityUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].metric.velocityUnit;
      for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__config_js__["k" /* numOfDays */]; i++) {
        this._data.data[i].temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["f" /* toCelsius */](this._data.data[i].temp);
        this._data.data[i].min_temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["f" /* toCelsius */](this._data.data[i].min_temp);
        this._data.data[i].max_temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["f" /* toCelsius */](this._data.data[i].max_temp);
        this._data.data[i].wind_spd = __WEBPACK_IMPORTED_MODULE_1__helper_js__["i" /* toMs */](this._data.data[i].wind_spd);
      }
    } else if (units == "imperial") {
      this._currentUnits = "imperial";
      this._currentUnitsCode = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.code;
      this._currentTemperatureUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.temperatureUnit;
      this._currentVelocityUnits = __WEBPACK_IMPORTED_MODULE_0__config_js__["l" /* unitSystems */].imperial.velocityUnit;
      for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__config_js__["k" /* numOfDays */]; i++) {
        this._data.data[i].temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["g" /* toFahrenheit */](this._data.data[i].temp);
        this._data.data[i].min_temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["g" /* toFahrenheit */](this._data.data[i].min_temp);
        this._data.data[i].max_temp = __WEBPACK_IMPORTED_MODULE_1__helper_js__["g" /* toFahrenheit */](this._data.data[i].max_temp);
        this._data.data[i].wind_spd = __WEBPACK_IMPORTED_MODULE_1__helper_js__["h" /* toMph */](this._data.data[i].wind_spd);
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Weather;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_js__ = __webpack_require__(1);



/** Class representing a view. */
class Screen {
  /**
   * Creates view.
   * @constructor
   * @param {Document} doc - current Document object
   * @param {Weather} weather - current Weather object
   * @param {WeatherController} controller - current WeatherController object
   */
  constructor(doc, weather, controller) {
    this._doc = doc;
    this._controller = controller;
    this._weather = weather;
    // controls
    this._favoritesListId = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].favoritesListId);
    this._historyListId = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].historyListId);
    // data
    this._currentDayId = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].currentDayId);
    this._anotherDaysId = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].anotherDaysId);
    // init
    this._init();
  }

  /**
   * Initializes current view elements.
   */
  _init() {
    console.log("Screen. Getting favorites");
    __WEBPACK_IMPORTED_MODULE_1__helper_js__["e" /* populateSelect */](
      this._doc,
      this._favoritesListId,
      this._controller.getFavorites(),
      "normal"
    );
    __WEBPACK_IMPORTED_MODULE_1__helper_js__["e" /* populateSelect */](
      this._doc,
      this._historyListId,
      this._controller.getHistory(),
      "reverse"
    );

    this._addListeners(this, this._doc, this._controller);
  }

  /**
   * Adds listeners to the current view elements.
   * @param {Screen} view - current Screen object
   * @param {Document} doc - current Document object
   * @param {WeatherController} controller - current WeatherController object
   */
  _addListeners(view, doc, controller) {
    // adds event listener to Clear button
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].locFieldId)
      .addEventListener("change", function(event) {
        let fld = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].locFieldId);
        let loc = fld.value.trim();
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // adds event listener to select units element
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].baseUnitsId)
      .addEventListener("change", function(event) {
        controller.switchUnits(event.target.value);
      });

    // adds event listener to go to favorite button
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].favoritesGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].favoritesFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // adds event listener to clear favorites button
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].clearFavoritesBtnId)
      .addEventListener("click", function(event) {
        controller.clearFavorites();
        __WEBPACK_IMPORTED_MODULE_1__helper_js__["b" /* clearSelect */](view._favoritesListId);
        __WEBPACK_IMPORTED_MODULE_1__helper_js__["e" /* populateSelect */](
          view._doc,
          view._favoritesListId,
          controller.getFavorites(),
          "normal"
        );
        let fld = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].favoritesFieldId);
        fld.value = "";
      });

    // adds event listener to go to history item button
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].historyGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].historyFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // adds event listener to clear history button
    doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].clearHistoryBtnId)
      .addEventListener("click", function(event) {
        controller.clearHistory();
        __WEBPACK_IMPORTED_MODULE_1__helper_js__["b" /* clearSelect */](view._historyListId);
        __WEBPACK_IMPORTED_MODULE_1__helper_js__["e" /* populateSelect */](
          view._doc,
          view._historyListId,
          controller.getHistory(),
          "reverse"
        );
        let fld = doc.getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].historyFieldId);
        fld.value = "";
      });
  }

  /**
   * Updates current view based on weather data.
   * @param {Weather} weather - current Weather object
   */
  update(weather) {
    console.log("Inside update");
    // update reference to current Weather object
    this._weather = weather;

    this._currentDayId.innerHTML = "";
    let currentDayString = `<section class="flex-container main-panel">
      <div class="flex-container top-panel">
        <span>
          <button class="btn" 
            id="add-favorite-btn" 
            title="Adds city to favorites" 
            aria-label="Add favorite location">
            <i class="fa fa-star" aria-hidden="true"></i>
          </button>
        </span>
        <span class="location" id="location">${weather.data.city_name},${
          weather.data.country_code
        }</span>
      </div>
      <div class="flex-container left-panel">
        <div class="left-top">
          <div class="day" id="day">
            ${__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* dayOfWeek */][new Date(weather.data.data[0].datetime).getDay()]}
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
            src="${__WEBPACK_IMPORTED_MODULE_0__config_js__["d" /* iconLink */]}${weather.data.data[0].weather.icon}.png" 
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

    // dynamically add event listener
    let doc = this._doc;
    let controller = this._controller;
    let favListId = this._favoritesListId;
    this._doc
      .getElementById(__WEBPACK_IMPORTED_MODULE_0__config_js__["e" /* ids */].addFavoriteBtnId)
      .addEventListener("click", function() {
        __WEBPACK_IMPORTED_MODULE_1__helper_js__["a" /* addFavoriteLocation */](doc, controller, favListId);
      });

    this._anotherDaysId.innerHTML = "";
    for (let i = 1; i < __WEBPACK_IMPORTED_MODULE_0__config_js__["k" /* numOfDays */]; i++) {
      let yetAnotherDaysString = `<div class="flex-container day-panel">
          <div class="date center">
            ${__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* dayOfWeek */][new Date(weather.data.data[i].datetime).getDay()]}
          </div>
          <div>
            <img class="icon" src="${__WEBPACK_IMPORTED_MODULE_0__config_js__["d" /* iconLink */]}${
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