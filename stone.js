class Stone {
    constructor(x,y,r) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':1.2,
          'isStatic':false

      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      
      this.stone = loadImage("sprites/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
   
      imageMode(CENTER);
      fill(99, 49, 0);
      image(this.stone,pos.x, pos.y, this.radius,this.radius);
      pop();
    }

  }