var level = 1;
var teller = 0;
var sprites = [];
var bommenteller = 0;
var gameover = false;
var played = 0;
var altteller = 0;
var levens = 3;

var level1 = [
    [0,1,2.1,3.1,4.1,5,7.9,8.9,9.8,10.6,14.9,16.1,17.2,18.2,19.3,20.3,21.2,22.2,23,24.7,26.7],
    [1   ],
    [500,600, 800,900,1000,1200,1400,1700,500,500,500,500,500,500,500,500,500,500,500,500,500],
    [0],
    1.7,
]
var stap = 0;


class car {
    constructor() {
        this.x = 100;
        this.y = 550;
        this.height = 350;
        this.width = 350;
    }
    teken() {
        image(tank, this.x, this.y, this.width, this.height);
    }
    movement() {
        if (keyIsDown(39)) {
            this.x += 10;
        }
        if (keyIsDown(37)) {
            this.x -= 10;
        }
        this.x = constrain(this.x, 300, canvas.width - 500);
    }
}


class boom {
    constructor() {
        this.x = -500;
        this.y = 1300;
        this.animationstate = 0;
        this.x = -500;
        this.y = 1300;

    }
    teken() {
        tint(255, 255 - (this.animationstate * 1.39));
        image(sprites[0], this.x, this.y, 170, 350);
        noTint();
    }
    updatepositie() {
        this.x += 6;
        this.y -= 6;
        this.animationstate++;
        if (this.animationstate == 184) {
            bomen.shift();
        }
    }
}

class bom {
    constructor() {
        this.x = level1[2][stap];
        this.y = -100;
        this.time = level1[4];
        this.height = 80;
        this.width = 80;
        this.explosiewidth = 300;
    }
    teken() {
        image(bullet, this.x, this.y, this.width, this.height);
        stroke("red");
        fill("#3b3010");
        ellipse(this.x, canvas.height - 250, this.explosiewidth, 30);
        noStroke();
    }
    updatepositie() {
        this.y += (canvas.height / (this.time * 60));
    }
    explosiecheck() {
        if (this.y + 70 > canvas.height - 250) {
            bommen.shift();
            image(boem, this.x - this.width * 2, this.y - this.width * 2, this.width * 4, this.height * 4);
            knal.play();
            if (this.x + this.explosiewidth / 2 > waggi.x && this.x - this.explosiewidth / 2 < waggi.x + waggi.width) {
                gameover = true;
                levens--;
            }
        }
    }
}


class weg {
    constructor() {
        this.density = 1;
    }
    teken() {
        fill("#967c33");
        ellipse(canvas.width / 2, canvas.height, 3000, 1310);
        fill("#3b3010");
        quad(250, canvas.height, canvas.width - 50, canvas.height, canvas.width / 2 + 200, 500, canvas.width / 2 - 200, 500);
    }
}


var waggi = new car();
var achtergrond = new weg();
var bomen = [];
var bommen = [];



function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent('processing');
    frameRate(60);

}

function preload() {
    //foto's laden
    sprites.push(loadImage("assets/boom.png"));
    tank = loadImage("assets/tank.png");
    bullet = loadImage("assets/bullet.png");
    boem = loadImage("assets/boem.png");
    knal = loadSound("assets/knal.mp3");
    song1 = loadSound("assets/song1.mp3");
    hart = loadImage("assets/hart.png");
}

function draw() {
    if (level == 1) {
        if (played == 0) {
            played = 1;
            //song1.play();
        }
        background("navy");
        teller++;
        achtergrond.teken();

        for (var x = 0; x < bomen.length; x++) {
            bomen[x].teken();
            bomen[x].updatepositie();
        }
        for (var x = 0; x < levens; x++) {
            image(hart,canvas.width-300+40*x, 30, 30,30);
        }
        if (teller == 150) {
            bomen.push(new boom());
            teller = 0;
        }
        waggi.teken();
        waggi.movement();
        for (var x = 0; x < bommen.length; x++) {
            bommen[x].teken();
            bommen[x].updatepositie();
            bommen[x].explosiecheck();
        }
    for (var x = 0; x < 3; x++) {
        if (round(bommenteller/60,1) == level1[0][stap]) {
            bommen.push(new bom());
            stap++;
        }
    }
        bommenteller++;
        textSize(32);
        text(altteller / 60-1.7, 200, 200);
        altteller++;
    }
}

