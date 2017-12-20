// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array of objects
var oscillators = [];
var countParticles = 10;
function setup()  {
  createCanvas(640, 360);
  // Initialize all objects
  for (var i = 0; i < countParticles; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(51);
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}