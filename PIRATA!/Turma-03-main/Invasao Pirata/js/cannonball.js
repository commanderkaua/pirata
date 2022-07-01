class CannonBall{
    constructor(x,y){
        var options ={
            restitution:0.1,
            friction:1,
            density:1,
            isStatic: true
        }

        this.r = 60;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("./assets/MTC-300000000000.jpg");
        this.trajetory = [];
        this.animation = waterAnimation;
        this.isSink = false;
        this.speed = 0.05;

    }
    shoot(){
        var newAngle = cannon.angle -30;
        newAngle = newAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.3);
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body,{
            x: velocity.x *(180/3.14),
            y: velocity.y*(180/3.14)
        });
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        if(this.body.velocity.x >0 && pos.x > 200){
            var position = [pos.x, pos.y];
            this.trajetory.push(position);
        }

        //desenha as posicoes
        for(var i = 0; i < this.trajetory.length; i++){
            image(this.image, this.trajetory[i][0], this.trajetory[i][1],5,5);
        };

        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        if(this.isSink){
            this.speed +=0.05;
            var index = floor(this.speed%this.animation.length);
            image(this.animation[index],0,0,this.r,this.r);
        }else{
            image(this.image,0,0,this.r,this.r);
        }
        image(this.image,0,0,this.r,this.r);
        pop();

    }

    remove(index){
        this.isSink = true;
        Body.setVelocity(this.body, {x:0, y:0});
        this.r = 90;
        setTimeout(() => {
          World.remove(world, this.body);
          balls.splice(i,1);   
        }, 1000);
       
    }

}