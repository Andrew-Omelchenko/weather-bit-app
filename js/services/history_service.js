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
