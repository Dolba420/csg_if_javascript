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
        balnr++;
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
    if(raak == true){
        aantalraak++;
        bal[this.id] = null;
    }
    else{
        aantalmis++;
    }
    }
}



function mouseClicked() {
for(var x = 0; x<aantal; x++){
    bal[x].check();
  }
}



var bal = [];



function setup() {
  canvas = createCanvas(1000,800);
  canvas.parent('processing');
  noStroke();
  frameRate(60);
  for(var x = 0; x<aantal; x++){
  bal.push(new ballen());
  }

}

function draw() {
  background("#b3b3b3");
for(var x = 0; x<aantal; x++){
  if(bal[x] == null){
    bal[x] = new ballen();
  
  }
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