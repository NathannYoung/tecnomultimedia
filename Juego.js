class Juego {
  constructor() {
    this.estado = "Iniciar"
      this.personaje = new Personaje(width / 2, 150, 100)
      this.enemigos = []
      this.cantidadDeEnemigos = 20
      this.fondoMovimiento = true
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width / 2, width), random(height + 50, height + 100), random(20, 50))
    }
    this.fondoY = 0
      this.fondo = loadImage("assets/0.PNG")
      this.boton1 = new Boton(width / 2, height / 3, 150, 50, "Iniciar")
      this.boton2 = new Boton(width / 2, height / 3, 150, 50, "Comenzar")
      this.boton3 = new Boton(width / 2, height / 3, 150, 50, "Reiniciar")
      this.vidasInicial = 100
      this.metaInicial = -500
      this.personajeCayendo = false
      this.pantallaInicio = loadImage("assets/3.PNG")
      this.pantallaGanaste = loadImage("assets/4.PNG")
      this.pantallaPerdiste = loadImage("assets/5.PNG")
      this.pantallaInstrucciones = loadImage("assets/6.PNG")
  }

  actualizar() {
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
        if (dist(this.personaje.x, this.personaje.y, this.enemigos[i].x, this.enemigos[i].y) < this.personaje.tam / 2 + this.enemigos[i].tam / 2) {
        this.personaje.colision = true
          this.vidasInicial = this.vidasInicial - 1
      }
    }

    if (this.vidasInicial <= 0) {
      this.estado = "Perdiste"
    }

    if (this.metaInicial >= 0) {
      this.cantidadDeEnemigos--
    }

    if (this.cantidadDeEnemigos <= 0) {
      this.fondoMovimiento = false
        if (this.personaje.y <= height - this.personaje.tam * 1.5) {
        this.personaje.y += 3
          this.personajeCayendo = true
      } else {
        if (this.personajeCayendo) {
          this.estado = "Ganaste"
            this.personajeCayendo = false
        }
      }
    }
  }

  reiniciar() {
    this.estado = "Iniciar"
      this.personaje = new Personaje(width / 2, 150, 100)
      this.enemigos = []
      this.cantidadDeEnemigos = 20
      this.fondoMovimiento = true
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width / 2, width), random(height + 50, height + 100), random(20, 50))
    }
    this.fondoY = 0
      this.fondo = loadImage("assets/0.PNG")
      this.boton1 = new Boton(width / 2, height / 3, 150, 50, "Iniciar")
      this.boton2 = new Boton(width / 2, height / 3, 150, 50, "Comenzar")
      this.boton3 = new Boton(width / 2, height / 3, 150, 50, "Reiniciar")
      this.vidasInicial = 100
      this.metaInicial = -500
      this.personajeCayendo = false
  }

  dibujar() {
   
    if (this.estado == "Iniciar") {
      image(this.pantallaInicio, 0, 0, width, height)
      textSize(72)
      text("\nBienvenidx a la aventura\n¿Estas preparadx?", width - width / 3, height / 5)
      textSize(48)
      text("Por: Nathann Young", width - width / 3, height / 2)
      this.boton1.dibujar()
    } else if (this.estado == "Juego") {
      if (this.fondoMovimiento) {
        this.fondoY -= 2.6
      }
      image(this.fondo, 0, this.fondoY, width, 5100)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar()
      }
      fill(72, 61, 139)
      rectMode(CORNER)
      rect(0, 0, windowWidth, 40)
      fill(255)
      textSize(20)
      textAlign(LEFT)
      text(`Vidas: ${this.vidasInicial}%`, 25, 25)
      textAlign(RIGHT)
      text(`Meta: ${this.metaInicial}`, width - 50, 25)
      this.actualizar()
      this.personaje.actualizar()
      this.personaje.dibujar()
    } else if (this.estado == "Instrucciones") {
      image(this.pantallaInstrucciones, 0, 0, width, height)
      textSize(48)
      text("\n \n \n\n\nDeslizate con las flechas de izquierda y derecha para \nlograr que PeterPan esquive las nubes que aparecen \ncomo obstaculos por 500 metros desde el castillo\ny pueda llegar a tierra firme ¡sanx y salvx!", width / 2, height / 5)
      this.boton2.dibujar()
    } else if (this.estado == "Ganaste") {
      image(this.pantallaGanaste, 0, 0, width, height)
      textSize(72)
      text("\n \n \n¡HAS GANADO!\n¡Felicitaciones!", width - width / 3, height / 5)
      this.boton3.dibujar()
    } else if (this.estado == "Perdiste") {
      image(this.pantallaPerdiste, 0, 0, width, height)
      textSize(72)
      text("\n \n \n¡HAS PERDIDO!\nMejor suerte la próxima", width - width / 3, height / 5)
      this.boton3.dibujar()
    }
  }

  mousePressed() {
    if (this.estado == "Iniciar") {
      if (this.boton1.clic()) {
        this.estado = "Instrucciones"
      }
    } else if (this.estado == "Instrucciones") {
      if (this.boton2.clic()) {
        this.estado = "Juego"
      }
    } else if (this.estado == "Ganaste" || this.estado == "Perdiste") {
      if (this.boton3.clic()) {
        this.reiniciar()
      }
    }
  }

  keyPressed() {
    this.personaje.keyPressed()
  }

  keyReleased() {
    this.personaje.keyReleased()
  }
}
