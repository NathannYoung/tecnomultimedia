void dibujarArcos(int i, int j) {
  float anguloInicioBlanco = inicioCirculoBlanco1 + radians((i + j) * diferenciaCirculo);
  float anguloFinalBlanco = finalCirculoBlanco1 - radians((i + j) * diferenciaCirculo);
  float anguloInicioGris = inicioCirculoGris1 - radians((i + j) * diferenciaCirculo);
  float anguloFinalGris = finalCirculoGris1 + radians((i + j) * diferenciaCirculo);

  if (mouseDentro == true && rotar (j, i) == true) {
    anguloInicioBlanco += radians(mov++);
    anguloFinalBlanco += radians(mov++);
    anguloInicioGris += radians(mov++);
    anguloFinalGris += radians(mov++);
    blancoInicio = lerpColor(blancoInicio, color(random(255), random(255), random(255)), 1);
    grisInicio = lerpColor(grisInicio, color(random(255), random(255), random(255)), 1);
  } else {
    blancoInicio = color (255, 255, 255 );
    grisInicio = color (111, 115, 127);
  }

  noStroke();
  fill(blancoInicio);
  arc(inicioEnX + tamCirculo / 2 + j * tamCirculo, inicioEnY + tamCirculo / 2 + i * tamCirculo, tamCirculo, tamCirculo, anguloInicioBlanco, anguloFinalBlanco, PIE);
  fill(grisInicio);
  arc(inicioEnX + tamCirculo / 2 + j * tamCirculo, inicioEnY + tamCirculo / 2 + i * tamCirculo, tamCirculo, tamCirculo, anguloInicioGris, anguloFinalGris, PIE);
}
