var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,500);
  monkey = createSprite(50,330,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.25;
  
   ground = createSprite(500,410,1500,20);
   ground.velocityX=-6;
  
bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}




function draw() {
  background("white");
  
     survivalTime=Math.ceil(frameCount/frameRate())
  textSize(20);
  text("Survival Time: "+survivalTime , 350, 100);


  
if (ground.x<0){
  ground.x = ground.width/2;
}
  monkey.collide(ground);
  
  if (gameState ===PLAY){
    
  
   if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;
    }
       monkey.velocityY = monkey.velocityY + 0.8
   
  }  
  
  
  if(monkey.isTouching(bananaGroup)){
       
        
        bananaGroup.destroyEach();
        
  }
  
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana() {
  
  if (frameCount % 160 === 0) {
    banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 500;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   bananaGroup.add(banana);
      banana.debug=true;
    }
}


function spawnObstacles() {
  if(frameCount % 160 === 0) {
    obstacle = createSprite(600,380,10,40);
    obstacle.velocityX = -3;
  
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    
  
    obstacle.lifetime = 300;
    
      obstacleGroup.add(obstacle);
   
  obstacle.debug=true;
  }
}
