import * as config from "../config.js";
import * as helper from "../helper.js";

/** Class representing a view. */
export class Screen {
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
    this._favoritesListId = doc.getElementById(config.ids.favoritesListId);
    this._historyListId = doc.getElementById(config.ids.historyListId);
    // data
    this._currentDayId = doc.getElementById(config.ids.currentDayId);
    this._anotherDaysId = doc.getElementById(config.ids.anotherDaysId);
    // init
    this._init();
  }

  /**
   * Initializes current view elements.
   */
  _init() {
    console.log("Screen. Getting favorites");
    helper.populateSelect(
      this._doc,
      this._favoritesListId,
      this._controller.getFavorites(),
      "normal"
    );
    helper.populateSelect(
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
    // add event listener to Clear button
    doc
      .getElementById(config.ids.locFieldId)
      .addEventListener("change", function(event) {
        let fld = doc.getElementById(config.ids.locFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to select units element
    doc
      .getElementById(config.ids.baseUnitsId)
      .addEventListener("change", function(event) {
        controller.switchUnits(event.target.value);
      });

    // add event listener to add favorite button
    doc
      .getElementById(config.ids.addFavoriteBtnId)
      .addEventListener("click", function(event) {
        let result = controller.addFavorite();
        if (result) {
          helper.clearSelect(view._favoritesListId);
          helper.populateSelect(
            view._doc,
            view._favoritesListId,
            controller.getFavorites(),
            "normal"
          );
        }
      });

    // add event listener to go to favorite button
    doc
      .getElementById(config.ids.favoritesGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(config.ids.favoritesFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to clear favorites button
    doc
      .getElementById(config.ids.clearFavoritesBtnId)
      .addEventListener("click", function(event) {
        controller.clearFavorites();
        helper.clearSelect(view._favoritesListId);
        helper.populateSelect(
          view._doc,
          view._favoritesListId,
          controller.getFavorites(),
          "normal"
        );
        let fld = doc.getElementById(config.ids.favoritesFieldId);
        fld.value = "";
      });

    // add event listener to go to history item button
    doc
      .getElementById(config.ids.historyGoBtnId)
      .addEventListener("click", function(event) {
        let fld = doc.getElementById(config.ids.historyFieldId);
        let loc = fld.value;
        if (loc == "") return;
        controller.changeLocation(loc);
        fld.value = "";
      });

    // add event listener to clear history button
    doc
      .getElementById(config.ids.clearHistoryBtnId)
      .addEventListener("click", function(event) {
        controller.clearHistory();
        helper.clearSelect(view._historyListId);
        helper.populateSelect(
          view._doc,
          view._historyListId,
          controller.getHistory(),
          "reverse"
        );
        let fld = doc.getElementById(config.ids.historyFieldId);
        fld.value = "";
      });
  }

  /**
   * Updates current view based on weather data.
   * @param {Weather} weather - current Weather object
   */
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
            ${config.dayOfWeek[new Date(weather.data.data[0].datetime).getDay()]}
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
            src="${config.iconLink}${weather.data.data[0].weather.icon}.png" 
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
    for (let i = 1; i < config.numOfDays; i++) {
      let yetAnotherDaysString = `<div class="flex-container day-panel">
          <div class="date center">
            ${config.dayOfWeek[new Date(weather.data.data[i].datetime).getDay()]}
          </div>
          <div>
            <img class="icon" src="${config.iconLink}${
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
