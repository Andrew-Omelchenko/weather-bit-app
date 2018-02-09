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
    let currentDayString =
    `<section class="flex-container main-panel">
      <div class="flex-container top-panel">
        <span class="location">
          <div id="location">location</div>
        </span>
      </div>
      <div class="flex-container left-panel">
        <div class="left-top">
          <div class="day" id="day">Friday</div>
          <time class="date" datetime="2018-02-09">2018-02-09</time>
          <div class="add-temp temp-min">
            min: <span id="temp-min">0</span>&deg;<span id="temp-min-units">temperature-units</span>
          </div>
          <div class="add-temp temp-max">
            max: <span id="temp-max">0</span>&deg;<span id="temp-max-units">temperature-units</span>
          </div>
        </div>
        <div class="left-bottom">
          <div class="temperature">
            <span id="temperature">0</span>&deg;<span id="temperature-units">temperature-units</span>
          </div>
        </div>
      </div>
      <div class="flex-container right-panel">
        <div class="right-top">
          <img class="icon" id="icon" src="https://www.weatherbit.io/static/img/icons/s02d.png" alt="weather-state">
        </div>
        <div class="right-bottom">
          <div id="description">none</div>
          <div class="humidity">
            <img class="humidity-icon" src="img/humidity.png" alt="humidity: ">
            <span id="humidity">0</span>%
          </div>
          <div class="wind">
            <span id="velocity">0</span><span id="velocity-units">velocity-units</span>
            <span id="direction">direction</span>
          </div>
        </div>
      </div>
    </section>`;
    this._currentDayId.insertAdjacentHTML('beforeend', currentDayString);
    // this._temperatureId.innerHTML = Math.round(weather.temperature);
    // this._temperatureUnitsId.innerHTML = weather.temperatureUnits;
    // this._tempMinId.innerHTML = Math.round(weather.tempMin);
    // this._tempMinUnitsId.innerHTML = weather.temperatureUnits;
    // this._tempMaxId.innerHTML = Math.round(weather.tempMax);
    // this._tempMaxUnitsId.innerHTML = weather.temperatureUnits;
    // this._locationId.innerHTML = `${weather.location}, ${weather.country}`;
    // this._iconId.src = `${iconLink}${weather.weatherState}.png`;
    // this._descriptionId.innerHTML = weather.description;
    // this._humidityId.innerHTML = weather.humidity;
    // this._velocityId.innerHTML = Math.round(weather.velocity);
    // this._velocityUnitsId.innerHTML = weather.velocityUnits;
    // this._directionId.innerHTML = weather.direction;

    this._anotherDaysId.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
      let yetAnotherDaysString =
        `<div class="flex-container day-panel">
          <div class="date center">
            ${dayOfWeek[new Date(weather.data.data[i].datetime).getDay()]}
          </div>
          <div>
            <img class="icon" src="${iconLink}${weather.data.data[i].weather.icon}.png">
          </div>
          <div class="temp center">
            ${weather.data.data[i].temp.toString()}&deg;${weather.currentTemperatureUnits}
          </div>
        </div>`;
      this._anotherDaysId.insertAdjacentHTML('beforeend', yetAnotherDaysString);
    }
  }
}
