var plane,passenger,sky,startButton,crashedPlane
var man_running,man,backgroundi,bgI

var skyImage,planeImage,passengerImage
var gameState =0;
var play,ground
var plank,pi,edge
var obstacle1,o2,o3
var oi,o2i,o3a
var life =3
var gameOver,welcome
var goI,wI
var lod,li
var h1,h2,h3
var hi

function preload(){
planeImage = loadImage("images.png");
skyImage = loadImage("download.jfif")
crashedPlane = loadImage("cp.png")
passengerImage = loadAnimation("m1.jpg","m2.jpg","m3.jpg")
man_running = loadAnimation("c1.png","c2.png","c3.png");
bgI = loadImage("bg1.png")
pi = loadImage("wood2.png")
oi = loadImage("fire.png")
o2i = loadAnimation("dog1.png","dog2.png","dog3.png","gog4.png")
o3a  = loadImage("o2.png")
wI = loadImage("welcome.png")
li = loadImage("loading.png")
hi = loadImage("h1.png")
goI = loadImage("gameOver.png")

}


function setup(){
var canvas = createCanvas(600,600)
plane = createSprite(20,300,50,50);

plane.addImage(planeImage)
plane.velocityX =2;
//passenger = createSprite(100,500,10,20)
man = createSprite(100,500,20,50);
man.addAnimation("running", man_running);
man.scale = 0.7;
backgroundi = createSprite(100,300,600,600)
backgroundi.x = backgroundi.width/2;
backgroundi.addImage("image",bgI)
backgroundi.scale = 2
edge = createSprite(50,300,10,600)
text("life: "+life,200,300)
//backgroundi.velocityX=2;
if (frameCount % 60 === 0) {
  plank = createSprite(600,120,40,10);
 plank.y = Math.round(random(300,550));
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 plank.velocityX = -3;
 
  //assign lifetime to the variable
 plank.lifetime = 500;
 plank.addImage("hosqbif",pi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
plank.display();
}
if (frameCount % 60 === 0) {
  obstacle1 = createSprite(600,120,40,10);
 obstacle1.y = Math.round(random(300,550));
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 obstacle1.scale = 0.1;
 obstacle1.velocityX = -3;
 
  //assign lifetime to the variable
 obstacle1.lifetime = 500;
 obstacle1.addImage("hosdsf",oi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
obstacle1.display();
}
if (frameCount % 200 === 0) {
  o2 = createSprite(600,120,40,10);
 o2.y = 525
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 o2.scale = 0.1;
o2.velocityX = -3;
 
  //assign lifetime to the variable
 o2.lifetime = 500;
 o2.addAnimation("hf",o2i)
 o2.scale = 0.7

 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
o2.display();
}
if (frameCount % 200 === 0) {
  o3 = createSprite(600,120,40,10);
 o3.y = Math.round(random(300,550));
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 o3.scale = 0.1;
o3.velocityX = -3;
 
  //assign lifetime to the variable
 o3.lifetime = 500;
 o3.addAnimation("heo",o3a)
 o3.scale = 0.3

 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
o3.display();
}
}

function draw(){
  background("lightblue")

if(gameState === 0){
//console.log(gameState)
welcome = createSprite(300,100)
welcome.addImage("ggfffdADW",wI)
lod = createSprite(300,400)
lod.addImage("fwqui",li)
lod.display();
welcome.display();

plane.display();
}
if(plane.x===500){
  gameState = 1
  console.log(gameState)
}
if(gameState===1){

    plane.addImage(crashedPlane)
    plane.display();
  
}
if(plane.x === 600){
  gameState = 2;
}
if(gameState === 2){
if(keyCode ===32){
  game3();
}
}


if(gameState===3){
 

ground = createSprite(200,580,600,20);
ground.x = ground.width /2;
ground.velocityX = -4;
/*if( backgroundi.x < 600) {
  backgroundi.x = backgroundi.width / 2;
}*/
if(keyDown("space")){
  man.velocityY = -10


}
man.velocityY = man.velocityY+0.8
man.collide(ground)

/*passenger.addAnimation("hee",passengerImage)
passenger.scale = 0.5
passenger.velocityX=2
passenger.display();*/
if (backgroundi.x < 600){
  backgroundi.x = 300
}
backgroundi.display();
man.display();
ground.display();
if (frameCount % 300 === 0) {
  plank = createSprite(600,500,40,10);
 plank.y = Math.round(random(400,550));
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 plank.velocityX = -3;
 
  //assign lifetime to the variable
 plank.lifetime = 500;
 plank.addImage("hosqbif",pi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);

}
if (frameCount % 1000 === 0) {
  obstacle1 = createSprite(600,120,40,10);
 obstacle1.y = man.y
 
 //.addImage(cloudImage);
 obstacle1.scale = 0.1;
 obstacle1.velocityX = -3;
 
  //assign lifetime to the variable
 obstacle1.lifetime = 500;
 obstacle1.addImage("hosdsf",oi)
 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
obstacle1.display();
}
//createEdgeSprites();
if (frameCount % 500 === 0) {
  o2 = createSprite(600,120,40,10);
 o2.y = 525
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 o2.scale = 0.1;
o2.velocityX = -3;
 
  //assign lifetime to the variable
 o2.lifetime = 500;
 o2.addAnimation("h",o2i)
 o2.scale = 0.7
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
o2.display();
}
if (frameCount % 700 === 0) {
  o3 = createSprite(600,120,40,10);
 o3.y = Math.round(random(200,550));
 
 //.addImage(cloudImage);
 //cloud.scale = 0.5;
 o3.scale = 0.1;
o3.velocityX = -3;
 
  //assign lifetime to the variable
 o3.lifetime = 500;
 o3.addAnimation("heo",o3a)
 o3.scale = 0.3

 
 //adjust the depth
 //clou.depth = trex.depth;
 //trex.depth = trex.depth + 1;
 
 //add each cloud to the group
//   cloudsGroup.add(cloud);
o3.display();
}
if(life===3){
h1 = createSprite(400,100)
h1.addImage("h1",hi)
h1.scale = 0.5
h1.display();
h2 = createSprite(350,100)
h2.addImage("h1",hi)
h2.scale = 0.5
h2.display();
h3 = createSprite(300,100)
h3.addImage("h1",hi)
h3.scale = 0.5
h3.display();

}
if(life ===2){
  h1 = createSprite(400,100)
h1.addImage("h1",hi)
h1.scale = 0.5
h1.display();
h2 = createSprite(350,100)
h2.addImage("h1",hi)
h2.scale = 0.5
h2.display();

}
if(life === 1){
  h1 = createSprite(400,100)
  h1.addImage("h1",hi)
  h1.scale = 0.5
  h1.display();
}
if(obstacle1.isTouching(man)&&life>=3){
  life = life-+1
  obstacle1.destroy()
  console.log(life)
}
if(o3.isTouching(man)){
  life = life-1
  o3.destroy()
  console.log(life)
}
if(o2.isTouching(man)){
  life = life-1
o2.destroy()
  console.log(life)
}

man.collide(plank)
man.collide(edge)
obstacle1.display();
plank.display();
o2.display();
o3.display();


}
if(life === 0){
  gameState = 4
  //console.log(gameState)
}
if(gameState===4){
gameOver = createSprite(300,300)
gameOver.addImage("fewif",goI)
gameOver.display()
}


  /*if(gameState === "play"){

    plane = createSprite(20,300,50,50);
    plane.addImage(planeImage)
    plane.velocityX = 2;
   

  }*/

//drawSprites();
}
function game3(){
  gameState=3
}
function plankS(){
  if (frameCount % 60 === 0) {
     plank = createSprite(600,120,40,10);
    plank.y = Math.round(random(80,120));
    //.addImage(cloudImage);
    //cloud.scale = 0.5;
    plank.velocityX = -3;
    
     //assign lifetime to the variable
    plank.lifetime = 500;
    plank.addImage("hosqbif",pi)
    
    //adjust the depth
    //clou.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
 //   cloudsGroup.add(cloud);
 plank.display();
}
}
