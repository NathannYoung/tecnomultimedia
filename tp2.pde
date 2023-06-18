/*
Alumne: Young, Nathann
Profesor: Albirosa, Tobías
COM 5
TP2
Link a youtube: https://youtu.be/Jd0nkWEq8kA
 */

PImage obra;
int cant;
int tamCirculo;
int inicioEnX, inicioEnY;
float inicioCirculoBlanco1, finalCirculoBlanco1, inicioCirculoGris1, finalCirculoGris1;
float diferenciaCirculo;
int posMouseX, posMouseY;
color blancoInicio, grisInicio;
int mov;
boolean mouseDentro = false;

void setup() {
  size(800, 400);
  background(0);
  obra = loadImage("leparc3.jpg");
  image(obra, 0, 0, width/2, height);
  cant = 10;
  tamCirculo = height / 10;
  inicioEnX = width/2;
  inicioEnY = 0;
  inicioCirculoBlanco1 = radians(44);
  finalCirculoBlanco1 = radians(226);
  inicioCirculoGris1 = radians(314);
  finalCirculoGris1 = radians(320);
  diferenciaCirculo = 10;
  posMouseX = 0;
  posMouseY = 0;
  mov = 1;
  mouseDentro = false;
}

void draw() {
  fill (0);
  rect(width/2, 0, width/2, height);
  for (int i = 0; i < cant; i++) {
    for (int j = 0; j < cant; j++) {
      if ( i == 0 && j == 0) {
        diferenciaCirculo =  10;
        dibujarArcos (i, j);
      } else if (i != 0 && j == 0) {
        diferenciaCirculo =  10 - j;
        dibujarArcos (i, j);
      } else if (i == 0 && j != 0) {
        diferenciaCirculo =  10 - i;
        dibujarArcos (i, j);
      } else if ( i <= j && i != 0 && j != 0) {
        diferenciaCirculo =  9 - i;
        dibujarArcos (i, j);
      } else if (i >= j && i != 0 && j != 0) {
        diferenciaCirculo = 9 - j;
        dibujarArcos (i, j);
        println (posMouseX, posMouseY, mov, mouseDentro);
      }
    }
  }
}

void mouseMoved() {
  posMouseX = int(map(mouseX, 400, width, 1, 11));
  posMouseY = int(map(mouseY, 0, height, 1, 11));
  if (mouseX >= inicioEnX && mouseX <= inicioEnX*2 && mouseY >= inicioEnY && mouseY <= inicioEnY + height) {
    mouseDentro = true;
  } else {
    mouseDentro = false;
  }
}

void mouseExited() {
  mouseDentro = false; // Restablecer el valor de mouseDentro al salir del área de dibujo
}
