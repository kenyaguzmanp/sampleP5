// for red, green, and blue color values
var r, g, b;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;
var radius;
var theta;
var x;
var y;

function setup() {
  cnv = createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  r = height * 0.45;
  theta = 0;

  cnv.mouseOver(overCanvas);
}

function draw() {
  //console.log("in draw");
  background(51);
  translate(width/2, height/2);

  x = r * cos(theta);
  y = r * sin(theta);
  
// Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  //line(0, 0, x, y);
  ellipse(x, y, 48, 48);
  
  // Increase the angle over time
  theta += 0.02;
}

// When the user clicks the mouse
function mousePressed() {
//    console.log("click"); 
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, x, y);
  if (d < 10) {
      console.log("inside");
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function overCanvas() {
    console.log("Over Canvas");
    console.log("x " + x + " y " + y);     
      // Pick new random color values
     // r = random(255);
     theta = 0;
    g = random(255);
    b = random(255);
}