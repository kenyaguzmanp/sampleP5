// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var p,
acceleration,
velocity,
position,
lifespan;

function setup() {
   cnv = createCanvas(640,360);
   //p = new Particle(createVector(width/2, 20));

   acceleration = createVector(0, 0.05);
   velocity = createVector(random(-1, 1), random(-1, 0));
   position = position.copy();
   lifespan = 255.0;

   cnv.mouseOver(overCanvas);
}

function update(){
    velocity.add(acceleration);
    position.add(velocity);
    lifespan -= 2;
}

function draw() {
  background(51);

  stroke(255, this.lifespan);
  strokeWeight(sw);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 50, 50);

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
