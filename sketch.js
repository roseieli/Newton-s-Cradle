
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rop5;
var bob1, bob2, bob3 ,bob4,bob5;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Roof(230,50,253,20);
	//Create the Bodies Here.
	
	bob1 = new Bob(150,300,20,20);
	bob2 = new Bob(190,300,20,20);
	bob3 = new Bob(230,300,20,20);
	bob4 = new Bob(270,300,20,20);
	bob5 = new Bob(310,300,20,20);
	




	rope3=new Rope(bob3.body,ground.body,0,0);
	rope1=new Rope(bob1.body,ground.body,-80,0);
	rope2=new Rope(bob2.body,ground.body,-40,0)
	rope4=new Rope(bob4.body,ground.body,40,0);
	rope5=new Rope(bob5.body,ground.body,80,0);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display()

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y: -45});
	}
	
	
	}
	

