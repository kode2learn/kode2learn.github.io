---
title: Maze
layout: cool_code
---

void setup() {  //setup function called initially, only once
  size(600, 500);
  background(255);  //set background white
  colorMode(HSB);   //set colors to Hue, Saturation, Brightness mode
  frameRate(60);
   
  strokeWeight(12);
  stroke(0);
  line(10, 10, 410, 10);
  line(10, 10, 10,410);
  line(490, 10, 490, 410);
  line(90,410,490,410);
  line(170, 10, 170, 90);
  line(10, 250, 90, 250);
  line(90, 90, 90, 170);
  line(90,170,250,170);
  line(250, 90, 250, 250);
  line(250, 250, 330,250);
  line(330, 250, 330, 330);
  line(90, 330, 410, 330);
  line(170, 250, 170, 330);
  line(490, 90, 330, 90);
  line(330, 90, 330, 170);
  line(330, 170, 410, 170);
  line(410,170,410,330);
   
  noStroke();
  fill(120,177,200);
  rect(25, 400, 50,40);
  fill(0, 195,200);
  rect(420, 0, 50,40);
}
 
void draw() {  //draw function loops
   
  fill(250,255,200);
  noStroke();
  if(mousePressed == true) { //add some interaction
    ellipse(mouseX, mouseY, 15, 15);
  }
   
}

