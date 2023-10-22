class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x
    this.y = height-height/3
    this.ancho = ancho
    this.alto = alto
    this.texto = texto
  }

  dibujar() {
    noStroke()
    if (mouseX > this.x - this.ancho / 2 && mouseX < this.x + this.ancho / 2 && mouseY > this.y - this.alto / 2 && mouseY < this.y + this.alto / 2) {
      stroke("#c0c399")
      strokeWeight(2)
      fill("#ed9d96")
    } else {
      fill("#b3758b")
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto, 10)
    noStroke()
    fill(255)
    textSize(20)
    textAlign(CENTER, CENTER);
    text(this.texto, this.x, this.y)
  }

  clic() {
    return mouseX > this.x - this.ancho / 2 && mouseX < this.x + this.ancho / 2 && mouseY > this.y - this.alto / 2 && mouseY < this.y + this.alto / 2
   
  }
}
