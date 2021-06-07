const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boy1;

function preLoad(){
	boy=loadImage("download.jpg");
}


function setup() {
  createCanvas(800,400);
boy1=createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow");  
  image(boy ,800,400,200,300);

  drawSprites();
}