const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(350,300,50,200);
    box2 = new Box(400,300,50,250);
    box3 = new Box(450,300,50,300);
    box4 = new Box(500,300,50,250);
    box5 = new Box(550,300,50,200);
    box6 = new Box(250,300,30,400);
    box7 = new Box(650,300,30,400);
    ground = new Ground(400,380,800,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
   
    
    ground.display();
   
}