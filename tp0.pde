//COMENTARIOS
/*
Alumne: Young, Nathann
Profesor: Albirosa, Tobías
COM 5
TP0
*/


void setup (){
  size (800,400);
  background (255);
 PImage img1;
 img1 = loadImage ("sierra.png");
 image (img1,width/2,0);
   
}
void draw (){
  
//arco negro primeraparte recta 
  stroke (0);
  fill (0);
  
  rect (32,69,63,17);
  beginShape();
    vertex (95,69);
    vertex(112,72);
    vertex(112,83);
    vertex(95,86);
  endShape();
  
  rect (32,206,63,17);
  beginShape();
    vertex(95,206);
    vertex(112,209);
    vertex(112,220);
    vertex(95,223);
  endShape();
 
//arconegro segunda parte recta
  stroke (0);
  fill (0);
    rect (112,71,182,13);
    rect (112,208,182,13);
 
//arco negro parte circular
 arc (295,146,165,149,radians(-90),radians(90));
    fill(255);
 arc (295,146,140,123,radians(-90),radians(90));
 
//agarraderas
  fill (210);
  stroke(210);
  circle (64,62,4);
  noStroke ();
    rect (31,67,21,21);
    rect (34,70,39,15,0,5,5,0);
    rect (61,64,7,6);
    rect (32,222,12,5);
    rect (34,206,39,15,0,5,5,0);
    rect (32,205,20,20,0,0,25,0); 
  fill(210);
  stroke (50);
  strokeWeight (1); 
    circle (40,76,5);
    circle (40,213,5);
  noFill();
  stroke (235);
    circle (40,76,13);
    circle (40,213,13);
 
//sierra
  fill (215);
  stroke(185); 
    rect (36,87,1,117);
 
//mango parte madera
  stroke(205,37,43);
  fill (205,37,43);
  strokeWeight (2);
    beginShape();
      vertex(30,236);
      curveVertex(30,236);
      curveVertex(30,236);
      curveVertex(26,242);
      curveVertex(30,257);
      curveVertex(26,290);
      curveVertex(30,322);
      curveVertex(26,342);
      curveVertex(30,353);
      curveVertex(30,353);
      vertex(30,353);
      vertex(48,353);
      curveVertex(48,353);
      curveVertex(48,353);
      curveVertex(52,342);
      curveVertex(48,322);
      curveVertex(52,290);
      curveVertex(48,257);
      curveVertex(52,242);
      curveVertex(48,236);
      curveVertex(48,236);
      vertex(48,236);
      vertex(48,236);
      vertex(30,235);
    endShape();
    
//mango parte metal
  fill(210);
  stroke (150);
  strokeWeight (1);
    rect (30,227,18,8);
 
//REFLEJOS:
  

//reflejo arco negro
  noStroke();
  strokeWeight (2);
  fill (255,255,255,105);
  beginShape();
    vertex(97,71);
    vertex(107,77);
    vertex(107,81);
    vertex(97,85);
    vertex(97,71);
    vertex(97,208);
    vertex(107,214);
    vertex(107,218);
    vertex(97,222);
    vertex(97,208);
  endShape();
  
//reflejo en arco negro y agarradera
  circle (73,78,5);  
  circle (73,214,5); 

  stroke (155,155,155,105);
  noFill ();
  line (107,80,294,80);
  arc (295,146,147,131,radians(-90),radians (20));
  line (107,216,294,216);
  arc (295,146,162,141,radians(-40),radians (90));
    
//reflejo blancos en metal
  noStroke();
  fill(255,255,255,155);
    rect (34,228,3,7);
    rect (42,228,3,7);


//reflejo mango
  stroke(232,128,128,185);
  fill (232,128,128,185);
    beginShape();
      vertex(34,237);
      curveVertex(34,237);
      curveVertex(34,237);
      curveVertex(30,242);
      curveVertex(34,257);
      curveVertex(31,290);
      curveVertex(34,322);
      curveVertex(30,342);
      curveVertex(34,351);
      curveVertex(34,351);
      vertex(34,351);
      vertex(44,351);
      curveVertex(44,351);
      curveVertex(44,351);
      curveVertex(48,342);
      curveVertex(44,322);
      curveVertex(47,290);
      curveVertex(44,257);
      curveVertex(48,242);
      curveVertex(44,237);
      curveVertex(44,237);
      vertex(44,237);
      vertex(44,237);
      vertex(34,237);
    endShape();
  stroke(198,37,43);
  fill (198,37,43);
    beginShape();
      vertex(38,237);
      curveVertex(38,237);
      curveVertex(38,237);
      curveVertex(34,242);
      curveVertex(38,257);
      curveVertex(34,290);
      curveVertex(38,322);
      curveVertex(34,342);
      curveVertex(38,351);
      curveVertex(38,351);
      vertex(38,351);
      vertex(40,351);
      curveVertex(40,351);
      curveVertex(40,351);
      curveVertex(44,342);
      curveVertex(40,322);
      curveVertex(44,290);
      curveVertex(40,257);
      curveVertex(44,242);
      curveVertex(40,237);
      curveVertex(40,237);
      vertex(40,237);
      vertex(40,237);
      vertex(38,237);
    endShape();
      
 }
 
 
 
// esto lo utilice para tomar los valores del mango, el boton del centro era para
//cuando debia repetir valores en las esquinas donde pasaba de linea recta a linea curva
//luego dependiendo el caso, el "_" lo borraba y agregaba "v" o "curveV" en el codigo  

void mousePressed() {
  if (mouseButton == LEFT) {
      println("vertex("+mouseX+","+mouseY+");"); 
  } else if (mouseButton == RIGHT) {
      println("curveVertex("+mouseX+","+mouseY+");"); 
  } else if (mouseButton == CENTER) {
      println("_vertex("+mouseX+","+mouseY+");"); 
      println("_vertex("+mouseX+","+mouseY+");"); 
      println("_vertex("+mouseX+","+mouseY+");");
  }
}
