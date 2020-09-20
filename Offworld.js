var level = 0;
var financials = {
    geld:0,
    schuld:0,
}

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
    chemicalien
    electronica
    werknemers
    wapen
    soldaten
    ik heb geen objecten voor vraag enz gebruikt omdat je makkelijker door arrays kan gaan met een for loop.

*/
var vraag =[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var voorraad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI1voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI2voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI3voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var price = {
    0:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],
    1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    3:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    4:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    5:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    6:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    7:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    8:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    9:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    10:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    11:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    12:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    13:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    14:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
}


function setup() {
  canvas = createCanvas(2560,1440);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  frameRate(60);
  if(level == 0){
    menu();
  }

  if(level == 1){
    eerstelevel();
    vraagaanbod();
  }

}
var randomprice;

function menu(){

      background('silver');
      textSize(100);
      text("Play", 1150,600);

      if(dist(mouseX,mouseY,1200,600)< 60 && mouseIsPressed == true){
        level++;
        financials.geld += 10000;

            for(var x = 0; x<=vraag.length; x++){

            randomprice = 1;

            for(var p = 0; p<=30; p++){
                price[1][p] = randomprice;
            }

      }

}
}
function eerstelevel(){
    noStroke();
    background('red');
    fill(color(73, 78, 92));
    rect(0,0,500,2560);
    fill("white");
    textSize(40);
    text("$" + financials.geld, 100,40);
    textSize(20);
    fill("red");
    text("Schuld:$" + financials.schuld, 100,70);
    fill(color(54, 57, 69));
    stroke(	0, 167, 225);
    for(var n = 0; n<13; n++){
        rect(0,100+n*90,500,90);
    }
   


}

function vraagaanbod(){
        for(var x = 0; x<=vraag.length; x++){
            price[x][5] = price[x][5]*(1+(vraag[x]/100));
        }
}
