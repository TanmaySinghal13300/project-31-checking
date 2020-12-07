const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events=Matter.Events
var engine, world;

function setup() {
  createCanvas(600,650);
  engine=Engine.create();
  world=engine.world
  ground1=new Ground(1,500,20,300);
  ground2=new Ground(599,500,20,300);
  ground3=new Ground(85,500,20,300);
  ground4=new Ground(170,500,20,300);
  ground5=new Ground(255,500,20,300);
  ground6=new Ground(340,500,20,300);
  ground7=new Ground(425,500,20,300);
  ground8=new Ground(510,500,20,300);
  ground9=new Ground(300,640,600,20);

Engine.run(engine)
}
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function draw() {
  background(0);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  if(frameCount%90===0){
   for(i=0;i<=1000;i++){
    particles.push(new Particles(i, 50))
   }
  }
  
  for(var j=0;j<=particles.length;j++){
    particles[j].display();
  }
  
  for(var k=0;k<=divisions.length;k++){
    plinko[k].display();
    }

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    drawSprites();
}

/*for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k,height-devisionHeight/2,10,divisionHeight));
}

for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
}*/

/*for(var j=0;j<=particles.length;j++){
  particles[j].display();
}

for(var k=0;k<=divisions.length;k++){
  particles[k].display();
  }*/

  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }*/