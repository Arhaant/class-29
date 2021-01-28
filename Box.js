class Box extends BaseClass {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.5,
        'density':0.12
      }
      super(x,y,width,height)
      this.image = loadImage("sprites/wood1.png")
    } 
  }