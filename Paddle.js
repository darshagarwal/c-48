class Paddle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = createSprite(this.x,this.y,this.width,this.height);
        this.image = loadImage("Images/paddle.png");
    }

    display(){
       // imageMode(CENTER);
        this.body.addImage(this.image);
        this.body.scale = 0.2;
    }
}