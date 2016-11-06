import Controller from './Controller';
import Street from './Street';
import Cuboid from './Cuboid';
import Scene from './Scene';

let cube1      = new Cuboid(25, -20, 50, 25, 25, 'red');
let cube2      = new Cuboid(-50, -20, 50, 25, 25, 'green');
let street     = new Street(-15, -20, 40, 25, 55, 'gray');
let cuboid     = new Cuboid(-45, -20, 105, 90, 40, 'purple');
let scene      = new Scene('camera3d', [cube1, cube2, street, cuboid])
let controller = new Controller(scene);

controller.run();
