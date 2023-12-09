class Personaje {

  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.colision = false;
    this.imagen = loadImage("assets/imagenes/personaje.png");
    this.imagenColision = loadImage("assets/imagenes/explota.png");
    this.explota = false; 
    this.tiempoExplosion = 0; 
    this.movimientoIzq = false;
    this.movimientoDer = false;
  }

  actualizar() {
    if (this.explota && millis() - this.tiempoExplosion > 500) {
      this.explota = false;
    }

    if (this.movimientoIzq && this.x > 0 + this.tam / 2) {
      this.x -= 5;
    } else if (this.movimientoDer && this.x < width - this.tam / 2) {
      this.x += 5;
    }

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > width) {
      this.x = width;
    }
  }

  dibujar() {
    if (this.explota) {
      image(this.imagenColision, this.x - this.tam, this.y - this.tam, this.tam * 2, this.tam * 2);
    } else {
      fill(255, 0);
      stroke(0, 0);
      circle(this.x, this.y * 2, this.tam);
      image(this.imagen, this.x - this.tam / 2, this.y - this.tam / 4, this.tam, this.tam);
    }
  }

  mover(param1) {
    this.x = this.x + param1;
  }

  keyPressed() {
    if (keyCode === 37) {
      this.movimientoIzq = true;
    } else if (keyCode === 39) {
      this.movimientoDer = true;
    }
  }

  keyReleased() {
    if (keyCode === 37) {
      this.movimientoIzq = false;
    } else if (keyCode === 39) {
      this.movimientoDer = false;
    }
  }

  explotar() {
    this.explota = true;
    this.tiempoExplosion = millis(); 
  }
}

class Enemigo extends Personaje {
  constructor(x, y, tam, juego) {
    super(random(0, width), random(height + 50, height + 750), tam * 2.5);
    this.imagen = loadImage("assets/imagenes/enemigo.png");
    this.juego = juego;
  }

  desaparecer() {
    this.x = width + 100; 
    this.y = height + 100;
  }

  reset() {
    this.x = random(0, width);
    this.y = random(height + 50, height + 750);
    this.juego.disminuirEnemigosYMeta();
  }

 mover() {
    this.y = this.y - 15;
    if (this.y < 0) {
      this.y = height;
      this.reset(); 
      this.juego.metaInicial += 10;
    }
  }
}
