class Personaje {

  constructor(x, y, tam) {

    this.x = x
    this.y = y
    this.tam = tam
    this.colision = false
    this.imagen = loadImage("assets/1.PNG")
    this.movimientoIzq = false
    this.movimientoDer = false
  }

  actualizar() {
    if (this.movimientoIzq && this.x > 0 + this.tam/2) {
      this.x -= 3
    } else if (this.movimientoDer && this.x < width- this.tam/2) {
      this.x += 3
    }
    if (this.x < 0) {
      this.x = 0
    } else if (this.x > width) {
      this.x = width
    }
  }

  dibujar() {
    fill(255, 0)
    stroke(0, 0)
    circle(this.x, this.y*2, this.tam)
    image(this.imagen, this.x - this.tam / 2, this.y - this.tam / 2, this.tam, this.tam)
  }

  mover(param1) {
    this.x = this.x + param1
  }

  keyPressed() {
          if (keyCode === 37) {
      this.movimientoIzq = true
    } else if (keyCode === 39) {
      this.movimientoDer = true
    }
  }
  

  keyReleased() {
    if (keyCode === 37) {
      this.movimientoIzq = false
    } else if (keyCode === 39) {
      this.movimientoDer = false
    }
  }
}

class Enemigo extends Personaje {
  constructor(x, y, tam) {
    super(random(0, width), random(height + 50, height + 750), tam*2.5)
    this.imagen = loadImage("assets/2.PNG")
  }

  mover() {
    this.y = this.y - 3
    if (this.y < 0) {
      this.y = height
      this.cambiarPosicionX()      
      juego.metaInicial += 5
    }
  }

  cambiarPosicionX() {
    this.x = random(0, width)
  }
}
