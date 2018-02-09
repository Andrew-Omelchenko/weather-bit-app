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