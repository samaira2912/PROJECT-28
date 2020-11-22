
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var boyImage;
function preload()
{
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
  ground = new Ground(600,750,1200,20);
  stone = new Stone(500,700,60,60);
   tree = new Tree();
   mango = new Mango(800,300);
   mango2 = new Mango(900,340);
   mango3 = new Mango(1000,200);
   mango4 = new Mango(850,150);
   mango5 = new Mango(1050,100);
  
  
   slingshot = new SlingShot(stone.body,{x:150,y:460});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boyImage,100,390,250,350);
  tree.display();
   ground.display();
  stone.display();
 
  mango.display();
 mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:400,y:400})
		slingshot.attach(stone.body);
	}
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position 

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=mango.radius+stone.radius){
    Matter.Body.setStatic(mango.body,false);
  }
}