var bee, beeAnime;
var bg;
var x1=0;
var x2;
var tree1,tree2,tree3,tree4;
var obs5;
var obstacles;
var honeyImg1,honeyImg2,honeys;
var scrollSpeed = 10;
function preload(){
beeAnime=loadAnimation("FLY_RIGHT/1.png","FLY_RIGHT/2.png","FLY_RIGHT/3.png","FLY_RIGHT/4.png","FLY_RIGHT/5.png","FLY_RIGHT/6.png")
bg=loadImage("FLY_RIGHT/forest.png");
tree1=loadImage("obstacles/tree1.png");
tree2=loadImage("obstacles/tree2.jpg");
tree3=loadImage("obstacles/tree3.jpg");
tree4=loadImage("obstacles/tree4.jpg");
obs5=loadImage("obstacles/obs5.jpg");
honeyImg1=loadImage("honey.jpg");
honeyImg2=loadImage("honey2.png");
}

function setup(){
    
createCanvas(windowWidth,windowHeight);
 
obstacleGroup=new Group();
honeyGroup=new Group();
 x2 = width;
 bee=createSprite(120,height-300);
 bee.addAnimation("honeybee",beeAnime) ;
 bee.scale=0.3;
 bee.velocityX=1;
 bee.velocityY=2;
}

function draw(){
  background("white");

image(bg, x1, 0, width+10, height);
image(bg, x2, 0, width+25, height);

x1 -=scrollSpeed;
x2 -=scrollSpeed;

if(x1<= -width){
    x1 = width;
}

if(x2<=-width){
    x2=width
}


if(keyDown("RIGHT_ARROW")){
  bee.x=bee.x+5;
}
if(keyDown("LEFT_ARROW")){
  bee.x=bee.x-5;
}
if(keyDown("UP_ARROW")){
  bee.y=bee.y-5;
}
if(keyDown("DOWN_ARROW")){
  bee.y=bee.y+5;
}
spawnObstacles();

  drawSprites();
}
function spawnObstacles(){
  if(frameCount%120===0){
    obstacles=createSprite(windowWidth,400);
    obstacles.velocityX=-2;
    var rand=Math.round(random(1,5));
    switch(rand){
     case 1:obstacles.addImage(tree1);
            break;
         
     case 2:obstacles.addImage(tree2);
           
            break;
            
    case 3:obstacles.addImage(tree3);
           
           break;
        
    case 4:obstacles.addImage(tree4);
           break;
        
    case 5:obstacles.addImage(obs5);
           break;
        
    default:break;    
        
    }
    obstacleGroup.add(obstacles) 
    }
  }
  function spawnHoney(){
    honeys=createSprite(windowWidth-100,Math.round(random(100,500)));
    honeys.velocityX=-2;
    var rand2=Math.round(random(1,2));
    
    switch(rand2){
      case 1:honeys.addImage(honeyImg1);
            break;
        
      case 2:honeys.addImage(honeyImg2);
            break;
        
      default:break;
    }
    honeyGroup.add(honeys);
  }
