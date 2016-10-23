import Controller from './Controller';
import Cube from './Cube';
import Scene from './Scene';

let cube1      = new Cube(25, -20, 50, 25);
let cube2      = new Cube(-50, -20, 50, 25);
let scene      = new Scene('camera3d', [cube1, cube2])
let controller = new Controller(scene);

controller.run();
