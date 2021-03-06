var balnr = 0;
var aantalraak = 0;
var aantalmis = 0;
var aantal = 5;
var elementen = [];
var raak = null;
var accuracy;
var time = 60;
var start = false;
var afteltijd = 5;
var crosshairpositie = [0,0];
var aftellen = false;
var framecount = 0;

class bal {
    constructor() {
        this.x = round(random(1, 7), 0) * 70;
        this.y = round(random(1, 7), 0) * 70;
        this.diameter = 70;
        this.id = balnr;
        balnr++;
    }
    teken() {
        fill("#00eeff");
        ellipse(this.x, this.y, this.diameter);
        fill("black");
        textSize(32);
        if (aantalraak != 0) {
            accuracy = (aantalraak / (aantalraak + aantalmis));
            text("accuracy " + round(accuracy * 100, 0), 200, 30);
            text("0:" + round(time, 0), 450, 30);
            text("score " + round(aantalraak * accuracy * 1000, 0), 700, 30);
        }
    }

}
class game {
    constructor() {
        this.yes = true;
    }
    endscreen() {

        background("#003e8f");
        text("score " + round(aantalraak * accuracy * 1000, 0), 100, 30);
        text("accuracy " + round(accuracy * 100, 0) + "%", 400, 30);
    }
    aftel() {
        textSize(50);
        text(round(afteltijd, 0), mouseX, mouseY);
        textSize(32);
    }
    tekencrosshair(){
        ellipse(canvas.width/2,canvas.height/2,10);
        stroke(20);
        line(10,canvas.width);
        noStroke();
    }
    movement(){
    for (var n = 0; n < aantal; n++) {
        elementen[n].x += ((crosshairpositie[0]-mouseX)/1);
        elementen[n].y += ((crosshairpositie[1]-mouseY)/1);
    }
    }
}


var spel = new game();

function mouseClicked() {
    if (start == true) {
        for (var x = 0; x < aantal; x++) {
            if (dist(elementen[x].x, elementen[x].y, mouseX, mouseY) < elementen[x].diameter / 2) {
                elementen[x] = new bal();
                aantalraak++;
                raak = true;
            }
        }
        if (raak != true) {
            aantalmis++;
        }
        raak = false;
    }
    else {
        aftellen = true;

    }
}


function setup() {
     //noCursor();
    canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent('processing');
    noStroke();
    textAlign(CENTER,CENTER);
    frameRate(60);
    for (var x = 0; x < aantal; x++) {
        elementen[x] = new bal();
    }
}

function draw() {
    
    framecount++;
     resizeCanvas(windowWidth, windowHeight);
    background("#b3b3b3");
    spel.tekencrosshair();
    spel.movement();
    for (var x = 0; x < aantal; x++) {
            elementen[x].teken();
        }
    if (start == true) {
        time -= (1 / 60);
    }
    if (round(time, 0) == 0) {
        start = false;
        spel.endscreen();
    }
    if (aftellen == true) {
        afteltijd -= 1 / 60;
        spel.aftel();
        if (afteltijd <= 0) {
            aftellen = false;
            start = true;
        }
    }
    if(framecount % 2){
        crosshairpositie[0] = mouseX;
        crosshairpositie[1] = mouseY;
    }
    else{
        spel.movement();
    }
}

