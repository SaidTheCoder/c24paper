
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new DustBin(480,200,30,200)
	box2=new DustBin(600,300,200,30)
	box3=new DustBin(720,200,30,200)

	ground=new Ground(600,690,1200,20)

	paper=new Paper(100,680,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
	}
}



