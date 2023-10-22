/*
Alumne: Young, Nathann
 Profesor: Albirosa, Tobías
 COM 5
 TP5
 Link a youtube: https://youtu.be/KnxXTRxXlGg
 */
 let juego

  function setup() {
  createCanvas(windowWidth, windowHeight)
    juego = new Juego()
}

function draw() {
  juego.dibujar()
}

function keyPressed() {
  juego.keyPressed()
}

function keyReleased() {
  juego.keyReleased()
}

function mousePressed() {
  juego.mousePressed()
}
