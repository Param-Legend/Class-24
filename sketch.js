
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,Ground
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	peaper = new Paper(100,600,10)




    Ground = new ground(400,680,800,30)
	leftside = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20)
	rightSide = new Dustbin(670,620,20,100),

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)



  peaper.display()
  Ground.display()
  leftside.display()
  bottom.display()
  rightSide.display()




  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(peaper.body,peaper.body.position,{x : 15, y:-15})


}

}



