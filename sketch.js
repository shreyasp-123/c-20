var sprite1, sprite2

function setup() {
  createCanvas(800,400);
  sprite1  = createSprite(400, 100, 50, 50);
  sprite2 = createSprite(400, 300, 100, 50)
  sprite1.debug = true;
  sprite2.debug = true;
  sprite1.shapeColor = "green"
  sprite2.shapeColor = "green"
  sprite1.velocityY = 1
  sprite2.velocityY= -1
}

function draw() {
  background(255,255,255);
  //sprite2.x = mouseX
  //sprite2.y = mouseY
  /*if(sprite1.x-sprite2.x < (sprite1.width+sprite2.width)/2 && 
  sprite2.x-sprite1.x<(sprite2.width+sprite1.width)/2) {
    
    sprite2.velocityX = sprite2.velocityX * (-1)
    sprite1.velocityX = sprite1.velocityX * (-1)

  }
  if(sprite1.y - sprite2.y < (sprite1.height + sprite2.height)/2 &&
  sprite2.y - sprite1.y < (sprite1.height + sprite2.height)/2){

    sprite2.velocityY = sprite2.velocityY * (-1)
    sprite1.velocityY = sprite1.velocityY * (-1)
  }*/

  if(sprite1.x - sprite2.x < (sprite1.width + sprite2.width)/2 &&
  sprite2.x - sprite1.x < (sprite1.width + sprite2.width)/2 &&
  sprite2.y - sprite1.y < (sprite1.height + sprite2.height)/2 &&
  sprite1.y - sprite2.y < (sprite1.height + sprite2.height)/2){

    sprite1.shapeColor = "red"
    sprite2.shapeColor = "blue"
  } else {
    sprite1.shapeColor = "green"
    sprite2.shapeColor  = "green"
  }
  drawSprites();
}