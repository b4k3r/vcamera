export default class Vector {
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }
}
