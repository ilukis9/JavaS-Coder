// Array empieza desde 0 en adelante

let edades = [10, 25, 30, 18, 60]; //Array de mnumeros
let nombres = ["Camila", "Lucas", "Gimena", "Brian", "Carola"]; //Array de strings
let soleteros = [true, false, true, false, false]; //Array de booleadnos
let mixto = [true, 40, "hola", false, 203];

// Para llamarlo tengo que poner el nombre del array con el ID:#
console.log(nombres[3]);

// PUedo guardarlo o acceder tambien haciendo esto

let nombresEncontrados = nombres[0];
console.log(nombresEncontrados);

console.log(nombres);

// Recorrer Array

for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element);
}

// Push = Ingresa datos al final del array

nombres.push("Manuel");
console.log("Push agrega al filal", nombres);

// unshitf = Ingresa datos al comienzo del array

nombres.unshift("Gabriel");
console.log("unshift agrega al comeinzo", nombres);

// Pop para quitar el ultimo elemento
// Shift para quitar el primero

nombres.pop();
nombres.shift();
console.log("Ambos sacan Shift el primero - Pop ultimo", nombres);

//Splice El primer parametro indica cuantos ID me voy a mover, el segundo cuantos elementos voy a eliminar (Si no pongo nada en el segundo borra todo lo que está despues)

nombres.splice(1, 1);
console.log(nombres);

// Join, sirve para agregar separadores entre datos

console.log(nombres.join("-"));

// Indexof me trae el ID del elemento buscado

if (nombres.indexOf("Cami") != -1) {
  console.log("Existe");
} else {
  console.log("No existis");
}

// Includes te dise con un true / False con la busqueda

console.log(nombres.includes("Camila"));

// Objetos literales

let persona = {
  nombre: "Angel",
  edad: 35,
  altura: 1.82,
  cuadro: "Boquita",
  soltero: false,
  vehiculo: [{ tipo: "Auto", marca: "Audi", modelo: "A1", fecha: 2015 }],
};
console.log(persona);

// Ahora como acceso a cada propiedad:

console.log(persona.nombre);
console.log(persona.vehiculo[0]);

// Tambien puedo modificarlo

persona.altura = 1.83;
console.log("cambio un dato", persona.altura);

// O agregarle claves y valores

persona.ciudad = "Bogota";
console.log("Agrego atributo ciudad", persona);

// Elimitar un atributo

delete persona.edad;
console.log("Elimino edad", persona);

// Crear varios productos

let productos = [];
let producto1 = { id: 1, nombre: "Remera", precio: 1000 };
let producto2 = { id: 2, nombre: "pantalon", precio: 3000 };
let producto3 = { id: 3, nombre: "zapato", precio: 2000 };

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

console.log(productos);

// Por cada elemento del array de elementos ejecuto algo {}

for (const prod of productos) {
  // Esto me separa iterando cada producto que esté en array de productos
  console.log(prod);
}
