var fixedRect,movingRect
var ball1,ball2


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400, 200, 70, 20);
  
  ball1=createSprite(100, 300, 20, 20);
  ball2=createSprite(700, 300, 20, 20);

  ball1.shapeColor="white"
  ball2.shapeColor="yellow"

  ball1.velocityX=3
  ball2.velocityX=-3
}

function draw() {
  background(0);  

movingRect.x=mouseX
movingRect.y=mouseY


if(isTouching(fixedRect,movingRect)){
  movingRect.shapeColor="orange"
  fixedRect.shapeColor="orange"
  

}
else{ 
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="green"
}



bounceOff(ball1,ball2)
  drawSprites();
}


