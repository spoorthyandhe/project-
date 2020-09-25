class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 2
        }
        this.pointB=pointB;
        this.image=loadImage("polygon.png");
        this.slingshot= Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA=null;
    }

    display(){
        var polygonpos=this.body.position;
        var angle = this.body.angle; 
        push();
        translate(polygonpos.x,polygonpos.y);
        rotate(angle)
        //rectMode(CENTER);
        rotate(this.body.angle);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image,0,0,60,60)
        pop();
        stroke("white")
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
      }
  
}
