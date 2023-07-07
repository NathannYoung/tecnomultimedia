int cantidad, centroX, centroY;
PImage[] imagen;
String[] relato;
PFont fuente;
int pantalla;
color colorFondoTexto, colorRelato;
int anchoDeTexto, altoDeTexto;
int conteo;

void setup() {
  size(600, 600);
  cantidad = 19;
  centroX = width/2;
  centroY = height/2 - height/16;
  imagen = new PImage[cantidad];
  fuente = createFont("relatos/tipografia.otf", 18);
  textFont(fuente);
  pantalla = 0;
  colorRelato = color (205, 0, 255);
  colorFondoTexto = color (0, 150);
  for (int i = 0; i < cantidad; i++) {
    imagen[i] = loadImage("imagenes/" + i + ".jpg");
    imagen[i].resize(width, height);
  }

  relato = loadStrings("relatos/Pan.txt");
  procesarRelato();
  anchoDeTexto = width-88;
  altoDeTexto = 400;
  conteo = 0;
}

void draw() {
  dibujarFondo(pantalla);
  escribirRelato(pantalla);
}

void procesarRelato() {
  for (int i = 0; i < relato.length; i++) {
    relato[i] = relato[i].replaceAll("\\\\n", "\n");
  }
}

void dibujarFondo(int indice) {
  image(imagen[indice], 0, 0);
}

void escribirRelato(int oracion) {
  fill (colorFondoTexto);
  rect(44, 40, anchoDeTexto, altoDeTexto);
  String[] lineas = split(relato[oracion], '\n');
  textAlign(CENTER);
  fill (colorRelato);
  float nuevaLinea = textAscent() + textDescent();
  float nuevoY = centroY - (nuevaLinea * lineas.length / 2); // Ajustar la posición vertical del texto
  for (String linea : lineas) {
    text(linea, centroX, nuevoY);
    nuevoY += nuevaLinea;
  }
}

void mouseClicked() {
  pantalla = (pantalla + 1) % cantidad;
}
