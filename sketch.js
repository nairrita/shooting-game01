//creating game
var ship;
var canvas;
var alien=[];
var bullets=[];



function setup(){
canvas = createCanvas(600,600);
ship = new Ship(300,550);
//bullets = new Bullet(300,550);

for(var i=0;i<8;i++){
alien[i]= new Alien(i*50+100,50);

}
}


function draw(){

background("black");

text("PRESS SPACE BAR TO FIRE BULLETS",300,300);
text("PRESS ARROW KEYS to move the  space ship right and left",200,400)
ship.display();
for(var n=0;n<bullets.length;n++){
    bullets[n].display();
    bullets[n].fire();

    var rightSide=false;
for(var i=0;i<alien.length;i++){
    alien[i].display();
    alien[i].move();
    if(alien[i].x>600){
        rightSide=true;
    }
    if(bullets[n].isTouching(alien[i])){
        alien[i].destroy();
       
       console.log("INVADED");
    }
    }
if(rightSide){
    for(vari=0;i<alien.length;i++){
        alien[i].moveDown();
    }
}
}



for(var i=alien.length-1;i>=0;i--){
   if(alien[i].visible){
alien.splice(i,1);
text("YAAAAAYYYYYY",width/2,height/2)
   }
}
}

function keyPressed(){

    if(keyCode===32){
       var bullet= new Bullet(ship.x,height/1.12);
       bullets.push(bullet);
    }
    if(keyCode===RIGHT_ARROW){
        ship.move(1);
    }
    else if(keyCode===LEFT_ARROW){
        ship.move(-1);
    }
}