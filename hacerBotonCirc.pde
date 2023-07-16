void hacerBotonCirc(String accion, float x, float y, float tam) {
  push();
  color colorBotonUso = retornaColor(x, y, tam);
  fill(colorBotonUso);
  circle(x, y, tam);
  fill(0);
  if (accion == "retroceder") {
    text("←", x, y+tam/6);
    if (pantalla < 8 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = pantalla + atras;
      activado = false;
      conteo = 0;
    } else if (pantalla > 8 && pantalla != 14 && pantalla != 9 && pantalla != 15 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = pantalla + atras*2;
      activado = false;
      conteo = 0;
    } else if (pantalla == 8 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 3;
      activado = false;
      conteo = 0;
    } else if (pantalla == 14 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 8;
      activado = false;
      conteo = 0;
    } else if (pantalla == 9 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 3;
      activado = false;
      conteo = 0;
    } else if (pantalla == 15 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 9;
      activado = false;
      conteo = 0;
    }
  } else if (accion == "avanzar") {
    text("→", x, y+tam/6);
    if (pantalla < 8 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = pantalla + siguiente;
      activado = false;
      conteo = 0;
    } else if (pantalla >= 8 && pantalla != 12 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = pantalla + siguiente*2;
      activado = false;
      conteo = 0;
    } else if (pantalla == 12 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 7;
      activado = false;
      conteo = 0;
    }
  } else if (accion == "opcionUno") {
    text("↑", x, y+tam/6);
    if (pantalla == 3 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 8;
      activado = false;
      conteo = 0;
    } else if (pantalla == 8 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 14;
      activado = false;
      conteo = 0;
    }
  } else if (accion == "opcionDos") {
    text("↓", x, y+tam/6);
    if (pantalla == 3 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 9;
      activado = false;
      conteo = 0;
    } else if (pantalla == 9 && mousePressed && activado && dist(mouseX, mouseY, x, y) < tam / 2) {
      pantalla = 15;
      activado = false;
      conteo = 0;
    }
  }
  pop();
}
