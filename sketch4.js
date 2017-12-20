// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var p;

function setup() {
   cnv = createCanvas(640,360);
   p = new Particle(createVector(width/2, 20));
   cnv.mouseOver(overCanvas);
}

function draw() {
  background(51);

  this.p.run();
  if (this.p.isDead()) {
    console.log("Particle dead p ", this.p); 
    this.p = new Particle(createVector(width/2, 20));
    
  }
}

function mousePressed() {
    // Check if mouse is inside the circle
    console.log("mouse pressed!");
    console.log("particle position: " , p.position);
}

function overCanvas() {
    console.log("Over Canvas");
    //p.display(5);
    console.log("particle display:  " , p);
  }