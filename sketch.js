var car;
var wall;
var speed,weight;



function setup() {
  createCanvas(1200,600);
  car = createSprite(200, 300, 100, 50);
  wall=createSprite(1000,300,50,400)
  wall.shapeColor=("black");

  speed=random(50,100);
  weight=random(400,1500);

}

function draw() {
  background("orange");  

  car.velocityX=speed;
  if(isTouching(car,wall)){
  car.velocityX=0;
  
  var deformation=0.5*speed*speed*weight/22509;
  if(deformation>180)
  {
  car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
  car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
  car.shapeColor=color(0,230,0);
  }

  
 




  }




  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x- object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2
    &&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2 )
    {
      return true
    }
      else{
      return false
      }
}