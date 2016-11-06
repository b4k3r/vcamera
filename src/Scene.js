import Point2D from './Point2D';
import Point3D from './Point3D';
import Vector from './Vector';
import Polygon from './Polygon';
import PaintersAlgorithm from './PaintersAlgorithm'

export default class Scene {
  constructor(canvasId, figures) {
    this.c         = document.getElementById(canvasId);
    this.ctx       = this.c.getContext("2d");
    this.vpd       = 200;

    this.setPolygons(figures);
    this.setVectors();
  }

  get polygons() {
    return this._polygons;
  }

  get vectors() {
    return this._vectors;
  }

  zoomOut() {
    if (this.vpd < 0) {
      console.error('VPD must be >= 0')
      this.vpd = 5;
    } else {
      this.vpd -= 5;
    }
  }

  zoomIn() {
    this.vpd += 5;
  }

  setPolygons(figures) {
    this._polygons = figures.reduce((polygons, figure) => {
      return polygons.concat(figure.polygons);
    }, []);
  }

  setVectors() {
   this._vectors = this.polygons.reduce((vectors, polygon) => {
      return vectors.concat(polygon.vectors);
    }, []);
  }

  pointTo2D(point) {
    let x = point.x * this.vpd / point.z;
    let y = point.y * this.vpd / point.z;

    return new Point2D(x, y);
  }

  makeProjection() {
    let polygons = [];

    this.polygons.forEach((polygon) => {
      let vectors2D = [];

      polygon.vectors.forEach((v3d) => {
        if (this.isOutOfCamera(v3d.a) || this.isOutOfCamera(v3d.b)) {
          return;
        }

        vectors2D.push(new Vector(this.pointTo2D(v3d.a), this.pointTo2D(v3d.b)));
      });

      polygons.push(new Polygon(vectors2D, polygon.color));
    });

    return polygons;
  }

  isOutOfCamera(point) {
    return point.z <= 0;
  }

  runPaintersAlgorithm() {
    this._polygons.sort(PaintersAlgorithm.compare);
  }

  draw() {
    this.runPaintersAlgorithm();
    let polygons = this.makeProjection();

    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    polygons.forEach((polygon) => {
      let [first, ...tail] = polygon.points;
      if (!first) return;

      this.ctx.fillStyle = polygon.color;
      this.ctx.beginPath();

      this.ctx.moveTo(this.c.width / 2 + first.x, this.c.height / 2 - first.y);
      tail.forEach((tail) => {
        this.ctx.lineTo(this.c.width / 2 + tail.x, this.c.height / 2 - tail.y);
      });

      this.ctx.closePath();
      this.ctx.fill();
    })
  }
}
