import Point3D from './Point3D'

export default class Polygon {
  constructor(vectors, color) {
    this._vectors = vectors;
    this._color   = color;

    this.setPoints();
  }

  get color() {
    return this._color;
  }

  get vectors() {
    return this._vectors;
  }

  get points() {
    return this._points;
  }

  setPoints() {
    this._points = this.vectors.reduce((points, vector) => {
      points.push(vector.a);
      return points;
    }, []);
  }

  distanceToObserver() {
    let avr = new Point3D(
      this.sumCoordinates('x') / this.points.length,
      this.sumCoordinates('y') / this.points.length,
      this.sumCoordinates('z') / this.points.length
    );

    return Math.sqrt(
      Math.pow(avr.x, 2) + Math.pow(avr.y, 2) + Math.pow(avr.z, 2)
    );
  }

  sumCoordinates(coordinate) {
    return this.points.reduce((sum, point) => {
      return sum += point[coordinate];
    }, 0);
  }

  maxZ() {
    return Math.max(...this.points.map(p => p.z))
  }

  minZ() {
    return Math.min(...this.points.map(p => p.z))
  }
}
