const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var Log_1,Log_2,Log_3,Log_4;
var angrybird;


function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(width/2,380,1200,20,options);
  World.add(world,ground);

  box1=new box(700,350,50,50);
  box2=new box(900,310,50,50);
  pig1=new pig(800,350);
  Log_1=new Log(800,300,260,PI/2);
  box3=new box(700,250,50,50);
  box4=new box(900,210,50,50);
  pig2=new pig(800,250);
  Log_2=new Log(800,200,260,PI/2);
  box5=new box(800,150,50,50);
  Log_3=new Log(720,150,100,PI/7);
  Log_4=new Log(880,150,100,-PI/7);
  angrybird=new bird(300,100,50,50);





}

function draw() {
  background(0);  


  Engine.update(engine);

  //console.log(log1.body.angle);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);

  box1.display();
  box2.display();
  pig1.display();
  Log_1.display();
  Log_2.display();
  box3.display();
  box4.display();
  pig2.display(); 
  box5.display();
  Log_3.display();
  Log_4.display();
  angrybird.display();
}