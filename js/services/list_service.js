export class ListService {
  constructor(storageSvc, name) {
    this._storageService = storageSvc;
    this._name = name;
    this._data = this._storageService.read(this._name);
    if (this._data == null) {
      this._data = [];
    }
  }

  get data() {
    console.log(`ListService. Getting ${this._name} data.`);
    console.log(this._data);
    return this._data;
  }

  clear() {
    this._storageService.remove(this._name);
    this._data = [];
    console.log(`ListService. Clearing ${this._name} data.`);
    console.log(this._data);
  }
}
