let sun;
let sunTexture
let textures = [];

function preload() {
  sunTexture = loadImage('textures/sun.jpg');
  textures[0] = loadImage('textures/earth.jpg');
  textures[1] = loadImage('textures/mars.jpg');
  textures[2] = loadImage('textures/mercury.jpg');
  textures[3] = loadImage('textures/moon.jpg');
  textures[4] = loadImage('textures/neptune.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() {
    return false;
  }
  sun = new Planet(50, 0, 0, 0, sunTexture);
  sun.spawnMoons(5, 1);
  //frameRate(10);
}

function draw() {
  background(0);
  lights();
  sun.show();
  sun.orbit();
}