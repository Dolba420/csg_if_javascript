var aantalRijenRaster = 12;
var aantalKolommenRaster = 18;
var celGrootte;

var animatie = [];
var aantalBeeldjes = 6;
var nummer = 3;

var frame;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
for (var a = 0;a < aantalBeeldjes;a++) {
    frame = loadImage("images/sprites/Jos100px/Jos_" + a + ".png");
    animatie.push(frame);
  }
  frame = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent('processing');
  frameRate(10);
  celGrootte = width / aantalKolommenRaster;
}
var animatieframe = 3;

function draw() {
  
  background(brug);
  tekenRaster();

  if (keyIsDown(LEFT_ARROW)) {
    xJos -= celGrootte;
    animatieframe = 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos += celGrootte;
    animatieframe = 1;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos-=celGrootte;
        animatieframe = 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += celGrootte;
    animatieframe = 5;
  }
  
  xJos = constrain(xJos,0,width - celGrootte);
  yJos = constrain(yJos,0,height - celGrootte);
  
  image(animatie[animatieframe],xJos,yJos,celGrootte,celGrootte);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalRijenRaster;rij++) {
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  pop();
}