class Tree {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(1000,370,100,100,options);
      this.width = 700;
      this.height = 700;
      
      this.tree = loadImage("sprites/tree.png");
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      push();
      
      imageMode(CENTER);
      fill(99, 49, 0);
      image(this.tree,pos.x, pos.y, this.width, this.height);
      pop();
    }
  }