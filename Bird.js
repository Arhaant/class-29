class Bird extends BaseClass{
  constructor(x,y){
    var options = {
      'restitution':10,
      'density':0.7
    }
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  }
}