// Constants, related to the weather data provider
export const apiLink = "https://api.weatherbit.io/v2.0/forecast/daily";
export const keyMod = "?key=";
export const key = "91e53c3974b54ac9871fe08adfd31dd9";
export const daysMod = "&days=";
export const locMod = "&city=";
export const unitsMod = "&units=";
export const iconLink = "https://www.weatherbit.io/static/img/icons/";

// Weekday names array
export const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// number of days to forecast
export const numOfDays = 7;

// Value, that limits number of entries in history or favorites lists
export const limit = 30;

// Unit systems
export const unitSystems = {
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

// ids of elements
export const ids = {
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

// Mock weather data
export const mockData = {
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
