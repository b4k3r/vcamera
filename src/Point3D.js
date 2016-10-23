export default class Point3D {
    constructor(x, y, z) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = 1.0;
    }

    get x() {
      return this._x;
    }

    set x(value) {
      this._x = value;
    }

    get y() {
      return this._y;
    }

    set y(value) {
      this._y = value;
    }

    get z() {
      return this._z;
    }

    set z(value) {
      this._z = value;
    }

    toMatrix() {
      return [this._x, this._y, this._z, this._w]
    }

    normalize() {
      new Point3D()
    }

    updateFromMatrix(matrix) {
      this._x = matrix[0];
      this._y = matrix[1];
      this._z = matrix[2];
      this._w = matrix[3];
    }
}
