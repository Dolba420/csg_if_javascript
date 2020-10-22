var level = 0;
var financials = {
    geld: 0,
    schuld: 0,
    profit:0,
    profitAverage:0,
    sharesOutstanding:100000,
    owners:[1000,0,0,0],
    investorconfidence:1,
}

var AI1 = {
    geld: 0,
    schuld: 0,
    profit:0,
    profitAverage:0,
    sharesOutstanding:100000,
    owners:[0,1000,0,0],
    investorconfidence:1,
    baselocation:null,
}
var AI2 = {
    geld: 0,
    schuld: 0,
    profit:0,
    profitAverage:0,
    sharesOutstanding:100000,
    owners:[0,0,1000,0],
    investorconfidence:1,
    baselocation:null,

}
var AI3 = {
    geld: 0,
    schuld: 0,
    profit:0,
    profitAverage:0,
    sharesOutstanding:100000,
    owners:[0,0,0,1000],
    investorconfidence:1,
    baselocation:null,

}

var players = [financials,AI1,AI2,AI3];

/*class Price {
  constructor(td,kl,x,kls) {
  this.leeftijd = td;
  this.kleur = kl;
  this.x = x;
  this.kleurStam = kls;
  }k
}*/

/*
  volgorde van de grondstoffen
    stroom
    water
    eten
    zuurstof
    brandstof
    uranium
    siliconen
    koolstof
    ijzer
    staal
    aluminium
    electronica
    werknemers
    wapen
    soldaten
    ik heb geen objecten voor vraag enz gebruikt omdat je makkelijker door arrays kan gaan met een for loop.

*/

var aandeelprices = [
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]];

