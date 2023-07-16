void procesarRelato() {
  for (int i = 0; i < relato.length; i++) {
    relato[i] = relato[i].replaceAll("\\\\n", "\n");
  }
}
