void escribirRelato(int oracion) {
  noStroke();
  if (conteo < 150) {
    fill(colorFondoTexto);
    rect(44, 40, anchoDeRectTexto, altoDeRectTexto);
  } else if (conteo >= 150 && conteo <= 300) {
    float alpha = map(conteo, 150, 300, 0, 150);
    fill(0, alpha);
    rect(44, 40, anchoDeRectTexto, altoDeRectTexto);
  } else if (conteo > 300) {
    fill(0, 150);
    rect(44, 40, anchoDeRectTexto, altoDeRectTexto);
  }
  if (conteo < 150) {
    fill(colorRelato);
  } else if (conteo >= 150 && conteo <= 300) {
    float alpha = map(conteo, 150, 300, 0, 255);
    fill(205, 0, 255, alpha);
  } else if (conteo > 300) {
    fill(205, 0, 255, 255);
  }
  textAlign(CENTER);
  text(relato[oracion], textoEnX, textoEnY);
}
