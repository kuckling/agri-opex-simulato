// ============================================================
// Configuración compartida de la red EBC Kuckling
// Usada por validacion.html (y disponible para index.html).
// ============================================================
var EBC_CONFIG = {
  estacion: {
    id: "gualan",
    nombre: "Gualán, Zacapa",
    lat: 15.11,
    lon: -89.36,
    elev_m: 155,                 // altitud del sitio donde está instalada la EBC
    // La presión que sube la estación está reducida a nivel del mar con elev_m.
    // validacion.html la convierte a presión de superficie antes de compararla con NASA POWER (PS).
    presionNivelMar: true,
    // Método con el que se invierte la reducción (debe coincidir con el de tu firmware):
    //   "isa"          -> P_sup = P_snm * (1 - h/44330)^5.255   (el habitual en librerías de BME280)
    //   "hipsometrica" -> usa la temperatura del aire (gradiente 6.5 °C/km)
    // El firmware EBC v2.0.0 reduce con la fórmula hipsométrica (usa la temperatura del sensor),
    // así que aquí corresponde "hipsometrica" (diferencia con la inversa exacta: ~0.06 hPa).
    reduccionPresion: "hipsometrica",
    thingspeak: {
      channel: 3225843,
      readKey: "",               // solo si el canal es privado
      campos: { temp: "field1", humedad: "field2", presion: "field3" }
    }
  },
  ventanaDiasDefault: 30,        // opciones en la página: 30, 60, 90, 180
  refrescoEstacionMin: 10,       // ajustar al intervalo de subida de la estación
  refrescoPowerHoras: 6,         // NASA POWER publica datos diarios
  minHorasPorDia: 18,            // horas con dato (de 24) para aceptar un día
  lecturaViejaMin: 120,          // minutos sin lecturas para marcar la estación como atrasada
  utcOffsetHoras: -6             // Guatemala no usa horario de verano
};
