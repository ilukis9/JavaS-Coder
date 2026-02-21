// Condicionales

let booleano = true;

if (booleano) {
  console.log("Vamos bien");
}

// Operadores

let edad = 25;

if (edad == 23) {
  console.log("Es verdadero");
}

if (edad === 23) {
  //Esto verifica que sea igual y Number
  console.log("Es verdadero");
}

if (edad >= 18) {
  console.log("Sos mayor de edad");
}

//Varias condiciones

// AND ( && )

if (edad >= 30 && edad <= 50) {
  console.log("Podes pasar cumplis los requisitos");
}

// OR ( || )

let vip = true;

if (edad >= 30 || vip == true) {
  console.log("Podes pasar");
}

// Condiciones anidadas

if (edad >= 30 && edad <= 50) {
  console.log("Podes pasar cumplis los requisitos");
} else {
  console.log("No podes pasar");
}

if (edad >= 30 && edad <= 50) {
  console.log("Boliche 30 a 50");
} else if (edad >= 18 && edad < 30) {
  console.log("Boliche menores");
} else if (edad > 50) {
  console.log("Sos mayor");
} else {
  console.log("No podes pasar");
}

// Esto compara el Let y si concuerda con un CASE lo da como true por lo que lo muestra en el Log

let nombre = "Fran";

switch (nombre) {
  case "Lucas":
    console.log("Es Lucas");
    break;
  case "Fran":
    console.log("Es Fran");
    break;

  default:
    console.log("Nose quien sos");
    break;
}

// Ciclos e iteraciones

// for
// i++
// i = i + 1

let vueltas = parseInt(prompt("Cuantas veces queres que repita")); // Con esto hago que el usuario determine cuantas veces quiere hacer algo

for (let i = 1; i <= vueltas; i++) {
  console.log(i);
}

let saltos = parseInt(prompt("De a cuantos"));

for (let i = 0; i <= vueltas; i = i + saltos) {
  console.log(i);
}

// While

let continuar = false;

// while (continuar) {
//   console.log("Hola mundo");
//   continuar = confirm("Queres continuar");
// }

do {
  console.log("Hola mundo");
  continuar = confirm("Queres continuar");
} while (continuar);
