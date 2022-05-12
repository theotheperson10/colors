var x=0;
var y=0;
var w=20;
var screenW=600;
var screenH=600;
function setup() {
  createCanvas(screenW, screenH);
  
}

function draw() {
  background(220);
  while(x*y<=screenW*screenH){
    fill(x,(x+y)/2,y);
    strokeWeight(w/4);
    rect(x,y,w,w);
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
