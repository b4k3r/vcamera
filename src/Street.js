import Point3D from './Point3D';
import Polygon from './Polygon';
import Vector from './Vector';

export default class Street {
  constructor(x, y, z, width, height, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.color = color;

    this._polygons = this.createPolygons();
  }

  get polygons() {
    return this._polygons;
  }

  createPolygons() {
    let vectors = [];
    let polygons = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x, this.y, this.z)
      )
    );

    polygons.push(new Polygon(vectors, this.color))

    return polygons;
  }
}
