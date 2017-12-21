// for red, green, and blue color values
var r, g, b;
var angle = 0;
var aVelocity = 0.01;
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
var cxSpeed = 12;
var cySpeed = 12;
var xc;
var yc;
var forceX;
var forceY;
var m;

function setup() {
  cnv = createCanvas(720, 400);
  // Pick colors randomly
  g = random(255);
  b = random(255);
  //radius = height * 0.45;
  radius = height/4;
  theta = 0;
  x=0;
  y=0
  //cnv.mouseOver(overCanvas);
  //document.onpointermove = moveHandler;
}
function draw() {
  //console.log("in draw");
  background(51);
  translate(width / 2, height / 2);
  move(typeOfMovement);
  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(radius, g, b);
  fill(radius, g, b, 127);
  ellipse(x, y, particleSize, particleSize);

  // Increase the angle over time
  //theta += 0.02;
}

// When the user clicks the mouse
function mousePressed() {
  console.log("pressedCanvas");
  xc = mouseX - width / 2;
  yc = mouseY - height / 2;
  console.log("x " + x + " y " + y);
  console.log("xc " + xc + " yc " + yc);
  
  forceX = xc - x;
  forceY = yc - y;
  m = (xc - x)/(yc - y);
  console.log("forceX " + forceX + " forceY " + forceY);
  console.log("m " + m);

  var d = dist(x, y, xc, yc);
  cxSpeed = random(-100,100);
  cySpeed = random(-100,100);
  
  //put the center of particle in the pointer
  //centerx = xc + cxSpeed;
  //centery= yc + cySpeed;

  radius = 15;
  
  if (typeOfMovement === 'normal') {
    typeOfMovement = 'other';
  } else if (typeOfMovement === 'other') {
    typeOfMovement = 'normal';
  }


  if (d < particleSize / 2) {
    console.log("inside");
    //theta = 0;
    g = random(255);
    b = random(255);
    radius = radius / d;
   // move(typeOfMovement);
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
  
  var xc = mouseX - width / 2;
  var yc = mouseY - height / 2;
  //  console.log("xc " + xc + " yc " + yc);

  var d = dist(x, y, xc, yc);
  // console.log("la distancia entre mouse y particula " + d);

  //put the center of particle in the pointer
  centerx = xc + 50;
  centery= yc + 50;
  //console.log("center: " + centerx + " centery: " + centery);
 // console.log("xc " + xc + " yc " + yc);
  radius = 15;
  //console.log("radius: " + radius);
  

}

function move(typeOfMovement) {
  if (typeOfMovement === 'normal') {
   // radius = 100;
   // console.log("cx: " + cx);
   x = centerx + radius * cos(theta);
   y = centery + radius * sin(theta);
   //x=0;
   //y=0;
    theta += 0.02;
    
  } else if (typeOfMovement === 'other') {
    console.log("x in move " + x + " y in move " + y);
    
    if(x > forceX || y > forceY){
      x= 0;
      y= 0;
    }else{
      x+= 5;
      y+= 5;
      theta = 0;
    }
    
  }
}
