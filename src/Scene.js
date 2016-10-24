import Point2D from './Point2D';
import Point3D from './Point3D';
import Vector from './Vector';

export default class Scene {
  constructor(canvasId, figures) {
    this.c        = document.getElementById(canvasId);
    this.ctx      = this.c.getContext("2d");
    this._vectors = this.setVectors(figures);
    this.vpd     = 200;
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

  setVectors(figures) {
    let vectors = [];

    figures.forEach((figure) => {
      vectors = vectors.concat(figure.vectors);
    })

    // Two lines :)
    vectors = vectors.concat([new Vector(new Point3D(15, -20, 50), new Point3D(15, -20, 75))]);
    vectors = vectors.concat([new Vector(new Point3D(-15, -20, 50), new Point3D(-15, -20, 75))]);

    return vectors;
  }

  pointTo2D(point) {
    let x = point.x * this.vpd / point.z;
    let y = point.y * this.vpd / point.z;

    return new Point2D(x, y);
  }

  makeProjection() {
    let vectors2D = [];

    this._vectors.forEach((v3d) => {
      if (this.isOutOfCamera(v3d.a) || this.isOutOfCamera(v3d.b)) {
        return;
      }

      vectors2D.push(new Vector(this.pointTo2D(v3d.a), this.pointTo2D(v3d.b)));
    })

    return vectors2D;
  }

  isOutOfCamera(point) {
    return point.z <= 0;
  }

  draw() {
    let vectors = this.makeProjection();

    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    vectors.forEach((vector) => {
      this.ctx.beginPath();
      this.ctx.moveTo(this.c.width / 2 + vector.a.x, this.c.height / 2 - vector.a.y);
      this.ctx.lineTo(this.c.width / 2 + vector.b.x, this.c.height / 2 - vector.b.y);
      this.ctx.closePath();
      this.ctx.stroke();
    })
  }
}
