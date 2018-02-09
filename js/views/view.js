class Screen {
  constructor(doc, weather, controller) {
    this._doc = doc;
    this._controller = controller;
    this._weather = weather;
    this._temperatureId = doc.getElementById(ids.temperatureId);
    this._temperatureUnitsId = doc.getElementById(ids.temperatureUnitsId);
    this._tempMinId = doc.getElementById(ids.tempMinId);
    this._tempMinUnitsId = doc.getElementById(ids.tempMinUnitsId);
    this._tempMaxId = doc.getElementById(ids.tempMaxId);
    this._tempMaxUnitsId = doc.getElementById(ids.tempMaxUnitsId);
    this._locationId = doc.getElementById(ids.locationId);
    this._iconId = doc.getElementById(ids.iconId);
    this._descriptionId = doc.getElementById(ids.descriptionId);
    this._humidityId = doc.getElementById(ids.humidityId);
    this._velocityId = doc.getElementById(ids.velocityId);
    this._velocityUnitsId = doc.getElementById(ids.velocityUnitsId);
    this._directionId = doc.getElementById(ids.directionId);
    this._cityListId = doc.getElementById(ids.cityListId);
    this._favoritesFieldId = doc.getElementById(ids.favoritesFieldId);
    this._favoritesListId = doc.getElementById(ids.favoritesListId);
    this._historyFieldId = doc.getElementById(ids.historyFieldId);
    this._historyListId = doc.getElementById(ids.historyListId);
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
    this._weather = weather;
    this._temperatureId.innerHTML = Math.round(weather.temperature);
    this._temperatureUnitsId.innerHTML = weather.temperatureUnits;
    this._tempMinId.innerHTML = Math.round(weather.tempMin);
    this._tempMinUnitsId.innerHTML = weather.temperatureUnits;
    this._tempMaxId.innerHTML = Math.round(weather.tempMax);
    this._tempMaxUnitsId.innerHTML = weather.temperatureUnits;
    this._locationId.innerHTML = `${weather.location}, ${weather.country}`;
    this._iconId.src = `${iconLink}${weather.weatherState}.png`;
    this._descriptionId.innerHTML = weather.description;
    this._humidityId.innerHTML = weather.humidity;
    this._velocityId.innerHTML = Math.round(weather.velocity);
    this._velocityUnitsId.innerHTML = weather.velocityUnits;
    this._directionId.innerHTML = weather.direction;
  }
}
