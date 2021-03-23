
var hr  =p5.prototype.hour();
var min =p5.prototype.minute();
var sec =p5.prototype.second();
var secAngle
var minAngle
var hrAngle


/*
let hr = hour();
let min = minute();
let min = minute();
*/
function setup() {
  createCanvas(500,500);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  
  secAngle = map(p5.prototype.second(), 0, 60,0,360);
  console.log(secAngle)
  minAngle = map(p5.prototype.minute(), 0, 60,0,360);
  hrAngle = map(p5.prototype.hour()%12, 0, 60,0,360);
  stroke ("red");
  strokeWeight(5);

  
  background(p5.prototype.second()*4,p5.prototype.minute()*4,p5.prototype.hour()*16);  
  drawSprites();
  
  

  //second
  push()
  translate (250,250);
  angleMode(DEGREES)
  rotate(secAngle+180)
  stroke(250,0,0)
  strokeWeight(7)
  line (0,200,0,0);
  pop()
  //min
  push()
  translate (250,250);
  angleMode(DEGREES)
  rotate(minAngle+180);
  stroke(0,250,0)
  strokeWeight(7)
  line (0,150,0,0);
  pop()
  //hour
  push()
  translate (250,250);
  angleMode(DEGREES)
  rotate(hrAngle)
  stroke(0,0,150)
  strokeWeight(7)
  line (0,100,0,0);
  pop()

  stroke("black");
  strokeWeight(200)
  fill (0,0,0,0)
  ellipse(250,250,500,500);

  strokeWeight(0)
  fill("white")
  rect (205,30,100,25)

  fill("red");
  strokeWeight(2)
  text (p5.prototype.second(),225,50);

  fill("blue");
  strokeWeight(2)
  text (p5.prototype.minute(),250,50);

  fill("green");
  strokeWeight(2)
  text (p5.prototype.hour()%12,275,50);


}