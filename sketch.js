const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var abengine,abworld;
function setup() {
  createCanvas(800,400);
  

abengine= Engine.create();    //abengine.world
abworld= abengine.world;
var goptions = { isStatic: true}
ground = Bodies.rectangle(400,390,800,40,goptions);
World.add(abworld,ground);
console.log(ground);
var boptions = {restitution:0.9}
ball=Bodies.circle(400,200,25,boptions);
World.add(abworld,ball)
}

function draw() {
  background(255,255,255);
  Engine.update(abengine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}