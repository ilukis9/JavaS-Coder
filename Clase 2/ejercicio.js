// Ecomerce pequeño

let carrito = 0;
let eleccion;
let continuar = true;

let hamburguesa = 1500;
let pancho = 750;
let lomo = 2150;

while (continuar) {
  let eleccion = prompt("Ingrese la opción que quiera: \n 1: Hamburguesa \n 2: Pancho \n 3: Lomo \n 9: Borrar un producto \n 10: Ver monto ");

  if (eleccion == 9 && carrito > 0) {
    let eleccionb = prompt("Que producto vas a borrar: \n 1: Hamburguesa \n 2: Pancho \n 3: Lomo ");
    switch (
      eleccionb // Suma de porductos
    ) {
      case "1":
        let hxu = prompt("Cuantas hamburguesas queres sacar?");
        carrito = carrito - hamburguesa * hxu;
        console.log("Sacaste lomo -" + hxu + " x $" + hamburguesa + " = -$" + hamburguesa * hxu);
        break;

      case "2":
        let pxu = prompt("Cuantos panchos queres sacar?");
        carrito = carrito - pancho * pxu;
        console.log("Sacaste pancho -" + pxu + " x $" + pancho + " = -$" + pancho * pxu);
        break;

      case "3":
        let lxu = prompt("Cuantos lomos queres sacar?");
        carrito = carrito - lomo * lxu;
        console.log("Sacaste lomo -" + lxu + " x $" + lomo + " = -$" + lomo * lxu);
        break;
    }
  }

  switch (
    eleccion // Suma de porductos
  ) {
    case "1":
      let hxu = prompt("Cuantas hamburguesas queres?");
      carrito = carrito + hamburguesa * hxu;
      console.log("Agregaste lomo " + hxu + " x $" + hamburguesa + " = $" + hamburguesa * hxu);
      break;

    case "2":
      let pxu = prompt("Cuantos panchos queres?");
      carrito = carrito + pancho * pxu;
      console.log("Agregaste pancho " + pxu + " x $" + pancho + " = $" + pancho * pxu);
      break;

    case "3":
      let lxu = prompt("Cuantos lomos queres?");
      carrito = carrito + lomo * lxu;
      console.log("Agregaste lomo " + lxu + " x $" + lomo + " = $" + lomo * lxu);
      break;

    default:
      alert("El total es de: $" + carrito);
      break;
  }

  continuar = confirm("Queres agregar productos");
}

continuar != confirm("El total es de $" + carrito);
console.log("El total es de: $" + carrito);

// Agregar mas variables para ver de multiplicar o restar cosas.
