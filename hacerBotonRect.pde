void hacerBotonRect(String accion, float x, float y, float tam) {
  push();

  if (mouseX > x - tam && mouseX < x + tam && mouseY > y - tam && mouseY < y) {
    fill(colorBotonActivo);
  } else {
    fill(colorBotonInactivo);
  }
  rectMode(CENTER);
  textSize(12);
  textLeading(10);
  textAlign(CENTER);
  if (accion == "Iniciar") {
    rect(x, y-tam/2, tam*2, tam, tam);
    fill(0);
    text("Iniciar", x+tam/12, y-tam/3);
    if (mousePressed && activado) {
      if (mouseX > x - tam && mouseX < x + tam && mouseY > y - tam && mouseY < y) {
        pantalla = 1;
        activado = false;
        conteo = 0;
      }
    }
  } else if (accion == "QHPS") {
    rect(x, y-tam/2, tam*3, tam, tam);
    fill(0);
    text("¿Que habria\npasado si?", x+tam/12, y-tam/2);
    if (mousePressed && activado) {
      if (mouseX > x - tam && mouseX < x + tam && mouseY > y - tam && mouseY < y) {
        pantalla = 3;
        activado = false;
        conteo = 0;
      }
    }
  } else if (accion == "Reiniciar") {
    rect(x, y-tam/2, tam*3, tam, tam);
    fill(0);
    text("Reiniciar", x+tam/12, y-tam/3);
    if (mousePressed && activado) {
      if (mouseX > x - tam && mouseX < x + tam && mouseY > y - tam && mouseY < y) {
        pantalla = 0;
        activado = false;
        conteo = 0;
      }
    }
  }
  pop();
}
