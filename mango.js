class Mango{
    
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
        }
     this.body = Bodies.circle(x, y, 10,options);
     this.radius = 10;
 
     this.mango = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
    display(){
    var pos = this.body.position;
   // var angle = this.body.angle;
    push();
   // translate(pos.x, pos.y);
   // rotate(angle);
    imageMode(CENTER);
    image(this.mango,pos.x, pos.y,50,50);
    pop();
    }
}