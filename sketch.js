const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 800;




let rain;
let chihuahua;
let chihuahuaAnim;
let cat;
let poop;
let poopAnim;

function preload() {


  rain = loadAnimation('img/rain/sprite_00.png','img/rain/sprite_23.png');

  chihuahua = loadAnimation('img/chihuahua/chichi0.png','img/chihuahua/chichi3.png');

  poop = loadAnimation('img/poop/poop0.png','img/poop/poop4.png');

  cat = loadImage("img/cat.png");

}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);





}




function draw() {

  animation(rain, 0, 0);


  animation(chihuahua, 100, 100);


  animation(poop, 400, 100);
 


  image(cat, 200, 100);


   

}










