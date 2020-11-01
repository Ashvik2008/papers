const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup()
{
    var canvas = createCanvas(1600,700);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,670,1600,20);
    dustbin1 = new Dustbin(1200,650);
    
    dustbin2 = new Dustbin2(1334,610,);
    dustbin3 = new Dustbin2(1064,610);

    paper = new Paper(200,450);
     
    
   
}

function draw()
{
    background(0);
    Engine.update(engine);
    
  
   
    ground.display();
   dustbin1.display();
   

   paper.display();
  
   dustbin2.display();
   dustbin3.display();

   
}

function keyPressed()

{

    if (keyCode === UP_ARROW) 
    {
       
        Matter.Body.applyForce(paper.body,paper.body.position,{x: 55, y: -38});
       
     }
  }