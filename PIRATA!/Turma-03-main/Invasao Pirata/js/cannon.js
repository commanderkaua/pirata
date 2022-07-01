class Cannon{
    constructor(x,y,width,height, angle){
        this.x =x;
        this.y =y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.cannon = loadImage("./assets/astros2022.jpg");
       
    }
    display(){

        if(keyIsDown(RIGHT_ARROW)&& this.angle < 50){
            this.angle = this.angle+1;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle > -50){
            this.angle = this.angle-1;
        }

        //desenha o tubo
         push();
         translate(this.x, this.y);
         rotate(this.angle);

         imageMode(CENTER);
         image(this.cannon,0,0,this.width, this.height);
        this.r =10;
         pop();
         
    }

}