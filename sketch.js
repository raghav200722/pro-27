
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var bar;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 = new Ball(290,300,40);
	ball2 = new Ball(330,300,40);
	ball3 = new Ball(370,300,40);
	ball4 = new Ball(250,300,40);
	ball5 = new Ball(210,300,40);

	bar = new Ground(300,100,500,50);
	
	rope1 = new Rope(ball1.body,bar.body,-40*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  bar.display();
  drawSprites();
 
}



