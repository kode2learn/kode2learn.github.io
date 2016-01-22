---
title: Magic 8 Ball
layout: cool_code
---

PFont f;                           
String phrase = "Magic 8 Ball: Ask a question and then press any key for an answer to your question!";
String [] answers = new String[9];
void setup(){
size(700,400);
  answers[0] = "It is certain";
  answers[1] = "Ask again later";
  answers[2] = "Don't count on it";
  answers[3] = "Yes, definitely";
  answers[4] = "Cannot predict now";
  answers[5] = "My sources say no";
  answers[6] = "Signs point to yes";
  answers[7] = "Better not tell you now";
  answers[8] = "Outlook is not good";
}
void draw() {
  f = createFont("Arial",16,true); 
  background(255);
  textFont(f,16);                 
  fill(0);                         
  text(phrase,10,100); 
}
void keyPressed() {
  int num = (int)random(9); 
  phrase = answers[num];  
}

