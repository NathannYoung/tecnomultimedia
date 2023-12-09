class Juego {
  constructor() {
    this.estado = "Juego";
    this.personaje = new Personaje(width / 2, 150, 100);
    this.enemigos = [];
    this.cantidadDeEnemigos = 20;
    this.fondoMovimiento = true;
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width / 2, width), random(height + 50, height + 100), random(20, 50), this);
    }
    this.fondoY = 0;
    this.fondo = loadImage("assets/imagenes/fondo.jpg");
    this.vidas = 10;
    this.metaInicial = -1000;
    this.personajeCayendo = false;
  }

  disminuirEnemigosYMeta() {
    if (this.metaInicial >= 0) {
      this.cantidadDeEnemigos--;
      this.fondoMovimiento = false;
      this.personajeCayendo = true;
    }
  }

  actualizar() {
    if (this.estado !== "Juego") {
      return;
    }

    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover();
      if (!this.enemigos[i].colision && dist(this.personaje.x, this.personaje.y, this.enemigos[i].x, this.enemigos[i].y) < this.personaje.tam / 2 + this.enemigos[i].tam / 2) {
        this.vidas--;
        this.enemigos[i].colision = true;
        this.enemigos[i].desaparecer();
        this.personaje.explotar();
      }
    }

    if (this.vidas <= 0) {
      this.estado = "Perdiste";
    }

    this.disminuirEnemigosYMeta();

    if (this.cantidadDeEnemigos <= 19) {
      this.fondoMovimiento = false;
      if (this.personaje.y <= height - this.personaje.tam * 1.5) {
        this.personaje.y += 20;
        this.personajeCayendo = true;
      } else {
        if (this.personajeCayendo) {
          this.estado = "Ganaste";
          this.personajeCayendo = false;
        }
      }
    }
  }

  reiniciar() {
    this.estado = "Juego";
    this.personaje = new Personaje(width / 2, 150, 100);
    this.enemigos = [];
    this.cantidadDeEnemigos = 20;
    this.fondoMovimiento = true;

    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width / 2, width), random(height + 50, height + 100), random(20, 50), this);
    }

    this.fondoY = 0;
    this.fondo = loadImage("assets/imagenes/fondo.jpg");
    this.vidas = 5;
    this.metaInicial = -1000;
    this.personajeCayendo = false;
  }

  iniciar() {
    image(this.fondo, 0, this.fondoY, width, 5500);
   console.log("Antes - metaInicial:", this.metaInicial, "fondoY:", this.fondoY);
   if (this.estado == "Juego") {
      // Lógica para ajustar el movimiento del fondo según metaInicial
      if (this.fondoMovimiento) {
        if (this.metaInicial <= -750) {
          this.fondoY -= 7;
        } else if (this.metaInicial <= -500) {
          this.fondoY -= 9;
        } else if (this.metaInicial <= -250) {
          this.fondoY -= 11;
        } else {
        
        this.fondoY -= 13;
      }
      }

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar();
      }

      fill(72, 61, 139);
      rectMode(CORNER);
      rect(0, 0, windowWidth, 55);
      fill(255);
      textSize(30);
      textAlign(LEFT);
      text(`Vidas: ${this.vidas}`, 25, 30);
      textAlign(RIGHT);
      text(`Meta: ${this.metaInicial}`, width - 50, 30);
      this.actualizar();
      this.personaje.actualizar();
      this.personaje.dibujar();
    }
  }

  keyPressed() {
    this.personaje.keyPressed();
  }

  keyReleased() {
    this.personaje.keyReleased();
  }
}
