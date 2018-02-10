class WeatherController {
  constructor(doc, wnd) {
    this._doc = doc;
    this._wnd = wnd;
    this._base = extractBase(this._wnd.location.href);
    this._storageService = new StorageService(this._wnd);
    this._favoritesService = new FavoritesService(
      this._storageService,
      "favorites"
    );
    this._historyService = new HistoryService(this._storageService, "history");
    this._weatherService = new WeatherService();
    this._weather = new Weather(mockData, "metric");
    this._screen = new Screen(doc, this._weather, this);
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
        this._weather = new Weather(data, this._weather.currentUnits);
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
