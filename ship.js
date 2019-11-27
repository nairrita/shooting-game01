class Ship{
    constructor(x,y){
this.x=x;
this.y=y;
this.width = 50;
this.height=50;
this.image = loadImage("spaceship-cartoon-png-7.png");


    }

   
    move(pos){
     this.x += pos*10;
    }
display(){
    
    imageMode(CENTER);
    fill(255);
    image(this.image,this.x,this.y,this.width,this.height)

}
    
}