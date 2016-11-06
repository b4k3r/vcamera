import Point3D from './Point3D';
import Polygon from './Polygon';
import Vector from './Vector';

export default class Cuboid {
  constructor(x, y, z, width, height, color) {
    this.x         = x;
    this.y         = y;
    this.z         = z;
    this.width     = width;
    this.height    = height;
    this.color     = color;
    this._polygons = []

    this.createWalls();
  }

  get polygons() {
    return this._polygons;
  }

  createWalls() {
    this.createFrontWall();
    this.createBackWall();
    this.createBottomWall();
    this.createTopWall();
    this.createLeftWall();
    this.createRightWall();
  }

  createFrontWall() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    );

    this._polygons.push(new Polygon(vectors, this.color))
  }

  createBackWall() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    );

   this._polygons.push(new Polygon(vectors, this.color))
  }

  createBottomWall() {
   let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    );

    this._polygons.push(new Polygon(vectors, this.color))
  }

  createTopWall() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    );

   this._polygons.push(new Polygon(vectors, this.color))
  }

  createLeftWall() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    );

   this._polygons.push(new Polygon(vectors, this.color))
  }

  createRightWall() {
    let vectors = [];

    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z + this.height),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    );
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    );

    this._polygons.push(new Polygon(vectors, this.color))
  }
}
