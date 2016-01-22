---
title: Bouncing Ball
layout: cool_code
---

float xPosition = 0;
float yPosition;
float xSpeed = 3;
float ySpeed = 3;

void setup(){
size(450,350);
smooth();
noStroke();
yPosition = height/2;
}

void draw(){
background(0);

// checks to see if ball position is larger than width of sketch
if(xPosition>width){
xSpeed = -10; 
}

// checks to see if ball position is smaller than 0 (left wall)
if(xPosition<0){
xSpeed = 10; 
}

fill(0,0,250);
ellipse(xPosition,yPosition,50,50);
// The below line says that the value of xPosition will grow by 2 every frame
xPosition += xSpeed; 
}
