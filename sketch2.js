// for red, green, and blue color values
var r, g, b;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;
var radius;
//angle of particle's movement
var theta;
//coordinates of particles
var x;
var y;
//center of the particle
var centerx = 0;
var centery = 0;
var particleSize = 48;
var typeOfMovement = 'normal';

function setup() {
  cnv = createCanvas(720, 400);
  // Pick colors randomly
  g = random(255);
  b = random(255);
  //radius = height * 0.45;
  radius = height/4;
  theta = 0;

  cnv.mouseOver(overCanvas);
  document.onpointermove = moveHandler;
}
function draw() {
  //console.log("in draw");
  background(51);
  translate(width / 2, height / 2);
  //  x = 0;
  // y=0;
  //x = radius * cos(theta);
  // y = radius * sin(theta);
  move(typeOfMovement);
  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(radius, g, b);
  fill(radius, g, b, 127);
  //line(0, 0, x, y);
  ellipse(x, y, particleSize, particleSize);

  // Increase the angle over time
  theta += 0.02;
}

// When the user clicks the mouse
function mousePressed() {
  console.log("pressedCanvas");
  //  console.log("x " + x + " y " + y);     
  //   console.log("mouse coordinates: " + mouseX + " mouseY: " + mouseY);

  var xc = mouseX - width / 2;
  var yc = mouseY - height / 2;
  //  console.log("xc " + xc + " yc " + yc);

  var d = dist(x, y, xc, yc);
  // console.log("la distancia entre mouse y particula " + d);

  //put the center of particle in the pointer
  centerx = xc;
  centery= yc;
  console.log("center: " + centerx + " centery: " + centery);
  console.log("xc " + xc + " yc " + yc);
  radius = 15;
  console.log("radius: " + radius);


  if (d < particleSize / 2) {
    console.log("inside");
    //theta = 0;
    g = random(255);
    b = random(255);
    radius = radius / d;
    if (typeOfMovement === 'normal') {
      //typeOfMovement = 'other';
    } else if (typeOfMovement === 'other') {
      typeOfMovement = 'normal';
    }
    move(typeOfMovement);
  }

}

function overCanvas() {
  console.log("Over Canvas");

  var xc = mouseX - width / 2;
  var yc = mouseY - height / 2;

  var d = dist(x, y, xc, yc);

  if (d < particleSize / 2) {
    console.log("inside");
    //theta = 0;
    g = random(255);
    b = random(255);
    radius = radius / d;
  }
}

function moveHandler(ev) {
  // Process the pointermove event
  console.log("moved");
}

function move(typeOfMovement) {
  if (typeOfMovement === 'normal') {
   // radius = 100;
   // console.log("cx: " + cx);
    x = centerx + radius * cos(theta);
    y = centery + radius * sin(theta);

  } else if (typeOfMovement === 'other') {
    x = 0;
    y = 0;
    theta = 0;
  }
}
