var balnr = 0;
var aantalraak = 0;
var aantalmis = 0;
var aantal = 3;
var raak = null;
class ballen {
    constructor(){
        this.x = random(20,300);
        this.y = random(20,300);
        this.diameter = 70;
        this.id = balnr;
    }

    teken(){
        fill("#00eeff");
        ellipse(this.x, this.y, this.diameter);
    }
    check(){
        for(var x = 0; x<aantal; x++){
        if(dist(mouseX,mouseY,this.x,this.y) < this.diameter/2){
            raak = true;
        }
        else{
            raak = false;
        }
    }
    }
}



function mouseClicked() {
for(var x = 0; x<aantal; x++){
  bal[x].check();
  }
}


/*class Boom {
  constructor() {
  this.leeftijd = round(random(1,5));
  this.R = random(100,200);
  this.G = 155;
  this.B = random(0,100);
  this.x = random(50,720);
  }
  
  groei() {
    if (this.leeftijd < 20) {
      this.leeftijd++;
    }
  }

  teken() {
    push();
    translate(this.x,375);
    fill('sienna');
    rect(0,0,20 + 2*this.leeftijd,-100 - 10*this.leeftijd);
    fill(this.R,this.G,this.B);
    ellipse((20 + 2*this.leeftijd) / 2,-90 -5*this.leeftijd,80 + 4*this.leeftijd,130 + 10*this.leeftijd);
    pop();
  }
}*/

// we maken een lege array waar alle objecten in komen te staan
var bal = [];



function setup() {
  canvas = createCanvas(1000,800);
  canvas.parent('processing');
  noStroke();
  frameRate(60);
  for(var x = 0; x<aantal; x++){
  bal.push(new ballen());
  }

 /* for (var b = 0; b < 20; b++) {
    bomen.push(new Boom());
  }*/
}

function draw() {
  background("#b3b3b3");
for(var x = 0; x<aantal; x++){
  bal[x].teken();
  }
  
  //bomen[0].check();
  //bomen[10].G = 0;
  //fill('wheat');
  //rect(0,350,canvas.width,canvas.height - 350);


  /*for (var n = 0;n < bomen.length;n++) {
    if (bomen[n].leeftijd < 10) {
      bomen[n].teken();
      bomen[n].groei();
    }
  }*/
}