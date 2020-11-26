var dog, happydog, database, dogImg, dogImg1, foodS, foodStock;
//Create variables here

function preload()
{
  dogImg= loadImage("images/dogImg.png");
  dogImg1= loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,300,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() { 
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();
  fill("black");
  textSize(15);
  text("Press Up_Arrow key to feed tommy milk!", 130, 100);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



