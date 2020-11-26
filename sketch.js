//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImg , happyDogImg
function preload()
{
  //load images here
  dogImg = loadImage("dog1.png")
  happyDogImg = loadImage("happyDog.png")
  

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200,10,10)
  dog.addImage("dogImg",dogImg)
  

  foodStock = database.ref('food')
foodStock.on("value",readPosition )
}
}


function draw() {  
background(46,139,87)
if(keyWentDown(foodS)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
//add styles here
textSize(20)
text("Note Press UP_ARROW Key To Feed Drago Milk")
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){


  database.ref('/').update({
    Food:x
  })
}


