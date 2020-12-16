const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,box;

function setup() {
  createCanvas(800,400);

  myengine= Engine.create();
  myworld= myengine.world;

  var box_options= {
    friction :0.0001
  }

  box= Bodies.rectangle(400,00,100,50,box_options);
  World.add(myworld,box);

  console.log(box);

  var ground_options= {
    isStatic:true,
    friction :0.0001
  }

  ground= Bodies.rectangle(width/2,height-20,width,10,ground_options);
  World.add(myworld,ground);

  var ball_options= {
    friction :0.0001,
    restitution:0.9
  }

  ball= Bodies.circle(200,00,50,ball_options);
  World.add(myworld,ball);

  ball1 = Bodies.circle(100,00,25,ball_options);
  World.add(myworld,ball1);
}

function draw() {
  background(0);  
  Engine.update(myengine);
  fill("green")
  rectMode(CENTER)
 rect(box.position.x,box.position.y,100,50);
fill("brown")
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,width,10);

fill("blue")
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,50,50)
fill("pink")
 ellipseMode(RADIUS)
 ellipse(ball1.position.x,ball1.position.y,25,25)
}

