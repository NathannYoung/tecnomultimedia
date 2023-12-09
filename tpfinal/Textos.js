class RelatoManager {
  constructor() {
    this.colorFondoTexto = color(255);
    this.colorRelato = color(205, 0, 255);
    this.calcularPosiciones();
    this.relato = ["\n \n \n \n \n \n \n \n \n \n \n Una adaptación de Peter Pan y Wendy \ndel autor James Matthew Barrie. (1911) \n \nAdaptación: Paula Mauregui \n Nathann Young.  \n \nTrabajo práctico realizado en el marco \nde la Facultad de Artes de la U.N.L.P. \npara la materia Tecnología Multimedial I."
      , "\n \n \n \n \n \n \n \n \n \n \n Pan es une niñe muy particular, aventurere, valiente y sobre \ntodo muy divertide. Vive junto a otres niñes que se hacen \nllamar Les niñes perdides en El País de Nunca Jamás, \nun lugar mágico oculto en el cielo, donde les niñes nunca \ncrecen y donde los sueños y las fantasías se hacen realidad. \nPan llegada la noche suele viajar a la ciudad de Londres con \nsu mejor amiga Campanita, una pequeña hada que le \nacompaña en todas sus aventuras, para escuchar a \nescondidas las historias que una niña llamada Wendy le \ncuenta antes de irse a dormir a sus dos hermanes, John y \nMichael desde fuera de la casa escondides tras las cortinas."
      , "\n \n \n \n \n \n \n \n \n \n \n Una noche de luna llena Pan se encontraba hipnotizade \npor la historia que Wendy estaba contando y sin darse \ncuenta, su sombra fue descubierta por ella. Luego de \npresentarse y a modo de disculpa Pan ofreció a ella y sus \nhermanes una visita a El País de Nunca Jamás. Wendy le \ninformo que si bien le encantaría, ella y sus hermanes no \npodían volar como elle y Campanita. Ante esta situación \nCampanita exclamó que solo se necesita un poco de Fe,  \nConfianza y emmm… ¡polvo de hadas! y prosiguió a \nrociarles con su varita mágica. Wendy junto a sus hermanes \nfinalmente comenzaron a flotar por toda la habitación."
      , "\n \n \n \n \n \n \n \n \n \n \n Luego de sobrevolar la ciudad de Londres y maravillades \npor la vista, Pan indica a todes el rumbo para ir a su país. \nWendy, Jhon y Michael le siguen por el cielo, entusiasmades \ny ansioses. Durante el viaje que solo toma unos minutos, \nPan les relataba algunas de sus más asombrosas aventuras \ny aprovecho a advertirles de la presencia de su temible rival \nEl Capitán Garfio, un pirata adulte que también habitaba en \nsu pais y que captura a tode aquelle que no se le quiera unir. \nLuego de la advertencia dijo que no temiesen porque él y \nCampanita junto a Gemelo I, Gemelo II, Zorrillo, Conejo, \nOsezno y Mofeta les protegerían del peligro."
      , "\n \n \n \n \n \n \n \n \n \n \n Al llegar todes se presentaron y prepararon un festín. \nDecoraron el lugar con guirnaldas, banderines y globos \nmientras conversaban sobre sus vidas y sus aventuras, \nbailaron alrededor del fuego hasta el cansancio y comieron \nplatos exquisitos, dulces, tortas, incluso helado, pero cuando \nmenos lo esperaban y estaban desprevenides el Capitán y \nsus secuaces aparecieron entre las sombras para arruinar la \nfiesta y capturarles. Pan intentó mantener su promesa, pero \nles niñes perdides, Michael y Jhon fueron apresades y \nencerrades en los calabozos del barco. Pan junto a Wendy \ny Campanita intentaron seguirlo pero este zarpó por el cielo."
      , "\n \n \n \n \n \n \n \n \n \n \n Deslizate con las flechas de izquierda y derecha para \nlograr que Pan esquive las bombas que Garfio le lanza \nmientras persigue su barco desde que salen del castillo. \nY asi pueda llegar hasta el para ¡liberar a sus amigues!"
      , ""
      , "\n \n \n \n \n \n \n \n \n \n \n Luego de esquivar las balas y finalmente llegar al barco, \nPan, Campanita y Wendy pusieron un plan en marcha. \nAunque conocían el riesgo y el peligro sus amigues les \nnecesitaban. El plan consistía de tres partes, primero \n volar entre las nubes y esquivar todas las balas de cañon \npara acercarse lo suficiente al barco para, segundo, \ndejar a Wendy en un extremo del barco y que esta pudiese \nescabullirse con sumo cuidado hasta los calabozos y así \nliberar a todes y escapar en una balsa y tercero pero no \nmenos importante, que Pan distrajera junto a Campanita al \nCapitán desde el otro lado del barco para que todo funcione."
      , "\n \n \n \n \n \n \n \n \n \n \n Luego de no lograr conseguir esquivar las bolas de cañon, \nWendy y sus hermanes decidieron quedarse allí \npara proteger este mundo mágico de futuras amenazas y en \nhonor a su queride amigue Pan el cual habia muerto. Garfio \nprometio no molestar más ya que aunque no pareciese, \nestimaba mucho a Pan y estaba arrepentide por la tragedia. \n Permanecieron un rato en silencio y despidieron a su amigue \ncon lagrimas en los ojos todes se abrazaron y dijeron \nalgunas palabras  en comnemoracion a este gran ser. \nPan ya no estaba entre elles pero su espiritu permanecería \nvivo en sus corazones y lo recordarían por siempre."
      , "\n \n \n \n \n \n \n \n \n \n \n Fue así como Osezno, Gemelo I, Gemelo II, Wendy, \nMichael, Campanita, Pan, Conejo, Zorrillo, Jhon y Mofeta \npudieron liberarse y volver a su guarida en el bosque. En el \ncamino Wendy se dio cuenta que estaba por amanecer y \nque sus sadres podrían preocuparse si al levantarse ella y \nsus hermanes no estaban en la casa, por lo que decidió \nvolver a Londres una vez que Pan y sus amigues llegarán a \nsu guarida. Pan aunque triste podía entender los motivos y \naccedió a regresarles a Londres, aunque antes decidió que \nel festejo se terminase. Una vez que todes se encontraban a \nsalvo, la fiesta continuó hasta que la luna empezó a caer."
      , "\n \n \n \n \n \n \n \n \n \n \n Luego de un tiempo y ya habiendo asimilado tal tragedia \n Wendy, Michael y Jhon volvieron a Londres a dejar una carta \na sus sadres para despedirse y poder contemplar la ciudad \nantes de partir. Mientras lo hacían, se percataron que había \nmuches niñes en el mundo que no contaban con un hogar o \nuna familia, por lo que se les ocurrió una fantástica idea. \nUna idea tan maravillosa que Pan estaría muy orgullose, \nsi aún siguiese vive, así fue que decidieron implementarla en \nsu honor. Y siempre pensando desde el amor, \ndecidieron que el Pais de Nunca Jamas, NUNCA dejaría \n de crecer y albergaría a tantes niñes como fuese posible."
      , "\n \n \n \n \n \n \n \n \n \n \n Pan voló junto a Campanita, Wendy y sus hermanes de \nnuevo a la ciudad, aunque con algunas lágrimas en los ojos. \nAl darse cuenta de ello, Wendy le dijo que no debía estar \ntriste porque aún podían seguir visitandose. Pan sonrió y \npreguntó si estaba segura de ello. Tanto Wendy como sus \nhermanes le prometieron que así sería, incluso invitaron a \nque tanto él como les otres les visitasen para escuchar las \nhistorias que Wendy contaba por las noches. Al llegar a la \ncasa Pan y Campanita se despidieron de Wendy mientras \nMichael y Jhon dormían exhaustes del viaje. Y cada tanto \nPan y sus amigues viajan a visitar a les hermanes Darling."
      , "\n \n \n \n \n \n \n \n \n \n \n Por lo que cada año, Wendy ahora llamada Lechucita, \nviaja a nuestro mundo en busca de niñes que vivan en \nlas calles ya que merecen algo mejor. Y los invita a habitar \nel País de Nunca Jamás, mientras sus hermanes ahora \nLeón y Ratoncito preparan el lugar para recibirles junto a \notres niñes perdides. La familia crece año tras año y al ser \nla mayor, Lechucita se encarga de contar la historia de Pan a \ntode aquelle que llega al país para no olvidar su valentía. \nMientras Lechucita y algunes niñes perdides protegen la \nisla desde tierra, Garfio junto a otres niñes que se atreven \nafrontar la inclemencia del agua lo hacen desde el vasto mar."];
        
    this.frameContador = 0;
    this.framesEspera = 30;
     }

  calcularPosiciones() {
    this.textoEnX = windowWidth * 0.5;
    this.textoEnY = windowHeight * 0.25;
  }

  calcularTamanos() {
    this.textoSize = min(windowWidth, windowHeight) * 0.03;
    this.rectAncho = min(windowWidth, windowHeight) * 0.5;
    this.rectAlto = min(windowWidth, windowHeight) * 0.5;
  }

  escribirRelato(oracion) {
    noStroke();
    this.calcularPosiciones();
    this.calcularTamanos();
    if (this.frameContador >= this.framesEspera) {
      rectMode(CENTER);
      fill(0, 125);
      rect(this.textoEnX, this.textoEnY * 1.8, this.rectAncho * 2, this.rectAlto);
      fill(255, 255);
      textSize(this.textoSize);
      textAlign(CENTER);
      text(this.relato[oracion], this.textoEnX, this.textoEnY, this.rectAncho * 2, this.rectAlto * 2);
    } else {
      this.frameContador++;
    }
  }

  procesarRelato() {
    for (let i = 0; i < this.relato.length; i++) {
      this.relato[i] = this.relato[i].replace(/\\n/g, '\n');
    }
  }
}
