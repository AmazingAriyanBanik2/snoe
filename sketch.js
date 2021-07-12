var obstacle,obstacle1;
var bg,kid;

function preload()
{
obstacle1 = loadImage("snow4.webp");
bg = loadImage("snow3.jpg");

}


function setup() {
  createCanvas(800,400);


}

function draw() {
  background(bg);  

  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
if (frameCount % 10 === 0){
var obstacle = createSprite(1,1,50.50);
obstacle.x = Math.round(random(10,800));
obstacle.scale = 0.1;
obstacle.velocity.Y = 2;
obstacle.addImage("snow", obstacle1);




}
}