var aandeelprijzen = [10,10,10,10];
var collateral = 0;
var dagnummer = 0;
var names = ["Dolba", "AI", "AI", "AI"];
var playernumber = names.length;
var marskleuren = ["red", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",];
/*marskleuren[0] = color(142, 106, 90);
marskleuren[1] = color(240,231,231);
marskleuren[2] = color(69,24,4);
marskleuren[3] = color(193,68,14);
marskleuren[4] = color(231,125,17);
marskleuren[5] = color(253,166,0);
marskleuren[6] = color(153, 133, 122);
marskleuren[7] = color(198, 123, 92);
marskleuren[8] = color(226, 123, 88);
marskleuren[9] = color(255, 157, 111);
marskleuren[10] = color(102, 57, 38);
*/
var moneyviewbutton = false;
var autosell = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var setautosell = false;
var moneyview = false;
var speelveldtekenx = 575;
var landkosten = 100;
var verkoop = false;
var playercolors = [0, "#0086a1","#ff3512","#2eff3f", "#ad0090"];
var blokvars = [100];
var productie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var neerzet = false;
var territorymap = [];
var gebouwenmap = [];
var gebouw = -1;
var mapvars = [25, 25];
var map = [];
var camerapositie = {
    x: 0,
    y: 0
};
var gebouwen = [];
//ordermultiplier is hoe vaak de kooporders geforloopet worden
var ordermultiplier = 1;
var gebouwen = ["centrale", "waterpomp", "boerderij", "electrolyse reactor", "electrolyse reactor", "mijn", "groeve", "groeve", "mijn", "staalmolen", "mijn", "electronicafabriek", "uitzendbureau", "wapenfabriek", "kazerne"];
var grondstofnamen = [" stroom", " water", " voedsel", " zuurstof", " brandstof", " uranium", " silicon", " koolstof", " ijzer", " staal", " Aluminium", " electronica", " werknemers"];
var rates = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var kostgebouw = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var klok = 0;
var rente = 1;
var shortage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//vraag is hoeveel een product omhoog gaat in procenten per grafiek reload dus 80 frames
var vraag = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
var voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI1voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI2voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI3voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//welke kleur welke ticker moet zijn op basis van kopen en verkopen om feedback te geven nadat de speler koopt.
var activity = ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",];
//de prijsgeschiedenis van de laatste perioden voor alle grondstoffen
var price = [
    [10, 15, 100, 10, 10, 10, 10, 9, 16, 12, 10, 10, 10, 10, 13, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 16, 10, 12, 10, 11],
    [10, 120, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 190, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 200, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 101],
    [10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]/*,
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]*/];
//deze array is er om makkelijk via een for loop alle icoontjes van de grondstoffen te laden.
var sprites = [];
var gebouwkosten = [
    [0, 0, 0, 0, 0, 0, 10, 0, 0, 20, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 10, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 5, 10, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 5, 10, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 10, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 10, 0, 0],
    [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 20, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 10, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 20, 0, 10, 0, 10, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 40, 0, 0, 0],
    /*[0,0,0,0,0,0,0,20,0,10,0,10,0,0,0],
    [0,0,0,0,0,0,0,0,0,10,0,0,10,0,0]*/];
var gebouwproductie = [
    [2, -1, 0, 0, 0, -0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-0.5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-0.2, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-0.5, -1, 0, 0.33, 0.66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-0.5, -1, 0, 0.33, 0.66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, -0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, -0.5, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, -0.5, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, -0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0, 0, 0, 0],
    [-0.2, 0, 0, 0, 0, 0, 0, -0.1, -1, 1, 0, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, -0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0, 0, 0, 0],
    [-0.3, 0, 0, 0, 0, 0, -1, 0, 0, 0, -0.5, 1, 0, 0, 0],
    [-2, 0, -0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]/*,
    [-0.3,0,0,0,0,0,0,0,0,-1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,1]*/];
var autosellall = false;




function preload() {
    //foto's laden
    sprites.push(loadImage("assets/stroom.png"));
    sprites.push(loadImage("assets/water.png"));
    sprites.push(loadImage("assets/eten.png"));
    sprites.push(loadImage("assets/o2.png"));
    sprites.push(loadImage("assets/brandstof.png"));
    sprites.push(loadImage("assets/uranium.png"));
    sprites.push(loadImage("assets/silicon.png"));
    sprites.push(loadImage("assets/koolstof.png"));
    sprites.push(loadImage("assets/ijzer.png"));
    sprites.push(loadImage("assets/staal.png"));
    sprites.push(loadImage("assets/aluminium.png"));
    sprites.push(loadImage("assets/electronica.png"));
    sprites.push(loadImage("assets/werknemer.png"));
    //sprites.push(loadImage("assets/wapen.png"));
    //sprites.push(loadImage("assets/soldaat.png"));
    sprites.push(loadImage("assets/verkoop.png"));
    sprites.push(loadImage("assets/loss.png"));
    sprites.push(loadImage("assets/verlies.png"));
    sprites.push(loadImage("assets/shortage.png"));
    sprites.push(loadImage("assets/surplus.png"));

}




function setup() {
    frameRate(60);
    canvas = createCanvas(2560, 1440);
    canvas.parent('processing');
}

function draw() {
    if (level == 0) {
        menu();
    }

    if (level == 1) {
        eerstelevel();
        charts();
        bouw();
        toetsen();
    }
}

function toetsen() {
moneyview = false;
setautosell = false;
    if (keyIsDown(17)) {
        setautosell = true;
    }
    if (keyIsDown(SHIFT)) {
        ordermultiplier = 10;
    }
    else {
        ordermultiplier = 1;
    }
    if (keyIsDown(88) || moneyviewbutton == true) {
        moneyview = true;
    }
    if (keyIsDown(LEFT_ARROW)) {
        camerapositie.x -= 8;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        camerapositie.x += 8;
    }
    if (keyIsDown(UP_ARROW)) {
        camerapositie.y -= 8;
    }
    if (keyIsDown(DOWN_ARROW)) {
        camerapositie.y += 8;
    }
}





var randomprice;

function menu() {

    background('silver');
    textSize(100);
    text("Play", 1150, 600);

    if (dist(mouseX, mouseY, 1200, 600) < 60 && mouseIsPressed == true) {
        level++;
        financials.geld += 10000;

        for (var x = 0; x <= vraag.length - 1; x++) {
            for (var n = 0; n < vraag.length; n++) {
                if (gebouwproductie[x][n] < 0) {
                    rates[x] = rates[x] + gebouwproductie[x][n] + grondstofnamen[n] + "\n";
                }
            }
            for (var n = 0; n < vraag.length; n++) {
                if (gebouwproductie[x][n] > 0) {
                    rates[x] = rates[x] + gebouwproductie[x][n] + grondstofnamen[n] + "\n";
                }
            }
            for (var n = 0; n < vraag.length; n++) {
                if (gebouwkosten[x][n] > 0) {
                    kostgebouw[x] = kostgebouw[x] + gebouwkosten[x][n] + grondstofnamen[n] + "\n";
                }
            }
            randomprice = random(1, 10);
            price[x][price[x].length - 1] = randomprice * 10;
            
        }

        }
        generate();
    }

function mouseClicked() {
    if (level == 1) {
        //check of er geleend of terugbetaald is
        if (mouseX > 300 && mouseX < 500 && mouseY > 0 && mouseY < 50) {
            leen(0);
        }
        if (mouseX > 300 && mouseX < 500 && mouseY > 50 && mouseY < 100) {
            leen(1);
        }
        //check of er aandelen gekocht worden.
        if (mouseX > 2230 && mouseX < 2280 && mouseY >  25 && mouseY < 75) {
            koopaandelen(0,1);
        }
        if (mouseX > 2310 && mouseX < 2360 && mouseY > 25 && mouseY < 75) {
            koopaandelen(0,0);
        }
    if (mouseX > 500 && mouseX < 575 && mouseY > 0 && mouseY < 50) {
        if(autosellall == false){
            for (var b = 0; b < vraag.length; b++) {
                if(returnProduction(b) > 0){
                    autosell[b] = 1;
                }
            }
            autosellall = true;
        }
        else{
            for (var b = 0; b < vraag.length; b++) {
                autosell[b] = 0;
            }
            autosellall = false;
            }
        }
        if(autosellall == true){
                if(returnProduction(b) > 0){
                    autosell[b] = 1;
                }
           }
        if (mouseX > 500 && mouseX < 575 && mouseY > 50 && mouseY < 100) {
            if(moneyviewbutton == false){
            moneyviewbutton = true;
               }
            else if(moneyviewbutton == true){
            moneyviewbutton = false;
               }
        }
        //check of er een koop of verkoop order gedaan is
        for (var b = 0; b < vraag.length; b++) {
            if(setautosell == false){  
            if (mouseX > 120 && mouseX < 145 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b) {
                sell(b);
            }
            if (mouseX > 210 && mouseX < 235 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b) {
                buy(b);
            }
        }
        else{
            if(mouseX > 120 && mouseX < 145 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b && autosell[b] == 1){
               autosell[b] = 0;
               }
            else if(mouseX > 120 && mouseX < 145 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b) {
                autosell[b] = 1;
            }
            }
        }

    for (var rij = 0; rij < mapvars[0]; rij++) {
        for (var kolom = 0; kolom < mapvars[1]; kolom++) {
            if (mouseX > speelveldtekenx + blokvars[0] * rij - camerapositie.x && mouseX < speelveldtekenx + blokvars[0] * (rij + 1) - camerapositie.x && mouseY > 0 + kolom * blokvars[0] - camerapositie.y && mouseY < 0 + blokvars[0] * (kolom + 1) - camerapositie.y) {
                //check of vakje leeg is
                if (verkoop == true && gebouwenmap[kolom + rij * mapvars[1]] != -1) {
                    productie[gebouwenmap[kolom + rij * mapvars[1]]] -= 1;
                    gebouwenmap[kolom + rij * mapvars[1]] = gebouw;
                    verkoop = false;
                }
                else if (gebouwenmap[kolom + rij * mapvars[1]] == -1) {
                    gebouwenmap[kolom + rij * mapvars[1]] = gebouw;
                    if (neerzet == true) {
                        if (territorymap[kolom + rij * mapvars[1]] == 1) {
                        }
                        else if (territorymap[kolom + rij * mapvars[1]] == 0) {
                            if (financials.geld > landkosten) {
                                financials.geld -= landkosten;
                            }
                            else {
                                financials.schuld += landkosten;
                            }
                            landkosten = landkosten * 1.05;
                        }
                        territorymap[kolom + rij * mapvars[1]] = 1;
                        for (var a = 0; a < gebouwproductie.length; a++) {
                            //voorraad[0] += productie[0] * gebouwproductie[0][0];
                            //voorraad[1] += productie[1]
                            voorraad[a] -= gebouwkosten[gebouw][a];
                            //console.log(productie[b] *gebouwproductie[a][b]);
                        }
                    }
                    productie[gebouw] += 1;
                    gebouw = -1;
                    neerzet = false;
                    verkoop = false;
                    for (var x = 0; x < vraag.length; x++) {
                        if (voorraad[x] < 0) {
                            buy(x, -voorraad[x]);
                        }
                    }
                }
            }
        }
    }
}
}

var aandeelmin = [99999999,9999999,9999999,99999999];
var aandeelmax = [0,0,0,0];
var schaal = [];

function eerstelevel() {
    //constrain de camera
    camerapositie.x = constrain(camerapositie.x, 0, blokvars[0] * mapvars[0] - (canvas.width - speelveldtekenx));
    camerapositie.y = constrain(camerapositie.y, 0, blokvars[0] * mapvars[1] - canvas.height);

    background('red');
    fill("white");
    speelveld();
    fill(color(54, 57, 69));
    fill(color(73, 78, 92));
    rect(0, 0, 500, 2560);
    fill("white");
    textSize(40);
    //de financiele status van het bedrijf tonen
    noStroke();
    text("$" + round(financials.geld, 0), 50, 40);
    textSize(20);
    text("Rente:" + round(rente, 2) + "%", 50, 95);
    fill("red");
    text("Schuld:$" + round(financials.schuld, 0), 50, 70);
    fill(color(54, 57, 69));
    stroke(0, 167, 225);
    rect(300, 0, 200, 50);
    rect(300, 50, 200, 50);
    noStroke();
    fill("white");
    text("Leen $1000", 310, 30);
    text("Betaal $1000 af", 310, 80);
    fill(color(54, 57, 69));
    rect(canvas.width / 2 - 100, 0, 200, 40);
    fill("white");
    text(klok + ":00", canvas.width / 2 - 20, 30);
    productieteller();
    //aandelenscherm
    for(var y = 0; y<playernumber; y++){
    fill(color(54, 57, 69));
    stroke(0, 167, 225);
    rect(1800, 100*y, 800,100);
    noStroke();
    fill("white");
    textSize(30);
    text(names[y], 1810, 40+100*y);
    text("$" + aandeelprijzen[y], 2440, 40+100*y);
    textSize(20);
    var totalmeter = 0;
    for(var a = 0; a<playernumber; a++){
    fill(playercolors[a+1]);
    text(round(players[y].owners[a]/players[y].sharesOutstanding*100,0) + "%", 1953, 20+100*y+17*a);
    rect(2000,10+100*y+totalmeter,20,70*((players[y].owners[a]/players[y].sharesOutstanding)));
    totalmeter += 70*((players[y].owners[a]/players[y].sharesOutstanding));
    fill("#adadad");
    }
    //percentages voor bezit
    text(round((1 - (players[y].owners[0] + players[y].owners[1] + players[y].owners[2] + players[y].owners[3])/players[y].sharesOutstanding) *100,0)+ "%", 1953, 20+100*y+17*a);
    rect(2000,10+100*y+totalmeter,20,70-totalmeter);
        
    //grafiek tekenene.
    aandeelmax[y] = 0;
    aandeelmin[y] = 99999999;
    for(var n = 0; n < aandeelprices[y].length-1; n++){
        if(aandeelmax[y] < aandeelprices[y][n]){
                aandeelmax[y] = aandeelprices[y][n];
           }
        if(aandeelmin[y] > aandeelprices[y][n]){
                aandeelmin[y] = aandeelprices[y][n];
           }
    }
    schaal = [];
    for (var multipliers = 0; multipliers < aandeelmax.length; multipliers++) {
        schaal.push(60 / (aandeelmax[multipliers] - aandeelmin[multipliers]));
    }
    for (var lijnteller = 0; lijnteller < price[1].length; lijnteller++) {
            stroke(0, 167, 225);
            line(2050 + lijnteller * 5, 90 + y * 90 - (schaal[y] * (aandeelprices[y][lijnteller] - aandeelmin[y])), 2050 + (lijnteller + 1) * 5, 90 + y * 90 - (schaal[y] * (aandeelprices[y][lijnteller + 1] - aandeelmin[y])));
        }
        textSize(40);
        rect(2230,25+100*y,50,50);
        rect(2300,25+100*y,50,50);
        fill("black");
        noStroke();
        text("-",2245, 62+100*y);
        text("+",2310, 62+100*y);
    }

    textSize(20);
}
//de updatetimer zorgt ervoor dat elke 80 frames de grafieken geupdate worden en dat de prijzen omhoog gaan op basis van vraag
var updatetimer = 0;

/*
de grafiek wordt gemaakt door eerst de schaal te berekenen door de lengte van de grafiek te delen door de hoogste waarde - laagste waarde 
stel bijvoorbeeld een grafiek met als hoogste 100 en als laagste 90
de hoogte van de grafiek is 60 dus je krijgt 60/(100-90)
nu berekenen we de y-coordinaat door de schaal te vermenigvuldigen met de prijs van de periode - de laagste waarde
als je op de voorbeeldgrafiek van 90 naar 92 naar 95 naar 100 wil plotten bereken jee eerst de schaal 60/(100-90) = 6
90-90*6 = 0 y coordinaat van het eerste punt
92-90*6 = 12 y tweede punt
95-90*6 = 30 etc.
100-90*6 = 60 
omdat we het vermenigvuldigen noem ik de schaal multiplier
 
*/

var multiplier = [];
var maximaal = [];
var minimaal = [];
function charts() {

    //de vakken voor de grafieken
    for (var n = 0; n < vraag.length; n++) {
        fill(color(54, 57, 69));
        stroke(0, 167, 225);
        rect(0, 100 + n * 90, 500, 90);
    }
    //hokjes voor verkopen en kopen
    for (var x = 0; x < 2; x++) {
        for (var n = 0; n < vraag.length; n++) {
            if(autosell[n] == 0){
            fill(color(54, 57, 69));
            stroke(0, 167, 225);
            rect(120 + 90 * x, 140 + n * 90, 25, 25);
            fill('white');
            text("-", 130, 160 + n * 90);
            text("+", 215, 160 + n * 90);
        }
        else{
            fill(color(54, 57, 69));
            rect(120, 140 + n * 90, 115,25);
            rect(120, 140 + n * 90, 25, 25);
        }
        }
    }
    //de voorraad grondstoffen
    for (var n = 0; n < vraag.length; n++) {
        fill('white');
        noStroke();
        if(autosell[n] == 0){
        text(round(voorraad[n], 0), 160, 160 + n * 90);
        }
        else{
            if(returnProduction(n)*price[n][price[n].length-1] > 0){
            fill(color(48, 194, 150));
            }
            text("$" + round(returnProduction(n)*price[n][price[n].length-1], 0), 160, 160 + n * 90);
        }
    }
    //plaatjes van grondstoffen
    for (var p = 0; p < vraag.length + 1; p++) {
        image(sprites[p], 5, 100 + 90 * p, 90, 90);
    }
    //hoogste en laagste waarde berekenen om de schaal van de grafiek te berekenen
    for (var z = 0; z < vraag.length; z++) {
        maximaal[z] = 0;
        minimaal[z] = 9999999999;
        for (var y = 0; y < price[1].length; y++) {
            if (maximaal[z] < price[z][y]) {
                maximaal[z] = price[z][y];
            }
            if (minimaal[z] > price[z][y]) {
                minimaal[z] = price[z][y];
            }
        }
    }
    //grafiek schaal berekenen voor elke grondstof
    multiplier = [];
    for (var multipliers = 0; multipliers < vraag.length; multipliers++) {
        multiplier.push(60 / (maximaal[multipliers] - minimaal[multipliers]))

    }
    //grafiek tekenen
    for (var teller = 0; teller < vraag.length; teller++) {
        for (var lijnteller = 0; lijnteller < price[1].length; lijnteller++) {
            stroke(0, 167, 225);
            line(250 + lijnteller * 8, 170 + teller * 90 - (multiplier[teller] * (price[teller][lijnteller] - minimaal[teller])), 250 + (lijnteller + 1) * 8, 170 + teller * 90 - (multiplier[teller] * (price[teller][lijnteller + 1] - minimaal[teller])));
        }
        fill(activity[teller]);
        textSize(25);
        text(round(price[teller][price[teller].length - 1], 0), 250, 170 + teller * 90);
        if(shortage[teller] > 0){
                image(sprites[16], 290, 100 + 90 * teller, 40, 40);
           }
        if(shortage[teller] < 0){
                image(sprites[17], 290, 110 + 90 * teller, 40, 40);
           }
    }
    //image(sprites[15], 5, 1275, 90, 90);
    //elke 80 frames de prijzen updaten en een verwijderen zodat de grafiek verder gaat
    updatetimer++;
    if (updatetimer == 80) {
        updatetimer = 0;
        for (var a = 0; a < vraag.length; a++) {
            for (var x = 1; x < price[1].length; x++) {
                price[a][x - 1] = price[a][x];
            }
            //kleur voor als de prijs omhoog/omlaag is resetten
            activity[a] = "white";

        }
        for (var a = 0; a < aandeelprices.length; a++) {
            for (var x = 1; x < aandeelprices[1].length; x++) {
                aandeelprices[a][x - 1] = aandeelprices[a][x];
            }
        }
        
        productioncycle();
        if (klok == 24) {
            dagnummer++;
            klok = 0;
            financials.schuld = round(financials.schuld * (1 + (rente / 100)), 2);
        }
        else {
            klok++;
        }
        if(klok % 2){
                collateral = 0;
                //financials.profitAverage = (financials.profitAverage + financials.profit)/2
                financials.profit = 0;
                for(var x = 0; x < vraag.length; x++){
                    collateral += productie[x] * returnkosten(x, true);
                    financials.profit += productie[x] * winst(x);
                }
            aandeelprijzen[0] = round(((((financials.profit * 10 * dagnummer + collateral + returnInvValue() + financials.geld - financials.schuld))))*financials.investorconfidence / financials.sharesOutstanding+10,2);
                autoseller();
           }
        randomevent();
        vraagaanbod();
    }

}

function leen(type) {
    for (var teller = 0; teller < ordermultiplier; teller++) {
        /*if (type == 0) {
            financials.schuld = round(financials.schuld + 1000, 2);
            financials.geld = round(financials.geld + 1000, 2);
            rente = rente * 1.3;
        }
        if (type == 1) {
            if (financials.schuld > 0) {
                rente = rente * 0.8;
            }
            if (financials.geld > 1000) {
                if (financials.schuld > 1000) {
                    financials.schuld = round(financials.schuld - 1000, 2);
                    financials.geld = round(financials.geld - 1000, 2);
                }
                else {
                    financials.geld = round(financials.geld - financials.schuld, 2);
                    financials.schuld = 0;
                }
            }
            else {
                if (financials.schuld > financials.geld) {
                    financials.schuld = financials.schuld -= financials.geld;
                    financials.geld = 0;
                }
                else {
                    financials.geld = round(financials.geld - financials.schuld, 2);
                    financials.schuld = 0;
                }
            }
        }*/
        if(type == 0){
            financials.schuld = round(financials.schuld + 1000, 2);
            financials.geld = round(financials.geld + 1000, 2);
            rente = rente * 1.3;
        }
        if(type == 1){
            if(financials.schuld == 0){

            }
            else if(financials.schuld > 1000 && financials.geld > 1000){
                financials.schuld -= 1000;
                financials.geld -= 1000;
                rente *= 0.8
            }
            else if(financials.schuld <= 1000){
                if(financials.schuld > financials.geld){
                    financials.schuld -= financials.geld;
                    financials.geld = 0;
                }
                else if(financials.schuld < financials.geld){
                    financials.geld -= financials.schuld;
                    financials.schuld = 0;
                }
            }
        }
    }
}


//kopen en verkopen
function sell(num, ordervol) {
if(ordervol == undefined){
    for (var teller = 0; teller < ordermultiplier; teller++) {
        if (voorraad[num] > 0) {
            if (voorraad[num] > 10) {
                financials.geld = financials.geld + 10 * round(price[num][price[num].length - 1]);
                //financials.profit += 10 * round(price[num][price[num].length - 1]);
                voorraad[num] -= 10;
                price[num][price[num].length - 1] *= 0.99;
            }
            else {
                //financials.profit += voorraad[num] * round(price[num][price[num].length - 1]);
                financials.geld = financials.geld + voorraad[num] * round(price[num][price[num].length - 1]);
                price[num][price[num].length - 1] *= (1-(0.001*voorraad[num]));
                voorraad[num] = 0;
            }
            activity[num] = color(253, 49, 91);
        }
    }
}
else if(ordervol < voorraad[num]){
    if(ordervol > 1000){
        for(var x = 0; x<(ordervol/10); x++){
            financials.geld = financials.geld + ordervol * round(price[num][price[num].length - 1]);
            voorraad[num] -= ordervol;
            price[num][price[num].length - 1] *= 0.99;
            
        }
    }
else{
        financials.geld = financials.geld + ordervol * round(price[num][price[num].length - 1]);
            voorraad[num] -= ordervol;
           price[num][price[num].length - 1] *= (1-(0.001*ordervol));
}
}
}

function buy(num, aantal) {
    if (aantal == undefined) {
        for (var teller = 0; teller < ordermultiplier; teller++) {
            if (financials.geld > 10 * round(price[num][price[num].length - 1])) {
                financials.geld -= round(10 * round(price[num][price[num].length - 1]), 2);
                voorraad[num] += 10;
            }
            else {
                financials.schuld += 10 * round(price[num][price[num].length - 1]);
                voorraad[num] += 10;
                rente = rente * 1.3;
            }
            //financials.profit -= round(10 * round(price[num][price[num].length - 1]), 2);
            price[num][price[num].length - 1] *= 1.01;
            activity[num] = color(48, 194, 150);
        }
    }
    else if (aantal != undefined) {
        if (voorraad[num] < aantal) {
            if (financials.geld > aantal * round(price[num][price[num].length - 1])) {
                financials.geld -= round(aantal * round(price[num][price[num].length - 1]), 2);
                voorraad[num] += aantal;
            }
            else {
                financials.schuld += aantal * round(price[num][price[num].length - 1]);
                voorraad[num] += aantal;
                rente = rente * 1.3;
            }
            //financials.profit -= round(aantal * round(price[num][price[num].length - 1]), 2);
        }
        else {
            voorraad[num] -= aantal;
        }
        price[num][price[num].length - 1] *= (1 + (aantal / 1000));
    }
}
function vraagaanbod() {
    for (var x = 0; x < price.length; x++) {
        price[x][price[x].length - 1] = round(price[x][price[x].length - 1] * ((1 + ((vraag[x] / 100)))), 2);
        price[x][price[x].length - 1] = round(price[x][price[x].length - 1] * ((1 + ((shortage[x] / 100)))), 2);
        //console.log(price[x][price[x].length-1]);
        if(shortage[x] > 0){
        shortage[x] = shortage[x] - 1;
           }
        if(shortage[x] < 0){
        shortage[x] = shortage[x] + 1;
           }
    }
    for(var x = 0; x < playernumber; x++){
        aandeelprices[x][aandeelprices[x].length-1] = aandeelprijzen[x];
    }
    if (financials.geld > financials.schuld) {
        rente *= 0.95;
    }
    if (financials.geld < financials.schuld) {
        rente *= 1.03;
    }
    landkosten *= 0.99;
    rente = constrain(rente,0.1,100)
}


function bouw() {
    for (var b = 0; b < vraag.length; b++) {
        if (mouseX > 0 && mouseX < 90 && mouseY > 100 + 90 * b && mouseY < 190 + 90 * b) {
            //om te zorgen dat het tekstvak niet van het scherm gaat
            if (mouseY < 900) {
                rect(mouseX, mouseY, 600, 300);
                image(sprites[b], mouseX, mouseY, 90, 90);
                fill('black');
                noStroke();
                if(winst(b) > 0){
                   fill(color(48, 194, 150));
                }
                else{
                    fill(color(253, 49, 91));
                }
                text("klik om een " + gebouwen[b] + " te kopen \n" + rates[b] + "winst: " + winst(b), mouseX + 100, mouseY + 20);
                fill('black');
                text("Kosten: \n" + kostgebouw[b]+ "$" + round(landkosten,0) + " landkosten \n" + "$" + returnkosten(b) + "\nBreakeven " + round(returnkosten(b)/winst(b),0), mouseX + 300, mouseY + 50);
            }
            else {
                rect(mouseX, mouseY - 300, 600, 300);
                image(sprites[b], mouseX, mouseY - 300, 90, 90);
                fill('black');
                noStroke();
                if(winst(b) > 0){
                   fill(color(48, 194, 150));
                }
                else{
                    fill(color(253, 49, 91));
                }
                text("klik om een " + gebouwen[b] + " te kopen \n" + rates[b] + "winst: " + winst(b), mouseX + 100, mouseY - 280);
                fill('black');
                text("Kosten: \n" + kostgebouw[b]+ "$" + round(landkosten,0) + " landkosten \n" + "$" + returnkosten(b) + "\nBreakeven " + round(returnkosten(b)/winst(b),0), mouseX + 300, mouseY -250);
            }
            if (mouseIsPressed) {
                gebouw = b;
                neerzet = true;
                verkoop = false;
            }

        }
        if (mouseX > 0 && mouseX < 90 && mouseY > 1270 && mouseY < 1370) {
            if (mouseIsPressed) {
                gebouw = -1;
                verkoop = true;
                neerzet = false;
            }
        }
    }
}

//winstgevendheid berekenen

function winst(type) {
    var total = 0;
    for (var a = 0; a < gebouwproductie.length; a++) {
        total += gebouwproductie[type][a] * price[a][price[a].length - 1];
    }
    return round(total, 0);
    total = 0;
}



function generate() {
    for (var rij = 0; rij < 50; rij++) {
        for (var kolom = 0; kolom < 50; kolom++) {
            map[rij + kolom * mapvars[1]] = round(random(0, 10));
            gebouwenmap[rij + kolom * mapvars[1]] = -1;
            territorymap[rij + kolom * mapvars[1]] = 0;
        }
    }
    for(var loc = 0; loc<playernumber; loc++){

    }
}

function speelveld() {
    fill("red");
    noStroke();
    if (neerzet == true || verkoop == true) {
        stroke(color(112, 8, 0));
    }
    for (var rij = 0; rij < mapvars[0]; rij++) {
        for (var kolom = 0; kolom < mapvars[1]; kolom++) {
            //fill(marskleuren[map[rij+kolom*mapvars[1]]]);
            if (territorymap[rij + kolom * mapvars[1]] != 0) {
                fill(color(playercolors[territorymap[rij + kolom * mapvars[1]]]));
            }
            rect(speelveldtekenx + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
            fill("red");
            if (gebouwenmap[rij + kolom * mapvars[1]] != -1) {
                image(sprites[gebouwenmap[rij + kolom * mapvars[1]]], speelveldtekenx + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
                if (winst(gebouwenmap[rij + kolom * mapvars[1]]) <= 0) {
                    image(sprites[15], speelveldtekenx + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0] / 2, blokvars[0] / 2);
                    image(sprites[14], speelveldtekenx + blokvars[0] * kolom - camerapositie.x + (blokvars[0]/2), blokvars[0] * rij - camerapositie.y, blokvars[0] / 2, blokvars[0] / 2);
                }
                //noTint(); 
            }
        }
    }
    if (neerzet == true || verkoop == true) {
        for (var rij = 0; rij < mapvars[0]; rij++) {
            for (var kolom = 0; kolom < mapvars[1]; kolom++) {
                if (mouseX > speelveldtekenx + blokvars[0] * kolom - camerapositie.x && mouseX < speelveldtekenx + blokvars[0] * (kolom + 1) - camerapositie.x && mouseY > 0 + rij * blokvars[0] - camerapositie.y && mouseY < 0 + blokvars[0] * (rij + 1) - camerapositie.y && gebouwenmap[rij + kolom * mapvars[1]] == -1) {
                    fill(color(255, 73, 59));
                    rect(speelveldtekenx + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
                    if (neerzet == true) {
                        tint(255, 127);
                        image(sprites[gebouw], speelveldtekenx + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
                        noTint();
                    }

                }
            }
        }
    }
    //ZetGebouwNeer();
    //fill();
}


function productioncycle() {
    for (var a = 0; a < gebouwproductie.length; a++) {
        for (var b = 0; b < gebouwproductie.length; b++) {
            if (winst(b) > 0) {
                voorraad[a] += productie[b] * gebouwproductie[b][a];
            }
        }
    }

    for (var x = 0; x < vraag.length; x++) {
        if (voorraad[x] < 0) {
            buy(x, -voorraad[x]);
        }
    }
}

function returnProduction(num) {
    var total = 0;
    for (var a = 0; a < gebouwproductie.length; a++) {
        if (winst(a) > 0) {
            total += productie[a] * gebouwproductie[a][num];
        }
    }
    if(total != NaN){
        return total;
    }
    else{
        return 0;
    }
    total = 0;
}

function returnkosten(g,aandeelcalc){
var total = 0;
    if(aandeelcalc == false || aandeelcalc == undefined){
    for (var a = 0; a < gebouwkosten.length; a++) {
            total += gebouwkosten[g][a] * price[a][price[a].length-1];
    }
    return round(total + landkosten,0) ;
    }
    else if(aandeelcalc == true){
        for (var a = 0; a < gebouwkosten.length; a++) {
            total += gebouwkosten[g][a] * price[a][price[a].length-1];
        }
        return total;
        }
total = 0;
}





function productieteller() {
    fill(color(46, 49, 59));
    rect(500, 100, 75, 1440);
    stroke(0, 167, 225);
    rect(500,0,75,50);
    rect(500,50,75,50);
    noStroke();
    textSize(35);
    fill("white");
    text("🗘", 513, 40);
    text("👁$", 510, 85);
    textSize(20);
    for (var teller = 0; teller < vraag.length; teller++) {
        if (returnProduction(teller) > 0) {
            fill(color(48, 194, 150));
        }
        else if (returnProduction(teller) < 0) {
            fill(color(253, 49, 91))
        }
        if(moneyview == false){
            text(round(returnProduction(teller), 1), 510, 170 + teller * 90);
            fill("white");
           }
        else{
            text("$" + round(returnProduction(teller)*price[teller][price[teller].length-1], 0), 510, 170 + teller * 90);
            fill("white");
        }

    }
}

function autoseller(){
    for(var x = 0; x<vraag.length; x++){
        if(autosell[x] == 1){
           sell(x,voorraad[x]-1);
        }
    }
}

function returnInvValue(){
var total = 0;
    for(var x = 0; x<vraag.length; x++){
        total += voorraad[x] * price[x][price[x].length-1];
}
return total;
}


function randomevent(){
    //shortage 
var absolute = 0;
var randvalue = round(random(-300,0),0);
var randvalue2 = round(random(0,300),0);
    if(randvalue2 < 13 && randvalue2 >= 0){
            shortage[randvalue2] = 10;
       }
    if(randvalue > -13){
            absolute = abs(randvalue);
            shortage[absolute] = -8;
       }
}

function koopaandelen(p,type){
    if(type == 0){
            if(financials.geld > aandeelprijzen[p] *(financials.sharesOutstanding/100)){
               financials.geld -= aandeelprijzen[p] *(financials.sharesOutstanding/100);
                players[p].owners[0] += (financials.sharesOutstanding/100);
            }
       }
    if(type == 1){
        if(players[p].owners[0] > financials.sharesOutstanding/100){
                financials.geld += aandeelprijzen[p] *(financials.sharesOutstanding/100);
                players[p].owners[0] -= (financials.sharesOutstanding/100);
           }
       }
}





function AIbrain(){
    
}


