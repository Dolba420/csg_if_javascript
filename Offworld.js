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
*/
var vraag =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var voorraad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI1voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI2voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var AI3voorraad =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var price = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function setup() {
  canvas = createCanvas(2560,1440);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  if(level == 0){
    menu();
  }
  if(level == 1){
    eerstelevel();
    vraagaanbod();
  }

}
function menu(){

      background('silver');
      textSize(100);
      text("Play", 1150,600);

      if(dist(mouseX,mouseY,1200,600)< 60 && mouseIsPressed == true){
        level++;
        financials.geld += 10000;
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
    for(var x = 0; x>vraag.length; x++){
        price[x] = price[x]*(1+vraag[x]);
    }
}
