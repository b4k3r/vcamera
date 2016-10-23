import Point3D from './Point3D';
import Vector from './Vector';

export default class Cube {
  constructor(x, y, z, size) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._size = size;

    this._vectors = this.createVectors();
  }

  get vectors() {
    return this._vectors;
  }

  createVectors() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this._x, this._y, this._z),
        new Point3D(this._x + this._size, this._y, this._z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y, this._z),
        new Point3D(this._x, this._y + this._size, this._z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y, this._z),
        new Point3D(this._x, this._y, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y, this._z + this._size),
        new Point3D(this._x, this._y + this._size, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x + this._size, this._y, this._z + this._size),
        new Point3D(this._x, this._y, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x + this._size, this._y, this._z),
        new Point3D(this._x + this._size, this._y, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x + this._size, this._y, this._z + this._size),
        new Point3D(this._x + this._size, this._y + this._size, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x + this._size, this._y, this._z),
        new Point3D(this._x + this._size, this._y + this._size, this._z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y + this._size, this._z),
        new Point3D(this._x + this._size, this._y + this._size, this._z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x + this._size, this._y + this._size, this._z + this._size),
        new Point3D(this._x + this._size, this._y + this._size, this._z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y + this._size, this._z + this._size),
        new Point3D(this._x + this._size, this._y + this._size, this._z + this._size)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this._x, this._y + this._size, this._z + this._size),
        new Point3D(this._x, this._y + this._size, this._z)
      )
    );


    return vectors;
  }
}
