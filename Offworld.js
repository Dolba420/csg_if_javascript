var level = 0;
var financials = {
    geld: 0,
    schuld: 0,
}

/*class Price {
  constructor(td,kl,x,kls) {
  this.leeftijd = td;
  this.kleur = kl;
  this.x = x;
  this.kleurStam = kls;
  }
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

var playercolors = [0, "color(10, 0, 207)"];
var blokvars = [100];
var productie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var neerzet = false;
var territorymap = [];
var gebouwenmap = [];
var gebouw = -1;
var mapvars = [50, 50];
var map = [];
var camerapositie = {
    x: 0,
    y: 0
};
var gebouwen = [];
//ordermultiplier is hoe vaak de kooporders geforloopet worden
var ordermultiplier = 1;
var gebouwen = ["centrale", "waterpomp", "boerderij", "electrolyse reactor", "electrolyse reactor", "mijn", "groeve", "groeve", "mijn", "staalmolen", "mijn", "electronicafabriek", "uitzendbureau", "wapenfabriek", "kazerne"];
var rates = ["-1 uranium\n -1 water\n +1 stroom\n", "-0.2 stroom\n +1 water\n", "-1 water\n -0.2 stroom\n +1 voedsel\n", "-1 water\n -0.5 stroom\n +0.66 brandstof\n +0.33 zuurstof \n", "-1 water\n -0.5 stroom\n +0.66 brandstof\n +0.33 zuurstof \n", "-0.3 stroom\n -0.5 brandstof\n +0.5 uranium\n +0.5 ijzer\n +0.5 aluminium\n", "-0.3 stroom\n -0.5 brandstof \n +0.5 siliconen\n +0.5 koolstof\n", "-0.3 stroom\n -0.5 brandstof \n +0.5 siliconen\n +0.5 koolstof\n", "-0.3 stroom\n -0.5 brandstof\n +0.5 uranium\n +0.5 ijzer\n +0.5 aluminium\n", "-0.2 stoom\n -1 ijzer\n -0.3 koolstof\n +1 staal\n", "-0.3 stroom\n -0.5 brandstof\n +0.5 uranium\n +0.5 ijzer\n +0.5 aluminium\n", "-0.3 stroom\n -1 siliconen \n -0.5 aluminium \n +1 electronica \n", "-2 stroom\n -0.5 voedsel\n +1 werknemer\n", "-1 staal\n -0.3 stroom \n +1 wapen\n", "-1 wapen\n -1 werknemer\n +1 soldaat\n"];
var klok = 0;
var rente = 1;
//vraag is hoeveel een product omhoog gaat in procenten per grafiek reload dus 80 frames
var vraag = [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];
var voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI1voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI2voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AI3voorraad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]];
//deze array is er om makkelijk via een for loop alle icoontjes van de grondstoffen te laden.
var sprites = [];


/*var price = {
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
}*/

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
    sprites.push(loadImage("assets/wapen.png"));
    sprites.push(loadImage("assets/soldaat.png"));

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
    if (keyIsDown(SHIFT)) {
        ordermultiplier = 10;
    }
    else {
        ordermultiplier = 1;
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


/*function keyPressed() {
  if (keyCode === 16 && ordermultiplier != 10) {
    ordermultiplier = 10;
}
    else{
        ordermultiplier = 1;
    }
}
*/


var randomprice;

function menu() {

    background('silver');
    textSize(100);
    text("Play", 1150, 600);

    if (dist(mouseX, mouseY, 1200, 600) < 60 && mouseIsPressed == true) {
        level++;
        financials.geld += 10000;

        for (var x = 0; x <= vraag.length - 1; x++) {

            randomprice = random(1, 20);
            price[x][price[x].length - 1] = randomprice * 10;
            //for(var p = 0; p<=price[1].length; p++){
            //price[x][p] = randomprice*10;
            //}

        }
        vraagaanbod();
        generate();
    }
}
function mouseClicked() {
    if (level == 1) {
        //check of er geleend of terugbetaald is
        if (mouseX > 300 && mouseX < 500 && mouseY > 0 && mouseY < 50) {
            leen(0);
            console.log("leen");
        }
        if (mouseX > 300 && mouseX < 500 && mouseY > 50 && mouseY < 100) {
            leen(1);
            console.log("betaal");
        }
        //check of er een koop of verkoop order gedaan is
        for (var b = 0; b < 15; b++) {
            if (mouseX > 120 && mouseX < 145 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b) {
                sell(b);
            }
            if (mouseX > 210 && mouseX < 235 && mouseY > 140 + 90 * b && mouseY < 165 + 90 * b) {
                buy(b);
            }
        }
    }

    for (var rij = 0; rij < mapvars[0]; rij++) {
        for (var kolom = 0; kolom < mapvars[1]; kolom++) {
            if (mouseX > 500 + blokvars[0] * rij - camerapositie.x && mouseX < 500 + blokvars[0] * (rij + 1) - camerapositie.x && mouseY > 0 + kolom * blokvars[0] - camerapositie.y && mouseY < 0 + blokvars[0] * (kolom + 1) - camerapositie.y) {
                if (gebouwenmap[kolom + rij * mapvars[1]] == -1) {
                    gebouwenmap[kolom + rij * mapvars[1]] = gebouw;
                    territorymap[kolom + rij * mapvars[1]] = 1;
                    productie[gebouw] += 1;
                    gebouw = -1;
                    neerzet = false;
                }
            }
        }
    }
}


function eerstelevel() {
    //constrain de camera
    camerapositie.x = constrain(camerapositie.x, 0, blokvars[0] * mapvars[0] - (canvas.width - 500));
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
    for (var n = 0; n < 15; n++) {
        fill(color(54, 57, 69));
        stroke(0, 167, 225);
        rect(0, 100 + n * 90, 500, 90);
    }
    for (var x = 0; x < 2; x++) {
        for (var n = 0; n < 15; n++) {
            fill(color(54, 57, 69));
            stroke(0, 167, 225);
            rect(120 + 90 * x, 140 + n * 90, 25, 25);
            fill('white');
            text("-", 130, 160 + n * 90);
            text("+", 215, 160 + n * 90);
        }
    }
    //de voorraad grondstoffen
    for (var n = 0; n < 15; n++) {
        fill('white');
        noStroke();
        text(round(voorraad[n], 0), 160, 160 + n * 90);
    }
    //plaatjes van grondstoffen
    for (var p = 0; p < sprites.length; p++) {
        image(sprites[p], 5, 100 + 90 * p, 90, 90);
    }
    //hoogste en laagste waarde berekenen om de schaal van de grafiek te berekenen
    for (var z = 0; z < 15; z++) {
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
    for (var multipliers = 0; multipliers < 15; multipliers++) {
        multiplier.push(60 / (maximaal[multipliers] - minimaal[multipliers]))

    }
    //grafiek tekenen
    for (var teller = 0; teller < 15; teller++) {
        for (var lijnteller = 0; lijnteller < price[1].length; lijnteller++) {
            stroke(0, 167, 225);
            line(250 + lijnteller * 8, 170 + teller * 90 - (multiplier[teller] * (price[teller][lijnteller] - minimaal[teller])), 250 + (lijnteller + 1) * 8, 170 + teller * 90 - (multiplier[teller] * (price[teller][lijnteller + 1] - minimaal[teller])));
        }
        fill(activity[teller]);
        textSize(25);
        text(round(price[teller][price[teller].length - 1], 0), 250, 170 + teller * 90);
    }
    //elke 80 frames de prijzen updaten en een verwijderen zodat de grafiek verder gaat
    updatetimer++;
    if (updatetimer == 80) {
        updatetimer = 0;
        for (var a = 0; a < 15; a++) {
            for (var x = 1; x < price[1].length; x++) {
                price[a][x - 1] = price[a][x];
            }
            //kleur voor als de prijs omhoog/omlaag is resetten
            activity[a] = "white";

        }
        productioncycle();
        if (klok == 24) {
            klok = 0;
            financials.schuld = round(financials.schuld * (1 + (rente / 100)), 2);
        }
        else {
            klok++;
        }

        vraagaanbod();
        rente = financials.schuld / financials.geld * 9 + 1;
    }

}

function leen(type) {
    for (var teller = 0; teller < ordermultiplier; teller++) {
        if (type == 0) {
            financials.schuld = round(financials.schuld + 1000, 2);
            financials.geld = round(financials.geld + 1000, 2);
        }
        if (type == 1) {
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
        }
        rente = financials.schuld / financials.geld * 9 + 1;
    }
}
//kopen en verkopen
function sell(num) {
    for (var teller = 0; teller < ordermultiplier; teller++) {
        if (voorraad[num] > 0) {
            if (voorraad[num] > 10) {
                financials.geld = financials.geld + 10 * round(price[num][price[num].length - 1])
                voorraad[num] -= 10;
            }
            else {
                financials.geld = financials.geld + voorraad[num] * round(price[num][price[num].length - 1])
                voorraad[num] = 0;
            }
            activity[num] = color(253, 49, 91);
            price[num][price[num].length - 1] *= 0.99;
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
            }
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
            }
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
        //console.log(price[x][price[x].length-1]);
    }
}
function bouw() {
    for (var b = 0; b < 15; b++) {
        if (mouseX > 0 && mouseX < 90 && mouseY > 100 + 90 * b && mouseY < 190 + 90 * b) {
            //om te zorgen dat het tekstvak niet van het scherm gaat
            if (mouseY < 900) {
                rect(mouseX, mouseY, 600, 300);
                image(sprites[b], mouseX, mouseY, 90, 90);
                fill('black');
                noStroke();
                text("klik om een " + gebouwen[b] + " te kopen \n" + rates[b] + "winst: " + winst(b), mouseX + 100, mouseY + 20);
            }
            else {
                rect(mouseX, mouseY - 300, 600, 300);
                image(sprites[b], mouseX, mouseY - 300, 90, 90);
                fill('black');
                noStroke();
                text("klik om een " + gebouwen[b] + " te kopen \n" + rates[b] + "winst: " + winst(b), mouseX + 100, mouseY - 280);
            }
            if (mouseIsPressed) {
                gebouw = b;
                neerzet = true;
            }

        }
    }
}

//winstgevendheid berekenen

function winst(type) {
    var prijzen = [price[0][price[0].length - 1], price[1][price[0].length - 1], price[2][price[0].length - 1], price[3][price[0].length - 1], price[4][price[0].length - 1], price[5][price[0].length - 1], price[6][price[0].length - 1], price[7][price[0].length - 1], price[8][price[8].length - 1], price[9][price[0].length - 1], price[10][price[0].length - 1], price[11][price[0].length - 1], price[12][price[0].length - 1], price[13][price[0].length - 1], price[14][price[0].length - 1],];
    if (type == 0) {
        return round(prijzen[0] - (prijzen[5] + prijzen[1]), 2);
    }
    if (type == 1) {
        return round(prijzen[1] - (0.2 * prijzen[0]), 2);
    }
    if (type == 2) {
        return round(prijzen[2] - (prijzen[1] + 0.2 * prijzen[0]), 2);
    }
    if (type == 3 || type == 4) {
        return round((prijzen[3] + prijzen[4]) - (prijzen[1] + 0.5 * prijzen[0]), 2);
    }
    if (type == 5 || type == 8 || type == 10) {
        return round(((prijzen[5] + prijzen[8] + prijzen[10])) - (prijzen[4] + 0.3 * prijzen[0]), 2);
    }
    if (type == 6 || type == 7) {
        return round(((prijzen[6] + prijzen[7])) - (prijzen[4] + 0.3 * prijzen[0]), 2);
    }
    if (type == 9) {
        return round(prijzen[9] - prijzen[8] - 0.2 * prijzen[0] - 0.3 * prijzen[7], 2);
    }
    if (type == 11) {
        return round(prijzen[11] - prijzen[6] - 0.3 * prijzen[0] - 0.5 * prijzen[10], 2);
    }
    if (type == 12) {
        return round(prijzen[12] - 2 * prijzen[0] - 0.5 * prijzen[2], 2);
    }
    if (type == 13) {
        return round(prijzen[13] - 0.3 * prijzen[0] - prijzen[9], 2);
    }
    if (type == 14) {
        return round(prijzen[14] - prijzen[13] - prijzen[12], 2);
    }

}

function generate() {
    for (var rij = 0; rij < 50; rij++) {
        for (var kolom = 0; kolom < 50; kolom++) {
            map[rij + kolom * mapvars[1]] = round(random(0, 10));
            gebouwenmap[rij + kolom * mapvars[1]] = -1;
            territorymap[rij + kolom * mapvars[1]] = 0;
        }
    }
}

function speelveld() {
    fill("red");
    noStroke();
    if (neerzet == true) {
        stroke(color(112, 8, 0));
    }
    //stroke(0, 167, 225);
    for (var rij = 0; rij < mapvars[0]; rij++) {
        for (var kolom = 0; kolom < mapvars[1]; kolom++) {
            //fill(marskleuren[map[rij+kolom*mapvars[1]]]);
            rect(500 + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);

            if (gebouwenmap[rij + kolom * mapvars[1]] != -1) {
                image(sprites[gebouwenmap[rij + kolom * mapvars[1]]], 500 + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
            }
        }
    }
    if (neerzet == true) {
        for (var rij = 0; rij < mapvars[0]; rij++) {
            for (var kolom = 0; kolom < mapvars[1]; kolom++) {
                if (mouseX > 500 + blokvars[0] * kolom - camerapositie.x && mouseX < 500 + blokvars[0] * (kolom + 1) - camerapositie.x && mouseY > 0 + rij * blokvars[0] - camerapositie.y && mouseY < 0 + blokvars[0] * (rij + 1) - camerapositie.y && gebouwenmap[rij + kolom * mapvars[1]] == -1) {
                    if (territorymap[rij + kolom * mapvars[1]] != 0) {
                        fill(playercolors[territorymap[rij + kolom * mapvars[1]]]);
                    }
                    else {
                        fill(color(255, 73, 59));
                    }
                    rect(500 + blokvars[0] * kolom - camerapositie.x, blokvars[0] * rij - camerapositie.y, blokvars[0], blokvars[0]);
                }
            }
        }
    }
    //ZetGebouwNeer();
    //fill();
}

function productie() {

}



function productioncycle() {
    voorraad[0] += productie[0];
    voorraad[1] += productie[1];
    voorraad[2] += productie[2];
    voorraad[3] += (0.333 * productie[3]) + (0.333 * productie[4]);
    voorraad[4] += (0.666 * productie[3]) + (0.666 * productie[4]);
    voorraad[5] += (((productie[5] + productie[8] + productie[10]))) / 2;
    voorraad[6] += (productie[6] + productie[7]) / 2;
    voorraad[7] += (productie[6] + productie[7]) / 2;
    voorraad[8] += (((productie[5] + productie[8] + productie[10]))) / 2;
    voorraad[9] += productie[9];
    voorraad[10] += (((productie[5] + productie[8] + productie[10]))) / 2;
    voorraad[11] += productie[11];
    voorraad[12] += productie[12];
    voorraad[13] += productie[13];
    voorraad[14] += productie[14];
    //kosten
    voorraad[0] -= productie[1] * 0.2 + productie[2] * 0.2 + productie[3] * 0.5 + productie[4] * 0.5 + productie[5] * 0.3 + productie[6] * 0.3 + productie[7] * 0.3 + productie[8] * 0.3 + productie[9] * 0.2 + productie[10] * 0.3 + productie[11] * 0.3 + productie[12] * 2 + productie[13] * 0.3;
    voorraad[1] -= productie[0] + productie[2] + productie[3] + productie[4];
    voorraad[2] -= productie[12] * 0.5;
    //voorraad[3] 
    voorraad[4] -= productie[5] * 0.5 + productie[6] * 0.5 + productie[7] * 0.5 + productie[8] * 0.3 + productie[10] * 0.5;
    voorraad[5] -= productie[0];
    voorraad[6] -= productie[11];
    //voorraad[7] 
    voorraad[8] -= productie[9];
    voorraad[9] -= productie[13];
    voorraad[10] -= productie[11] * 0.5;
    //voorraad[11]
    voorraad[12] -= productie[14];
    voorraad[13] -= productie[14];
    //voorraad[14]
    for (var x = 0; x < 15; x++) {
        if (voorraad[x] < 0) {
            buy(x, -voorraad[x]);
        }
    }
}

function returnProduction(num, type) {
    if (type == 0) {
        if (num <= 2 || num >= 11 || num == 9) {
            return productie[num];
        }
        if (num == 3 || num == 4) {
            return (0.333 * productie[3]) + (0.333 * productie[4]);
        }
        if (num == 5 || num == 8 || num == 10) {
            return (((productie[5] + productie[8] + productie[10]))) / 2;
        }
        if (num == 6 || num == 7) {
            return (productie[6] + productie[7]) / 2;
        }
        else {
            return 0;
        }
    }
    if (type == 1) {
        if (num == 0) {
            return productie[1] * 0.2 + productie[2] * 0.2 + productie[3] * 0.5 + productie[4] * 0.5 + productie[5] * 0.3 + productie[6] * 0.3 + productie[7] * 0.3 + productie[8] * 0.3 + productie[9] * 0.2 + productie[10] * 0.3 + productie[11] * 0.3 + productie[12] * 2 + productie[13] * 0.3;
        }
        if (num == 1) {
            return productie[0] + productie[2] + productie[3] + productie[4];
        }
        if (num == 2) {
            return productie[12] * 0.5;
        }
        if (num == 4) {
            return productie[5] * 0.5 + productie[6] * 0.5 + productie[7] * 0.5 + productie[8] * 0.3 + productie[10] * 0.5
        }
        if (num == 5) {
            return productie[0];
        }
        if (num == 6) {
            return productie[11];
        }
        if (num == 8) {
            return productie[9];
        }
        if (num == 9) {
            return productie[13]
        }
        if (num == 10) {
            return productie[11] * 0.5
        }
        if (num == 12) {
            return productie[14];
        }
        if (num == 13) {
            return productie[14];
        }
        else {
            return 0;
        }
    }
    if (type == 2) {
        return returnProduction(num, 0) - returnProduction(num, 1);
    }
}



function productieteller() {
    fill(color(46, 49, 59));
    rect(500, 100, 50, 1440);
    fill("white");
    for (var teller = 0; teller < 15; teller++) {
        if (returnProduction(teller, 2) > 0) {

            fill(color(48, 194, 150));
        }
        else if (returnProduction(teller, 2) < 0) {
            fill(color(253, 49, 91))
        }
        text(round(returnProduction(teller, 2), 1), 510, 170 + teller * 90);
        fill("white");
    }
}



//function ZetGebouwNeer(){
//    for(var rij =0; rij<mapvars[0]; rij++){
//        for(var kolom = 0; kolom<mapvars[1]; kolom++){
//        if (mouseX > 500+50*rij-camerapositie.x && mouseX < 500+50*(rij+1)-camerapositie.x && mouseY > 0+kolom*50-camerapositie.y && mouseY < 0 + 50 * (kolom+1)-camerapositie.y && mouseIsPressed) {
//                gebouwenmap[kolom+rij*mapvars[1]] = gebouw;
//                gebouw = -1;
//            }
//        }
//}
//}



