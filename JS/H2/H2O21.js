var cirkel = {
  diameter: 40,
  straal: null,
  x: null,
  y: null,
  alpha: 0.8,
  aantalRaak: 0,
  teller:0,
  teken() {
    push();
    noStroke();
    fill(246, 181, 79,this.alpha);
    ellipse(this.x,this.y,this.diameter);
    pop();
  },

  kiesEenPlek() {
    cirkel.x = random(this.diameter,canvas.width - this.diameter);
    cirkel.y = random(this.diameter,canvas.height - this.diameter);
  },

  controleerRaak() {
    afstandMuisCirkel = dist(mouseX,mouseY,this.x,this.y);
    if(afstandMuisCirkel < this.diameter/2 && mouseIsPressed == true){
        this.kiesEenPlek();
        this.teller++;
        this.alpha = this.alpha * 0.9;
    }
  }
}

function preload() {
  achtergrond = loadImage("images/choco.jpg");
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB,255,255,255,1);
  frameRate(10);
  textFont("Verdana");
  textSize(30);
  cirkel.straal = cirkel.diameter / 2;
  cirkel.kiesEenPlek();
}

function draw() {
  background(achtergrond);

  if (keyIsPressed) {
    background('black');
  }

  cirkel.controleerRaak();
  cirkel.teken();
  text(cirkel.teller,10,50);
}