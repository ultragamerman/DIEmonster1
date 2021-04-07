const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var mrhero,staticSling,monsta,block1,block2,block3,block4,block5,block6,block7,block8,block9,ground1,ground2,ground3,ground4,ground5;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1200, 1200);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  mrhero = new hero(10,10,1,1);
  monsta = new Monster(800,400,20,20);
  block1 = new block(450,400,20,20);
  block2 = new block(470,400,20,20);
  block3 = new block(490,400,20,20);
  block4 = new block(450,380,20,20);
  block5 = new block(470,380,20,20);
  block6 = new block(490,380,20,20);
  block7 = new block(450,360,20,20);
  block8 = new block(470,360,20,20);
  block9 = new block(490,360,20,20);
  ground1 = new ground(470,410,200,10);
  ground2 = new ground(width/2,height-height,width,20);
  ground3 = new ground(width/2,height,width,20);
  ground4 = new ground(width,height/2,20,height);
  ground5 = new ground(width-width,height/2,20,height);
  staticSling = new constraint(mrhero.body,{x:200,y:400});
}

function draw() {
  background("white");
  Engine.update(engine);

  mrhero.display();
  monsta.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  staticSling.display();    
}

