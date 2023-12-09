

class Boton {
  constructor(x, y, texto) {
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.ancho = 150;
    this.alto = 30;
  }

  dibujar() {
    let colorBotonInactivo = color(205, 0, 255, 120);
    let colorBotonActivo = color(205, 0, 255, 255);

    fill(0);
    stroke(255);
    let colorBoton = this.clicEnBoton() ? colorBotonActivo : colorBotonInactivo;
    
    fill(colorBoton);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto);

    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x, this.y);
  }

  clicEnBoton() {
    return mouseX > this.x - this.ancho / 2 && mouseX < this.x + this.ancho / 2 && mouseY > this.y - this.alto / 2 && mouseY < this.y + this.alto / 2;
  }
}

class BotonInicio extends Boton {
  constructor(x, y, texto) {
    super(x, y, texto);
  }
}

class BotonReinicio extends Boton {
  constructor(x, y, texto) {
    super(x, y, texto);
  }
}

class BotonJuegoComenzar extends Boton {
  constructor(x, y, texto) {
    super(x, y, texto);
  }
}
