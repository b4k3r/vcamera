import math from 'mathjs'

export default class Rotation {
  constructor(vectors, direction) {
    this.vectors = vectors;
    this.angle   = direction * Math.PI / 90
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

  rotate(coordinate) {
    this.vectors.forEach((vector) => {
      let matrixA = vector.a.toMatrix();
      let matrixB = vector.b.toMatrix();

      let resultA = math.multiply(this[coordinate + '_ROTATION_MATRIX'](), matrixA);
      let resultB = math.multiply(this[coordinate + '_ROTATION_MATRIX'](), matrixB);

      vector.a.updateFromMatrix(resultA);
      vector.b.updateFromMatrix(resultB);
    });
  }
}
