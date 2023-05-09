PImage imag1, imag2, imag3, imag4;
PFont miFuente;
int pantalla = 0, contador = 0;
int tamPantallaX = 640, tamPantallaY = 480;
color colorPantalla = color (0), colorBordeBoton = color (155), colorBordeBotonSiempre = color (155), colorBoton = color (205), colorBotonSiempre = color (205), colorTextoBoton = color(155), colorTextoBotonSiempre = color(155), colorTexto = color(255);
color colorBordeBotonActivo = color (255, 255, 0), colorBotonActivo = color (0, 255, 0), colorTextoBotonActivo = color (255, 255, 0), colorBotonInactivo = color (255, 0, 0);
int tamBoton1 = 60, tamBoton2 = 30, tamBordeBoton = 3, puntas = 50;
int botonEnX1 = 290, botonEnY = 430;
int posTextoEnX1 = 320, posTextoEnY1 = 445;
int tamTexto = 54, tamTextoBoton = 12, tamTextoDiapo = 20;
float aparecer = 0;
float subir = tamPantallaY, bajar = 0, avanzar = -140;
boolean botonOk  = false;
boolean mouseDentro = false;


void setup() {
  size (640, 480);
  background (colorPantalla);
  textSize (42);
  imag1 = loadImage ("imag1.jpg");
  imag2 = loadImage ("imag2.jpg");
  imag3 = loadImage ("imag3.jpg");
  imag4 = loadImage ("imag4.jpg");
  miFuente = createFont ("fuente/mifuente.ttf", 1);
}

