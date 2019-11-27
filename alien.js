class Alien{
    constructor(x,y){
this.x=x;
this.y=y;
this.width = 20;
this.height=20;
this.image = loadImage("alien1.png");
this.visible=false;
this.xdirection=1;
this.ydirection =0;

    }
   
destroy(){
this.visible=true;
}
shiftDown(){
    this.xdirection*=-1;
    this.y+=this.ydirection;
}

    move(pos){
     this.x = this.x+this.xdirection;
     this.y = this.y+this.ydirection;
    }
display(){
    
    imageMode(CENTER);
    fill(255);
    image(this.image,this.x,this.y,this.width*2,this.height*2)
    
}
    
}