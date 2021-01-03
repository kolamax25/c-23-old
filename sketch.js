var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 380,2000, 50)
	paper = new Paper(400, 300,50);
	Lwall = new Box(1500, 300, 20, 100);
	Rwall = new Box(1200, 300, 20, 100);
	Bwall = new Box(1350, 340, 300, 20);

	

	//Create the Bodies Here.


	Engine.run(engine);
}  



function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();	
  Bwall.display();
	Lwall.display();
	Rwall.display();
	paper.display();
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});

	}

}