void draw() {
  textFont(miFuente);
  switch (pantalla) {

  case 0:
    image (imag1, 0, 0, width, height);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Iniciar", posTextoEnX1, posTextoEnY1);

    break;

  case 1:
    contador++;
    image (imag1, 0, 0, width, height);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Avanzar", posTextoEnX1, posTextoEnY1);
    println("Caso 1 ", contador);
    if (contador > 0 && contador <= 150) {
      aparecer = aparecer +=2.5;
    } else {
      aparecer = aparecer -=2.5;
    }
    textSize (tamTexto);
    fill(colorTexto, aparecer);
    text ("TRABAJO PRÁCTICO N°1 \nLa sierra de arco \na través del tiempo.", tamPantallaX/2, tamPantallaY/2);
    if (contador >= 380) {
      contador = 0;
      pantalla = 2;
    }
    break;

  case 2:
    contador++;
    image (imag2, 0, 0, width, height);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Avanzar", posTextoEnX1, posTextoEnY1);
    println("Caso 2 ", contador);
    textSize (tamTextoDiapo);
    textAlign (CENTER, TOP);
    if (contador > 0 && contador <= 700) {
      aparecer = aparecer +=1.6;
    } else {
      aparecer = aparecer -=2.5;
    }
    fill(255, aparecer);
    subir = subir - 0.9;
    if (subir <= 80) {
      subir = 80;
    }
    text ("En la antigüedad la sierra de arco era una herramienta\nque permitia serrar madera, mediante una hoja dentada\nsuspendida entre dos asas de madera y separadas por\nuna barra longitudinal del mismo material que formaban \nuna H. La hoja se mantenia en tensión con un cordón\ntrenzado que corria en paralelo a la hoja entre las\ndos asas pero en el lado opuesto. En la actualidad las sierras\nde arco manuales tienen tambien una hoja dentada pero \nesta misma se encuentra aferrada a un trozo de metal\ncon forma de arco y pueden utilizarse para serrar,\ncortar o calar diversos materiales.", tamPantallaX/2, subir);
    if (contador >= 1100) {
      contador = 0;
      pantalla = 3;
    }
    break;

  case 3:
    contador++;
    image (imag3, 0, 0, width, height);
    println("Caso 3 ", contador);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Avanzar", posTextoEnX1, posTextoEnY1);
    textSize (tamTextoDiapo);
    textAlign (CENTER, BOTTOM);
    if (contador > 0 && contador <= 580) {
      aparecer = aparecer +=1.4;
    } else {
      aparecer = aparecer -=2.5;
    }
    fill(255, aparecer);
    bajar = bajar + 0.9;
    if (bajar >= 400) {
      bajar = 400;
    }
    text ("Existen varios tipos de hojas y su elección depende\ndel material que deba cortarse.\n\n\n\nEl motor permite que la hoja realice un movimiento\noscilante de arriba hacia abajo posibilitando el corte.\n\n\n\nLas sierras de calar modernas y electricas estan\nfabricadas con un motor eléctrico para su funcionamiento.", tamPantallaX/2, bajar);
    if (contador >= 900) {
      contador = 0;
      pantalla = 4;
    }

    break;


  case 4:
    contador++;
    image (imag4, 0, 0, width, height);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Avanzar", posTextoEnX1, posTextoEnY1);
    println("Caso 4 ", contador);
    textAlign (CENTER, CENTER);
    textSize (tamTextoDiapo+5);
    if (contador > 0 && contador <= 500) {
      aparecer = aparecer +=1.4;
    } else {
      aparecer = aparecer -=2.5;
    }
    fill(255, aparecer);
    avanzar = avanzar + 1.9;
    if (avanzar >= tamPantallaX/2) {
      avanzar = tamPantallaX/2;
    }
    text ("Para los casos de uso profesional\ncomo carpinteria o para construcción existen\nlas llamadas sierras de mesa. Se utilizan\npara cortes rectos y limpios en madera,\nplastico o incluso metal. Y son\ncomúnes en talleres o fábricas.", avanzar, tamPantallaY/2);
    if (contador >= 900) {
      contador = 0;
      pantalla = 5;
    }
    break;

  case 5:
    contador++;
    println("Caso 5 ", contador);

    noStroke ();
    fill(0);
    rect (0, 0, tamPantallaX, tamPantallaY);
    stroke (colorBordeBoton);
    strokeWeight (tamBordeBoton);
    fill (colorBoton);
    rect (botonEnX1, botonEnY, tamBoton1, tamBoton2, puntas);
    fill (colorTextoBoton);
    textSize (tamTextoBoton);
    textAlign (CENTER, CENTER);
    text ("Reiniciar", posTextoEnX1, posTextoEnY1);
    if (contador >= 500) {
      contador = 0;
      pantalla = 5;
    }
    break;
  }
}
void mouseMoved() {
  if (mouseX > botonEnX1 && mouseX < botonEnX1 + tamBoton1 && mouseY > botonEnY && mouseY < botonEnY + tamBoton2) {
    mouseDentro = true;
    colorBoton = colorBotonActivo;
    colorBordeBoton = colorBordeBotonActivo;
    colorTextoBoton = colorTextoBotonActivo;
    botonOk = true;
  } else {
    mouseDentro = false;
    colorBoton = colorBotonSiempre;
    colorBordeBoton = colorBordeBotonSiempre;
    colorTextoBoton = colorTextoBotonSiempre;
    botonOk = false;
  }
}

void mouseExited() {
  mouseDentro = false;
  colorBoton = colorBotonInactivo;
  colorBordeBoton = colorBordeBotonActivo;
  colorTextoBoton = colorTextoBotonActivo;
}

void mouseEntered() {
  if (!mouseDentro) {
    colorBoton = colorBotonSiempre;
    colorBordeBoton = colorBordeBotonSiempre;
    colorTextoBoton = colorTextoBotonSiempre;
  }
}

void mousePressed() {
  if (mouseX > botonEnX1 && mouseX < botonEnX1 + tamBoton1 && mouseY > botonEnY && mouseY < botonEnY + tamBoton2) {
    if (pantalla == 5) {
      contador = 0;
      aparecer = 0;
      pantalla = 1;
      subir = tamPantallaY;
      bajar = 0;
      avanzar = -140;
    } else {
      contador = 0;
      aparecer = 0;
      subir = tamPantallaY;
      bajar = 0;
      avanzar = -140;
      pantalla ++;
    }
  }
}
