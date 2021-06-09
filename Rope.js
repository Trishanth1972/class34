class Rope{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        lenght:250
    }   
    this.bodyA=bodyA;
    this.pointB=pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling)
    }
    fly(){
     this.sling.bodyA = null;
   }
   attach(body){
   this.sling.bodyA = body;
   }
    display(){
        if(this.sling.bodyA){
         var pointA=this.bodyA.position;
         var pointB=this.pointB;
         push();
         strokeWeight(4)
         stroke("white")
         line(pointA.x,pointA.y,pointB.x,pointB.y)
         pop();
        }
     
     
    }
}

