const preguntas = [
  {
    texto: "¿Cuáles son los sistemas de control de vuelo primarios, esenciales para el control del avión?",
    opciones: ["Elevador - Alerón - Timón de Dirección", "Elevador - Flaps - Aletas Compensadoras", "Timón - Flaps - Elevador"],
    correcta: 0,
  },
  {
    texto:
      "¿Cuántas horas de vuelo como piloto al mando debe completar un Piloto Privado de Avión, a partir que obtuvo su licencia, para estar facultado para transportar pasajeros?",
    opciones: ["15 Hs.", "20 Hs.", "25 Hs."],
    correcta: 2,
  },
  {
    texto: "¿Pasados cuantos días sin actividad de vuelo, un Piloto Privado de Avión, debe ser readaptado por un Instructor?",
    opciones: ["30", "45", "60"],
    correcta: 0,
  },
  {
    texto:
      "(Figura 29, ilustración 1) El receptor VOR tiene la indicación que se muestra. ¿Cuál es la posición relativa del avión respecto a la estación transmisora?",
    opciones: ["Norte.", "Este.", "Sur."],
    correcta: 0,
  },
  {
    texto: "En el Ciclo OTTO la combustión se realiza a:",
    opciones: ["volumen constante.", "presión constante.", "volumen y presión constantes."],
    correcta: 0,
  },
  {
    texto: "Una manera de detectar una falla en el corte de magnetos es:",
    opciones: [
      "poner en ralentí el motor y cortar momentáneamente la ignición.",
      "llevar el motor a máxima potencia, mientras se aplican los frenos, y apagar momentáneamente la ignición.",
      "hacer funcionar un magneto, empobrecer la mezcla y obtener un aumento en la presión del múltiple de admisión del motor.",
    ],
    correcta: 2,
  },
  {
    texto: "Si se desconecta el cable a masa ubicado entre el magneto y el interruptor de la ignición, el motor:",
    opciones: [
      "no operará con un solo magneto.",
      "no se puede poner en marcha con el interruptor en la posición BOTH.",
      "podría ponerse en marcha accidentalmente si la hélice es movida habiendo combustible en el cilindro.",
    ],
    correcta: 2,
  },
  {
    texto: "¿Qué indica el número de octanos de un combustible?",
    opciones: ["calidad antidetonante.", "calidad de la mezcla aire combustible.", "ninguna de las respuestas anteriores es correcta."],
    correcta: 0,
  },
  {
    texto: "Es más probable que se empasten las bujías si:",
    opciones: [
      "Si la aeronave gana altitud sin un ajuste de mezcla.",
      "la aeronave desciende de altitud sin un ajuste de mezcla.",
      "se mueve el acelerador de la aeronave de manera abrupta.",
    ],
    correcta: 0,
  },
  {
    texto: "El piloto controla la relación aire/combustible con:",
    opciones: ["el acelerador.", "la presión del múltiple (manifold).", "el control de la mezcla."],
    correcta: 2,
  },
];
const incorrectas = [];
let puntaje = 0;

const comenzar = confirm("Queres comenzar?");

if (comenzar) {
  // Replico en que pregunta estoy y sumo para pasar a la siguiente
  for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i];

    console.log("Pregunta " + (i + 1) + ": " + pregunta.texto);
    //Busco y muestro las opciones
    for (let j = 0; j < pregunta.opciones.length; j++) {
      console.log(j + ": " + pregunta.opciones[j]);
    }

    const respuestaUsuario = Number(
      prompt("Pregunta " + (i + 1) + ": " + pregunta.texto + "\n \n Respuestas en consola ---------->\n \n Ingresá el número de la opción correcta:"),
    );
    // En base a la respuesta comparo si es la opción que es correcta, si no es correcta la sumo a incorrectas para revisar al final
    if (respuestaUsuario === pregunta.correcta) {
      puntaje++;
      console.log("Correcto ✅");
    } else {
      console.log("Incorrecto ❌");
      incorrectas.push(pregunta);
    }

    console.log("------------------");
  }
}

const nota = (puntaje / preguntas.length) * 10;

alert("Respuestas correctas: " + puntaje + " de " + preguntas.length + "\nNota final: " + nota);

console.log("Respuestas correctas: " + puntaje + " de " + preguntas.length);
console.log("Nota final: " + nota);
console.log("------------------");

if (nota < 10) {
  console.log("Revisar estas preguntas:");

  for (let x = 0; x < incorrectas.length; x++) {
    console.log("- " + incorrectas[x].texto);
  }
} else {
  console.log("Felicidades no tuviste ni un error!");
}
