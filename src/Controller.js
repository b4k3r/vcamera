import Rotation from './Rotation';
import Translation from './Translation';

export default class Controller {
  constructor(scene) {
    this.scene = scene;
    this.vectors = scene.vectors;
  }

  run() {
    window.requestAnimationFrame(this.scene.draw.bind(this.scene));

    document.addEventListener('keydown', (event) => {
      const keyName = event.key;

      if (keyName === 'w') {
        new Translation(this.scene.vectors).moveUp();
      }

      if (keyName === 's') {
        new Translation(this.scene.vectors).moveDown();
      }

      if (keyName === 'a') {
        new Translation(this.scene.vectors).moveLeft();
      }

      if (keyName === 'd') {
        new Translation(this.scene.vectors).moveRight();
      }

      if (keyName === 'e') {
        new Translation(this.scene.vectors).moveBack();
      }

      if (keyName === 'q') {
        new Translation(this.scene.vectors).moveForward();
      }

      if (keyName === 'ArrowLeft') {
        new Rotation(this.vectors, -1).rotateOX();
      }

      if (keyName === 'ArrowRight') {
        new Rotation(this.vectors, 1).rotateOX();
      }

      if (keyName === 'ArrowUp') {
        new Rotation(this.vectors, 1).rotateOY();
      }

      if (keyName === 'ArrowDown') {
        new Rotation(this.vectors, -1).rotateOY();
      }

      if (keyName === 'PageUp') {
        new Rotation(this.vectors, 1).rotateOZ();
      }

      if (keyName === 'PageDown') {
        new Rotation(this.vectors, -1).rotateOZ();
      }

      if (keyName === '=') {
        this.scene.zoomIn();
      }

      if (keyName === '-') {
        this.scene.zoomOut();
      }

      window.requestAnimationFrame(this.scene.draw.bind(this.scene));
    }, false);
  }
}
