// Funciones

function saludo() {
  console.log("Hola Mundo");
}
// Y lo llamo mencionando el Name
saludo();

// Ahora con parametros

function saluda(nombre, edad) {
  console.log("Hola " + nombre + " tenes " + edad + " años!");
}

let nombreUser = prompt("Ingresa nombre");
let edadUser = prompt("Ingrese edad");

saluda(nombreUser, edadUser);

// Return

function saludar(nombre, edad) {
  let saludo = "Hola " + nombre + " tenes " + edad + " años!";
  return saludo;
}

let nombre = prompt("Ingresa nombre");
let edad = prompt("Ingrese edad");

let saludoArmado = saludar(nombre, edad);

alert(saludoArmado);
console.log(saludoArmado);

// Scope

function saludar1(nombre, edad) {
  let saludo1 = "Hola " + nombre + " tenes " + edad + " años!"; // Acá es una varieble local
  return saludo1;
}

let saludo1 = saludar1("Mati", 27); //! Saludo es una variable Local
console.log(saludo1);

// Funciones anonimas

const saludar = function () {
  console.log("Hola mundo");
};

saludar();

// Funciones flecha   (=>)
// Se puede usar sin poner el function, sin return y sin {}

const saludar = () => "hola mundo";

let mensaje = saludar();
console.log(mensaje);

const saludar5 = (nombre, edad) => "Hola " + nombre + " tenes " + edad + " años!";

let mensaje4 = saludar5("Caro", 28);
console.log(mensaje4);

// se puede hacer sumas, restas y operaciones de forma mas facil

const sumar = (num1, num2) => num1 + num2;

console.log(sumar(10, 9));
