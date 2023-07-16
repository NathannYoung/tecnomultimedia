/*
Alumne: Young, Nathann
 Profesor: Albirosa, Tobías
 COM 5
 TP3
 Link a youtube: https://youtu.be/cqdABEvCUqg
 */

int pantalla;
int cantidad;
int textoEnX, textoEnY, anchoDeRectTexto, altoDeRectTexto;
int conteo;
float botonInicio, botonQHPSEnX, botonReiniciarEnX, botonEnXRedondo0, botonEnXRedondo1, botonEnXRedondo2, botonEnXRedondo3, botonEnXRedondo4, botonEnY, botonEnYRedondo, tamBotonRedondo;
PImage[] imagen;
String[] relato;
PFont fuente;
color colorFondoTexto, colorRelato, colorBotonInactivo, colorBotonActivo;
boolean activado;
int atras, siguiente;

void setup() {
  size(600, 600);
  pantalla = 0;
  cantidad = 19;
  textoEnX = width/2;
  textoEnY = 85;
  anchoDeRectTexto = width-88;
  altoDeRectTexto = 425;
  conteo = 0;
  botonInicio = width/2;
  botonQHPSEnX = 100;
  botonReiniciarEnX = 500;
  botonEnXRedondo0 = width/2 - width/3;
  botonEnXRedondo1 = width/2 - width/6;
  botonEnXRedondo2 = width/2;
  botonEnXRedondo3 = width/2 + width/6;
  botonEnXRedondo4 = width/2 + width/3;
  botonEnY = 540;
  botonEnYRedondo = 550;
  tamBotonRedondo = 30;
  atras = -1;
  siguiente = 1;
   imagen = new PImage[cantidad];
  //fuente y texto
  fuente = createFont("relatos/Tipografia.ttf", 16);
  textFont(fuente);
  colorRelato = color (205, 0, 255, 0);
  colorFondoTexto = color (255, 0);
  colorBotonInactivo = color (205, 0, 255, 120);
  colorBotonActivo = color (205, 0, 255, 255);
  //cargar imagenes
  for (int i = 0; i < cantidad; i++) {
    imagen[i] = loadImage("imagenes/" + i + ".jpg");
    imagen[i].resize(width, height);
  }
  //cargar relatos
  relato = loadStrings("relatos/Pan.txt");
  procesarRelato();
 }

void draw() {
  conteo ++ ;
  println(conteo);
  dibujarFondo(pantalla);
  escribirRelato(pantalla);
  if (pantalla == 0) {
    hacerBotonRect("Iniciar", botonInicio, botonEnY+20, tamBotonRedondo);
    push();
    textSize(44);
    text (" ''Las aventuras de Pan'' ", width/2, textoEnY);
    pop();
  } else if (pantalla > 0 && pantalla != 3 && pantalla != 7 && pantalla != 8  && pantalla != 9  && pantalla != 13 && pantalla != 17 && pantalla != 18) {
    hacerBotonCirc("avanzar", botonEnXRedondo4, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("retroceder", botonEnXRedondo0, botonEnYRedondo, tamBotonRedondo);
  } else if (pantalla == 3) {
    hacerBotonCirc("avanzar", botonEnXRedondo4, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("retroceder", botonEnXRedondo0, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("opcionUno", botonEnXRedondo1, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("opcionDos", botonEnXRedondo3, botonEnYRedondo, tamBotonRedondo);
  } else if (pantalla == 8 ) {
    hacerBotonCirc("opcionUno", botonEnXRedondo2, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("avanzar", botonEnXRedondo4, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("retroceder", botonEnXRedondo0, botonEnYRedondo, tamBotonRedondo);
  } else if (pantalla == 9 ) {
    hacerBotonCirc("opcionDos", botonEnXRedondo2, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("avanzar", botonEnXRedondo4, botonEnYRedondo, tamBotonRedondo);
    hacerBotonCirc("retroceder", botonEnXRedondo0, botonEnYRedondo, tamBotonRedondo);
  } else if (pantalla == 7 || pantalla == 13 || pantalla == 17 || pantalla == 18) {
    hacerBotonRect("QHPS", botonQHPSEnX, botonEnY+25, tamBotonRedondo);
    hacerBotonRect("Reiniciar", botonReiniciarEnX, botonEnY+25, tamBotonRedondo);
  }
}

void mouseMoved() {
activado = true;
}
