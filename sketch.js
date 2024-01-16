var boy,boyIMG
var bg,backgroundIMG
var axe,axeIMG
var Goldcoin,coinIMG

var axerand 
var coinrand
var score = 0

axerand = Math.floor(Math.random()*700)+49; 
coinrand = Math.floor(Math.random()*700)+49; 
     
 
      








function preload(){
boyIMG = loadImage("Boy running.png")
backgroundIMG = loadImage("Background-forest.jpg")
axeIMG = loadImage("Axe.png")
coinIMG = loadImage("Goldcoin.png")
}

function setup() {
createCanvas(1000,800)

 bg = createSprite(500,400,windowWidth,windowHeight)
 bg.addImage(backgroundIMG)
 bg.velocityX = -8
 
 

 boy = createSprite(120,700)
 boy.scale = 0.35
 boy.addImage(boyIMG)


 Goldcoin = createSprite(1300,coinrand)
     Goldcoin.addImage(coinIMG)
Goldcoin.scale = 0.4
Goldcoin.velocityX = -25


 axe = createSprite(1300,axerand)
 axe.addImage(axeIMG)
 axe.velocityX = -30
 axe.scale = 0.5
}

function draw() {
background("black")
if (bg.x==100){
bg.x=500
}
  if (keyDown("up")) {
  boy.y=boy.y-9
  }
  if (keyDown("down")) {
    boy.y=boy.y+9
    }
   
    if (Goldcoin.x<-50)
    {
      Goldcoin.x = 1300
      Goldcoin.y = Math.floor(Math.random()*700)+49;
     
    }

    if (Goldcoin.isTouching(boy))
    {
      Goldcoin.x = 1300
      Goldcoin.y = Math.floor(Math.random()*700)+49;
      score+=1
    }
       

    if (axe.x<-50)
    {
      axe.x = 1300
      axe.y = Math.floor(Math.random()*700)+49;
     
    }

    if (axe.isTouching(boy))
    {
      axe.x = 1300
      axe.velocityX = 0
      Goldcoin.velocityX = 0
      axe.y = 1400
      boy.y = 1500
      Goldcoin.y = 1700
    }
    
drawSprites()

textSize(40)
fill("white")
text("Score: "+score,700,50,)

}


















