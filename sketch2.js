// for red, green, and blue color values
var r, g, b;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;
var radius;
var theta;
var x;
var y;
var particleSize= 48;

function setup() {
  cnv = createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  r = height * 0.45;
  theta = 0;

  //cnv.mouseOver(overCanvas);
}

function draw() {
  //console.log("in draw");
  background(51);
  translate(width/2, height/2);
    //x = 0;
   // y=0;
  x = r * cos(theta);
  y = r * sin(theta);
  
// Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  //line(0, 0, x, y);
  ellipse(x, y, particleSize, particleSize);
  
  // Increase the angle over time
  theta += 0.02;
}

// When the user clicks the mouse
function mousePressed() {
    console.log("Over Canvas");
    console.log("x " + x + " y " + y);     
      console.log("mouse coordinates: " + mouseX + " mouseY: " + mouseY);
     
     var xc = mouseX - width/2;
     var yc = mouseY - height/2;
     console.log("xc " + xc + " yc " + yc);
     
     var d = dist(x, y, xc, yc);
     console.log("la distancia entre mouse y particula " + d);

     if(d<particleSize/2){
         console.log("inside");
         theta = 0;
         g = random(255);
         b = random(255);
     }
     
      
}

function overCanvas() {
    console.log("Over Canvas");
    //console.log("x " + x + " y " + y);     
     console.log("mouse coordinates: " + mouseX + " mouseY: " + mouseY);
    var d = dist(mouseX, mouseY, x, y);
    console.log("la distancia entre mouse y particula " + d);
     theta = 0;
    g = random(255);
    b = random(255);
}