var bal = {
    x:250,
    y:125,
    diameter:75,
    beweeg(){
  if (keyIsDown(LEFT_ARROW)) {
    this.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    this.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    this.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    this.y += 5;
  }
    },
    teken(){
    fill("red")
    ellipse(this.x,this.y,this.diameter);
    }
};

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  background('silver');
  bal.beweeg();
  bal.teken();
}
