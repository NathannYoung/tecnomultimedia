color retornaColor(float x, float y, float tam) {
  if (dist(mouseX, mouseY, x, y) < tam / 2) {
    return colorBotonActivo;
  } else {
    return colorBotonInactivo;
  }
}
