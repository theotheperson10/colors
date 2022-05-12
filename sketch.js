var x=0;
var y=0;
var w=20;
var screenW=900;
var screenH=900;
function setup() {
  createCanvas(screenW, screenH);
  
}

function draw() {
  background(220);
  while(x*y<=screenW*screenH){
    stroke(x,(x+y)/2,y);
    strokeWeight(w*2)
    line(x,y,screenW/2,screenH/2);
    line(screenW-x,screenH-y,screenW/2,screenH/2);
  x+=w;
  if(x>=screenW+w){
  x=0;
  y+=w;}
  }
  x=0;
  y=0;
  if(key=="a"){w+=0.5;}
  if(key=="d"){if(w-1>0){w-=0.5}}
}
