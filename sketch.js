
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

var survivalTime=0;


var PLAY=1;
var END=0;
var gameState;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  
  ground.x=ground.width/2;
  
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
  
  console.log(ground.x)
  
 
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
  background("white");
  
  
    
   ground.velocityX=-4;
  
  
  
  if(ground.x<0){
  ground.x=ground.width/2;
  
   }
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 220){
    monkey.velocityY=-10;
    
   } 
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  if(obstacleGroup.isTouching(monkey)){
    
    
   }
   
  banana();
  obstacle();
    
  
    
    
    
    
  

  drawSprites();
}

function banana(){
  
 if(frameCount%80===0){
   var banana=createSprite(320,120)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-5;
   
   banana.lifetime=120;
   
   banana.depth=monkey.depth;
   banana.depth=monkey.depth+1;
   
   foodGroup.add(banana);
 }
  
  
}

function obstacle(){
  
 if(frameCount%300===0){
   var obstacle=createSprite(350,320);
   obstacle.addImage(obstaceImage);
   
   obstacle.velocityX=-4;
   obstacle.scale=0.1;
   
   obstacle.lifetime=130;
   
   obstacleGroup.add(obstacle);
   
   
 } 
  
  
  
  
  
}



