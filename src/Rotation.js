import math from 'mathjs'

export default class Rotation {
  constructor(vectors, direction) {
    this.vectors = vectors;
    this.angle = direction * Math.PI / 90
  }

  OX_ROTATION_MATRIX() {
    return [
      [1, 0, 0, 0],
      [0, Math.cos(this.angle), -1 * Math.sin(this.angle), 0],
      [0, Math.sin(this.angle), Math.cos(this.angle), 0],
      [0, 0, 0, 1]
    ]
  }

  OY_ROTATION_MATRIX() {
    return [
      [Math.cos(this.angle), 0, Math.sin(this.angle), 0],
      [0, 1, 0, 0],
      [-1 * Math.sin(this.angle), 0, Math.cos(this.angle), 0],
      [0, 0, 0, 1]
    ]
  }

  OZ_ROTATION_MATRIX() {
    return [
      [Math.cos(this.angle), -1 * Math.sin(this.angle), 0, 0],
      [Math.sin(this.angle), Math.cos(this.angle), 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]
  }

  rotateOX() {
    this.vectors.forEach((v3d) => {
      let matrixA = v3d.a.toMatrix();
      let matrixB = v3d.b.toMatrix();

      let resultA = math.multiply(this.OX_ROTATION_MATRIX(), matrixA);
      let resultB = math.multiply(this.OX_ROTATION_MATRIX(), matrixB);

      v3d.a.updateFromMatrix(resultA);
      v3d.b.updateFromMatrix(resultB);
    })
  }

  rotateOY() {
    this.vectors.forEach((v3d) => {
      let matrixA = v3d.a.toMatrix();
      let matrixB = v3d.b.toMatrix();

      let resultA = math.multiply(this.OY_ROTATION_MATRIX(), matrixA);
      let resultB = math.multiply(this.OY_ROTATION_MATRIX(), matrixB);

      v3d.a.updateFromMatrix(resultA);
      v3d.b.updateFromMatrix(resultB);
    })
  }

  rotateOZ() {
    this.vectors.forEach((v3d) => {
      let matrixA = v3d.a.toMatrix();
      let matrixB = v3d.b.toMatrix();

      let resultA = math.multiply(this.OZ_ROTATION_MATRIX(), matrixA);
      let resultB = math.multiply(this.OZ_ROTATION_MATRIX(), matrixB);


      v3d.a.updateFromMatrix(resultA);
      v3d.b.updateFromMatrix(resultB);
    })
  }
}
