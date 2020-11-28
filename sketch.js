
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20;
 var block21,block22,block23,block24,block25;
 var block26,block27,block28,block29,block30,block31;
 var polygon1;
 var slingshot1;
 var score=0;
 var backgroundimg;
 var back;
function preload()
{
	getbackgrounimage();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1=new Ground(400,700,800,20);
stand1=new Ground(300,540,290,20);
stand2=new Ground(600,450,200,20);
block1=new Block(190,510,30,40);

block2=new Block(230,510,30,40);

block3=new Block(270,510,30,40);

block4=new Block(310,510,30,40);

block5=new Block(350,510,30,40);

block6=new Block(390,510,30,40);

block7=new Block(210,470,30,40);


block8=new Block(250,470,30,40);

block9=new Block(290,470,30,40);

block10=new Block(330,470,30,40);

block11=new Block(370,470,30,40);

block12=new Block(230,430,30,40);

block13=new Block(270,430,30,40);

block14=new Block(310,430,30,40);

block15=new Block(350,430,30,40);

block16=new Block(250,390,30,40);

block17=new Block(290,390,30,40);

block18=new Block(330,390,30,40);

block19=new Block(310,350,30,40);

block20=new Block(270,350,30,40);

block21=new Block(290,310,30,40);

block22=new Block(530,418,30,40);

block23=new Block(570,418,30,40);

block24=new Block(610,418,30,40);

block25=new Block(650,418,30,40);

block26=new Block(550,378,30,40);

block27=new Block(590,378,30,40);

block28=new Block(630,378,30,40);

block29=new Block(570,338,30,40);

block30=new Block(610,338,30,40);

block31=new Block(590,298,30,40);

polygon1=new Polygon(50,200,90);
slingshot1=new Slingshot(polygon1.body,{x:100,y:200});



//block25=new Block(650,418,30,40);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
 
 //console.log(back);
 
 if(backgroundimg){

 background(backgroundimg);

 }
  textSize(30);
  text ("score:" + score,600,40);
  ground1.display();
  stand1.display();
  stand2.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();

  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  block26.display();
  block26.score();
  block27.display();
  block27.score();
  block28.display();
  block28.score();
  block29.display();
  block29.score();
  block30.display();
  block30.score();
  block31.display();
  block31.score();
  polygon1.display();
  slingshot1.display();
  
 // getbackground();
 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(polygon1.body);
  }
}
async function getbackgrounimage(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<=18){
   bac = "night.jpg";
  }
  else {
    bac = "day.png";
  }
  backgroundimg = loadImage(bac);
  console.log(backgroundimg);

}



