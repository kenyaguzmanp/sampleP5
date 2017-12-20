var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.001;

function setup(){
    createCanvas(640, 360);
}

function draw(){
    background(255);


    fill(175);
    stroke(0);
    rectMode(CENTER);
    translate(width/2,height/2);
    rotate(angle);
    line(-50,0,50,0);
    ellipse(50,0,8,8);
    ellipse(-50,0,8,8);

    aVelocity += aAcceleration;
    angle += aVelocity;
}