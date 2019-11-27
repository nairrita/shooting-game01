class Bullet{
    constructor(x,y){
     this.x=x;
     this.y = y;
     this.height=10;
     this.width = 10;

    }
    display(){
        noStroke();
        fill("white");
        rect(this.x,this.y,this.width/2,this.height);
    }
   
    isTouching(alien){
    var pos = dist(this.x,this.y,alien.x,alien.y)
    if (pos<this.height+alien.x){
        return true;
    }
    else {
        return false;
    }
    }
   
    fire(){
        this.y = this.y-5;
    }

    
}