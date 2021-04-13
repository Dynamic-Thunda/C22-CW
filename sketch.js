const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine, myworld, ground, ball;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

var ground_options = {

isStatic: true
}

ground = Bodies.rectangle(200,380,400,10, ground_options);
World.add(myworld,ground);
var ball_options = {

restitution: 2
}
ball = Bodies.circle(200,200,25, ball_options);
World.add(myworld, ball);

}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode (RADIUS)
  ellipse(ball.position.x, ball.position.y, 25, 25);
}