import math from 'mathjs'

export default class Translation {
  constructor(vectors) {
    this.vectors = vectors;
    this.step = 2;
  }

  moveUp() {
    this.vectors.forEach((v3d) => {
      v3d.a.y -= this.step;
      v3d.b.y -= this.step;
    })
  }

  moveDown() {
    this.vectors.forEach((v3d) => {
      v3d.a.y += this.step;
      v3d.b.y += this.step;
    })
  }

  moveLeft() {
    this.vectors.forEach((v3d) => {
      v3d.a.x += this.step;
      v3d.b.x += this.step;
    })
  }

  moveRight() {
    this.vectors.forEach((v3d) => {
      v3d.a.x -= this.step;
      v3d.b.x -= this.step;
    })
  }

  moveForward() {
    this.vectors.forEach((v3d) => {
      v3d.a.z -= this.step;
      v3d.b.z -= this.step;
    })
  }

  moveBack() {
    this.vectors.forEach((v3d) => {
      v3d.a.z += this.step;
      v3d.b.z += this.step;
    })
  }
}
