export default class Point2D {
    constructor(x, y) {
      this._x = x;
      this._y = y;
    }

    get x() {
      return this._x;
    }

    get y() {
      return this._y;
    }
}
