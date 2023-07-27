
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	var ground_options = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	ball2 = Bodies.circle(300,10,20);
	World.add(world,ball2);
  
	ground = Bodies.rectangle(200,10,20,20);
	World.add(world,ground);
  
	ground2 = Bodies.rectangle(100,10,90,20);
	World.add(world,ground2);

	ground3 = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,20,20);
  rect(ground2.position.x,ground2.position.y,90,20);
  rect(ground3.position.x,ground3.position.y,400,20);
  
  drawSprites();
 

}



