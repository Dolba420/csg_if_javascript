var balnr = 0;
var aantalraak = 0;
var aantalmis = 0;
var aantal = 5;
var elementen = [];
var raak = null;
var accuracy;
var time = 60;
var start = false;
var crosshairpositie = [];

class bal {
    constructor(){
        this.x = round(random(1,7),0)*70;
        this.y = round(random(1,7),0)*70;
        this.diameter = 70;
        this.id = balnr;
        balnr++;
    }
    teken(){
        fill("#00eeff");
        ellipse(this.x, this.y, this.diameter);
        fill("black");
        textSize(32);
    if(aantalraak != 0){
    accuracy = (aantalraak/(aantalraak+aantalmis));
        text("accuracy " + round(accuracy*100,0), 200,30);
        text("0:" + round(time,0), 450,30);
        text("score " + round(aantalraak*accuracy*500,0), 700,30);
    }
    }

}
class game {
constructor(){
    this.yes = true;
    }
    endscreen(){

        background("#003e8f");
        text("score " + round(aantalraak*accuracy*1000,0), 30,30);
        text("accuracy " + round(accuracy*100,0), 30,60);
    }
}


var spel = new game();

function mouseClicked() {
    if(start == true){
    for(var x = 0; x<aantal; x++){
        if(dist(elementen[x].x, elementen[x].y,mouseX,mouseY) < elementen[x].diameter/2){
            elementen[x] = new bal();
            aantalraak++;
            raak = true;
        }
    }
    if(raak != true){
        aantalmis++;
    }
    raak = false;
}
start = true;
}


function setup() {
  canvas = createCanvas(1000,800);
  canvas.parent('processing');
  noStroke();
  frameRate(60);
    for(var x = 0; x<aantal; x++){
        elementen[x] = new bal();
    }
}

function draw() {
  background("#b3b3b3");
    if(start == true){
    for(var x = 0; x<aantal; x++){
        elementen[x].teken();
    }
      time -= (1/60);
    }
    if(round(time,0) == 0){
        start = false;
        spel.endscreen();
    }
crosshairpositie[0] = mouseX
crosshairpositie[1] = mouseY

}

