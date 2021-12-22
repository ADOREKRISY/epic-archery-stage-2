const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var arrow;
var bgimg;

function preload(){
  baseimage=loadImage("assets/base.png")
  bgimg=loadImage("assets/background.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
playerBase=new PlayerBase(200,350,180,150)
playerArcher=new PlayerArcher(350,playerBase.body.position.y-112,120,120)
player=new Player(260,playerBase.body.position.y-100,120,120)
arrow=new Archer(playerArcher.body.position.x,playerArcher.body.position.y,100,10)



}

function draw() {
background(bgimg)

  Engine.update(engine);
playerBase.display()
playerArcher.display()
player.display()
arrow.display()
if (keyCode==32){
arrow.shoot(playerArcher.body.angle)
}

}
