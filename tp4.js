/*
Alumne: Young, Nathann
 Profesor: Albirosa, Tobías
 COM 5
 TP4
 Link a youtube: https://youtu.be/KujZg_q1T88
 */
 
let pantalla = "inicio";
let vidas;
let puntaje;
let circulos = [];
let personajeX;
let personajeY;
let personajeAncho = 100;
let personajeAlto = 20;
let velocidadPersonaje = 5;
let cantidadCirculos = 30;
let botonX;
let botonY;
let botonAncho;
let botonAlto;
let fondo;

function preload() {
  fondo = loadImage('libraries/imagenes/fondoestrellado.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  personajeX = width / 2;
  personajeY = height - personajeAlto * 3;
  botonX = width / 2;
  botonY = height / 3 * 2;
  botonAncho = 200;
  botonAlto = 50;
  iniciarJuego();
}

function draw() {
  for (let x = 0; x < width; x += fondo.width) {
    for (let y = 0; y < height; y += fondo.height) {
      image(fondo, x, y);
    }
  }

  if (pantalla === "inicio") {
    pantallaInicio();
  } else if (pantalla === "instrucciones") {
    pantallaInstrucciones();
  } else if (pantalla === "juego") {
    pantallaJuego();
  } else if (pantalla === "findeljuego") {
    pantallaPuntajeFinal();
  } else if (pantalla === "creditos") {
    pantallaFinal();
  }
}

function pantallaInicio() {
  stroke(255);
  fill(255);
  textSize(84);
  textAlign(CENTER, CENTER);
  text("¡Lejos de aquí!", width / 2, height / 3);
  dibujarBotones(botonX, botonY, botonAncho, botonAlto, "Iniciar");
}

function pantallaInstrucciones() {
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("\n \n \n \n \n \n ¡Bienvenidx a la aventura!\n El mundo se está acabando\n y del cielo cae una\n infinidad de rocas radioactivas\n que se han desprendido\nde un asteroide. Intenta\n esquivarlas con las\nflechas del teclado para\nque no acaben con tu vida.", width / 2, height / 4);
  dibujarBotones(botonX, botonY + botonY/4, botonAncho, botonAlto, "¡¿Listx?!");
}

function pantallaJuego() {
  if (keyIsDown(LEFT_ARROW) && personajeX > 0 ) {
    personajeX -= velocidadPersonaje;
  } else if (keyIsDown(RIGHT_ARROW) && personajeX < width - personajeAncho) {
    personajeX += velocidadPersonaje;
  }

  fill(72, 61, 139);
  rect(personajeX, personajeY, personajeAncho, personajeAlto, 20);
  moverCirculos();

  fill(72, 61, 139);
  rectMode (CORNER);
  rect(0, 0, windowWidth, 50);
  fill(255);
  textSize(20);
  textAlign(LEFT);
text(`Vidas: ${vidas}`, 25, 25);
  textAlign(RIGHT);
text(`Puntaje: ${puntaje}`, width - 50, 25);

  if (vidas <= 0) {
    pantalla = "findeljuego";
  }
}

function pantallaPuntajeFinal() {
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("¡Hasta aquí llegaste!", width / 2, height / 5);
  textSize(82);
text(`Puntaje: ${puntaje}`, width / 2, height / 3);
  dibujarBotones(botonX, botonY, botonAncho, botonAlto, "Creditos");
}

function pantallaFinal() {
  fill(255);
  textSize(56);
  textAlign(CENTER, CENTER);
  text("¡Hasta la proxima!", width / 2, height / 6);
  textSize(36);
  text("¡Un placer haberte conocido!", width / 2, height / 3);
  text("Nathann Young", width / 2, height / 2);
  dibujarBotones(botonX, botonY + botonY/4, botonAncho, botonAlto, "Reiniciar");
}

function dibujarBotones(botonX, botonY, botonAncho, botonAlto, texto) {
  noStroke();
  if (mouseX > botonX - botonAncho / 2 && mouseX < botonX + botonAncho / 2 && mouseY > botonY - botonAlto / 2 && mouseY < botonY + botonAlto / 2) {
    stroke(0, 255, 255);
    fill(0, 50, 255);
  } else {
    fill(0, 0, 128);
  }
  rectMode(CENTER);
  rect(botonX, botonY, botonAncho, botonAlto, 10);
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, botonX, botonY);
}

function keyPressed() {
  if (pantalla === "juego") {
    if (keyCode === LEFT_ARROW && personajeX > 0 + personajeAncho/2) {
      personajeX -= velocidadPersonaje;
    } else if (keyCode === RIGHT_ARROW && personajeX < width - personajeAncho/2) {
      personajeX += velocidadPersonaje;
    }
  }
}

function mousePressed() {
  if (pantalla === "inicio" && mouseX > botonX - botonAncho / 2 && mouseX < botonX + botonAncho / 2 && mouseY > botonY - botonAlto / 2 && mouseY < botonY + botonAlto / 2) {
    pantalla = "instrucciones";
  }
  if (pantalla === "instrucciones" && mouseX > botonX - botonAncho / 2 && mouseX < botonX + botonAncho / 2 &&
    mouseY > botonY + botonY / 4 - botonAlto / 2 && mouseY < botonY + botonY / 4 + botonAlto / 2) {
    pantalla = "juego";
    iniciarJuego();
  }
  if (pantalla === "findeljuego" && mouseX > botonX - botonAncho / 2 && mouseX < botonX + botonAncho / 2 &&
    mouseY > botonY - botonAlto / 2 && mouseY < botonY + botonAlto / 2) {
    pantalla = "creditos";
  }
  if (pantalla === "creditos" && mouseX > botonX - botonAncho / 2 && mouseX < botonX + botonAncho / 2 &&
    mouseY > botonY + botonY / 4 - botonAlto / 2 && mouseY < botonY + botonY / 4 + botonAlto / 2) {
    pantalla = "inicio";
    iniciarJuego();
  }
}

function crearCirculosAleatorios(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    let circuloX = random(width);
    let circuloY = random(-400, -100);
    let circuloColor = color(random(150, 255), random(200), random(200, 255));
    let circuloVelocidad = random(2, 5);
    circulos.push([circuloX, circuloY, circuloColor, circuloVelocidad]);
  }
}

function moverCirculos() {
  for (let i = 0; i < circulos.length; i++) {
    let circuloX = circulos[i][0];
    let circuloY = circulos[i][1];
    let circuloColor = circulos[i][2];
    let circuloVelocidad = circulos[i][3];
    fill(circuloColor);
    ellipse(circuloX, circuloY, 30);
    circuloY += circuloVelocidad;
    if (circuloY + 15 > personajeY && circuloY - 15 < personajeY + personajeAlto &&
      circuloX + 15 > personajeX && circuloX - 15 < personajeX + personajeAncho) {
      circuloY = random(-400, -100);
      vidas--;
      personajeAncho += 20;
    } else if (circuloY > height) {
      circuloY = random(-400, -100);
      circuloX = random(width);
      puntaje += 5;
    }
    circulos[i][0] = circuloX;
    circulos[i][1] = circuloY;
  }
}

function iniciarJuego() {
  vidas = 5;
  puntaje = 0;
  personajeAncho = 100;
  circulos = [];
  crearCirculosAleatorios(cantidadCirculos);
}
