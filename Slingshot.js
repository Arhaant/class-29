class Slingshot{
    constructor(body1,point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.02,
            length : 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
      }
      display(){

        image(this.sling1,200,30);
        image(this.sling2,170,30);
        if(this.sling.bodyA){
         var pointA =this.sling.bodyA.position
         var pointB =this.sling.pointB
      if(pointA.x<220){
        strokeWeight(7);
        stroke(48,22,8);
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
        line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+10)
        image(this.sling3,pointA.x-30,pointA.y-10,10,25)
      }
      else{
         strokeWeight(7);
        stroke(48,22,8);
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
        line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+10)
        image(this.sling3,pointA.x+20,pointA.y-10,10,25)
      }
    }
  }
       fly(){
        this.sling.bodyA = null
      }
}
