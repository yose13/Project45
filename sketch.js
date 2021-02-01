var girl, img
var edges
var score = 0

function preload(){
img = loadImage("girl.png")
run = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png")
runLeft = loadAnimation("run1-2.png","run2-2.png","run3-2.png","run4-2.png","run5-2.png","run6-2.png")
monImg = loadImage("ghost.png")
coinImg = loadImage("coin.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(width+","+height)

  edges = createEdgeSprites();
  girl = createSprite(180, 1780, 40, 40);
  girl.addAnimation("ran",run);
  girl.addAnimation("runLeft",runLeft)

  gem = createSprite(3620, 150, 40, 40)

 // key = createSprite(80, 80, 40, 40)

  wall1 = createSprite(225, 1500, 440, 40);
  wall2 = createSprite(225, 1280, 40, 400);
  wall3 = createSprite(225, 800, 440, 40);
  wall4 = createSprite(720, 1735, 40, 400);
  wall5 = createSprite(900, 1745, 400, 40);
  wall6 = createSprite(1350, 1735, 40, 400);
  wall7 = createSprite(1050, 1090, 700, 40);
  wall8 = createSprite(1040, 1080, 40, 500);
  wall9 = createSprite(1390, 900, 40, 500);
  wall10 = createSprite(1940, 1420, 600, 40);
  wall11 = createSprite(1890, 1730, 600, 40);
  wall12 = createSprite(2200, 1910, 40, 400);
  wall13 = createSprite(570, 500, 600, 40);
  wall14 = createSprite(120, 200, 600, 40);
  wall15 = createSprite(1150, 100, 40, 400);
  wall16 = createSprite(2130, 1040, 600, 40);
  wall17 = createSprite(1820, 860, 40, 400);
  wall18 = createSprite(2550, 1650, 40, 600);
  wall19 = createSprite(2850, 1740, 600, 40);
  wall20 = createSprite(3550, 1650, 40, 600);
  wall21 = createSprite(3260, 1440, 600, 40);
  wall22 = createSprite(3030, 880, 40, 600);
  wall23 = createSprite(3030, 880, 600, 40);
  wall24 = createSprite(1830, 260, 600, 40);
  wall25 = createSprite(1840, 0, 40, 550);
  wall26 = createSprite(2600, 100, 40, 550);

  
  winWall1 = createSprite(3400, 100, 40, 550);
  winWall2 = createSprite(3655, 360, 550, 40);

  portal1 = createSprite(10, height/2-250, 20, 1600)
  portal1.shapeColor = "blue";
  portal2 = createSprite(width-10,height/2-250, 20, 1600)
  portal2.shapeColor = "blue";

  monster1 = createSprite(100,100,50,50)
  monster1.addImage(monImg)
  monster1.velocityX=4;
  monster1.velocityY=5;

  monster2 = createSprite(width-100,height-100,50,50)
  monster2.addImage(monImg)
  monster2.velocityX=-3;
  monster2.velocityY=-4;

  monster3 = createSprite(width/2, height-100,50,50)
  monster3.addImage(monImg)
  monster3.velocityX=4;
  monster3.velocityY=-5;

  monster4 = createSprite(width/2, 100,50,50)
  monster4.addImage(monImg)
  monster4.velocityX=3;
  monster4.velocityY=4;

  guard1 = createSprite(1990, 1220, 40, 40)
  guard1.velocityY = 4;

  coin1 = createSprite(570, 1750, 20, 20)
  coin1.addImage(coinImg)


}

function draw() {
  background(200);  

  textSize(40)
  text(mouseX+","+mouseY,50,100)

  text("score: "+score, width/2, 40)

  if(keyDown("right")){
    girl.velocityX = 4
    girl.velocityY = 0
    girl.changeAnimation("ran",run);
  }
  if(keyDown("left")){
    girl.velocityX = -4
    girl.velocityY = 0
    girl.changeAnimation("runLeft",runLeft)
  }
  if(keyDown("up")){
    girl.velocityY = -4
    girl.velocityX = 0
  }
  if(keyDown("down")){
    girl.velocityY = 4
    girl.velocityX = 0
  }

  //girl.collide(edges)

  girl.collide(wall1)
  girl.collide(wall2)
  girl.collide(wall3) 
  girl.collide(wall4) 
  girl.collide(wall5) 
  girl.collide(wall6) 
  girl.collide(wall7) 
  girl.collide(wall8) 
  girl.collide(wall9) 
  girl.collide(wall10) 
  girl.collide(wall11) 
  girl.collide(wall12) 
  girl.collide(wall13)

  girl.collide(portal1)
  girl.collide(portal2)

  guard1.bounceOff(wall16)
  guard1.bounceOff(wall10)

  monster1.bounceOff(edges)
  monster2.bounceOff(edges)
  monster3.bounceOff(edges)
  monster4.bounceOff(edges)

  monster1.bounce(monster2)
  monster1.bounce(monster3)
  monster1.bounce(monster4)
  monster2.bounce(monster3)
  monster2.bounce(monster4)
  monster3.bounce(monster4)

  if(girl.isTouching(monster1) ||
     girl.isTouching(monster2) ||
     girl.isTouching(monster3) ||
     girl.isTouching(monster4)){
         girl.x=180
         girl.y=1780
     }

  if(girl.isTouching(guard1)){
    girl.x=180
    girl.y=1780
  }
  if(girl.x<0){
    girl.x=width
  }
  // if(girl.isTouching(portal2)){
  //   girl.x=10
  // }

  // if(girl.x>3900){
  //   girl.x=0
  // }

  // if(girl.isTouching(edges) ||
  // girl.isTouching(wall1) ||
  // girl.isTouching(wall2)||
  // girl.isTouching(wall3) ||
  // girl.isTouching(wall4) ||
  // girl.isTouching(wall5) ||
  // girl.isTouching(wall6) ||
  // girl.isTouching(wall7) ||
  // girl.isTouching(wall8) ||
  // girl.isTouching(wall9) ||
  // girl.isTouching(wall10) ||
  // girl.isTouching(wall11) ||
  // girl.isTouching(wall12) ||
  // girl.isTouching(wall13)){
  //   girl.x=180
  //   girl.y=1780
  // }

  for (var x = 0; x < width; x += width / 7) {
		for (var y = 0; y < height; y += height / 5) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}


  drawSprites();
}