
let app;


function setup() {
  createCanvas(windowWidth, windowHeight);
  app = new App();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  app.actualizarBotones();
  relatoManager.windowResized();
}

function draw() {
  app.dibujar();
}


function mousePressed() {
  app.mousePresionado();
}

function keyPressed() {
  app.keyPressed();
}


function keyReleased() {
  app.keyReleased();
}
