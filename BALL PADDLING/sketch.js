var ball,ballimg;
var paddle,paddleimg;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  
}

function draw() {
  background("BurlyWood");
  
  edges=createEdgeSprites();
   ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,random_1);
  paddle.collide(edges);
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y=paddle.y+20;
  }
  drawSprites();
}

function random_1(){
  ball.velocityY=random(-8,8);
  }