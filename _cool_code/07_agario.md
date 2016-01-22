---
title: Agario
layout: cool_code
---


float x, y;

float V;

float Vx, Vy;

float Real;

float R;

float ballR;

float ballx;

float bally;

float Dxball;

float Dyball;

String First = "Slower? :P";//50

String Second = "ok stop growing, that's too much for you";//100

String Third = "Seriously Stop!! or you want me to stop this?";//300

String Last = "Told you to stop :P";//600

 

void setup(){

  size(800, 600);

  noStroke();

  x = width/2;

  y = height/2;

  Real = 10;

  ballx = random(0, width);

  bally = random(0, height);

  ballR = random(7, R);

}

void draw(){

  V = 50/Real + 1;

  float Dx = mouseX - x;

  float Dy = mouseY - y;

  float D = sqrt(sq(Dx)+sq(Dy));

  Vx = (V/D)*Dx;

  Vy = (V/D)*Dy;

  float Dxball = ballx - x;

  float Dyball = bally - y;

  float ballD = sqrt(sq(Dxball)+sq(Dyball));

  background(255);

  fill(200, 0, 0);

  ellipse(x, y, 2*R, 2*R);

  x+=Vx;

  y+=Vy;

  fill(0, 150, 100);

  ellipse(ballx, bally, 2*ballR, 2*ballR);

  if(ballD < abs(R) - abs(ballR)){

    Real = sqrt(sq(R)+sq(ballR));

    ballx = random(0, width);

    bally = random(0, height);

    ballR = random(9, R);

  }

  if(R < Real){

    R+= 2.5;

  }

  fill(0);

  textAlign(CORNER);

  textSize(16);

  text("Your Size: " + R, 10, 20);

  fill(255);

  textAlign(CENTER);

  if(R < 50){

    textSize(ballR);

    text("._.", ballx, bally);

  }

  else if(R < 100){

    textSize(ballR/3);

    text(First, ballx, bally);

  }

  else if(R < 300){

    textSize(ballR/10);

    text(Second, ballx, bally);

  }else if(R < 600){

    textSize(ballR/10);

    text(Third, ballx, bally);

  }else if(R < 900){

    textSize(ballR/5);

    text("Bruh!!!", ballx, bally);

  }else {

    fill(0);

    background(200);

    textSize(70);

    text(Last, width/2, height/2);

  }

}

void keyPressed(){

  if(key == 'r'){

    restart();

  }

}

void restart(){

  x = width/2;

  y = height/2;

  Real = 10;

  R = Real;

  ballx = random(0, width);

  bally = random(0, height);

  ballR = random(3, R);

}



