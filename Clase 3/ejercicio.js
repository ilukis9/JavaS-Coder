// Ecomerce pequeño

let carrito = 0;
let total = 0;
let eleccion;
let continuar = true; // Esto hace que hasta que no ponga Cancel siga dandome la opción de sumar cosas
let pago = 0;

const sumarAlcarrito = (subtit, precio, cant, item) => {
  carrito = carrito + subtit;
  console.log("Agregaste " + item + " " + cant + " x $" + precio + " = $" + precio * cant);
};
const restarrAlcarrito = (subtit, precio, cant, item) => {
  carrito = carrito - subtit;
  if (carrito < 0) {
    // Esto evita que cuando se resten productos no pase a negativo
    carrito = 0;
  }
  console.log("Sacaste " + item + " " + cant + " x $" + precio + " = -$" + precio * cant);
};

let hamburguesa = 1500;
let pancho = 750;
let lomo = 2150;

let efectivo = 0.2;
let transferencia = 0.1;

while (continuar) {
  let eleccion = prompt("Ingrese la opción que quiera: \n 1: Hamburguesa \n 2: Pancho \n 3: Lomo \n 9: Borrar un producto \n 10: Ver monto ");

  if (eleccion == 9 && carrito > 0) {
    let eleccionb = prompt("Que producto vas a borrar: \n 1: Hamburguesa \n 2: Pancho \n 3: Lomo ");
    switch (
      eleccionb // Suma de porductos
    ) {
      case "1":
        let hxu = prompt("Cuantas hamburguesas queres sacar?");
        restarrAlcarrito(hamburguesa * hxu, hamburguesa, hxu, "Hamburgesa");
        break;

      case "2":
        let pxu = prompt("Cuantos panchos queres sacar?");
        restarrAlcarrito(pancho * pxu, pancho, pxu, "pancho");
        break;

      case "3":
        let lxu = prompt("Cuantos lomos queres sacar?");
        restarrAlcarrito(lomo * lxu, lomo, lxu, "lomo");
        break;
    }
  }

  switch (
    eleccion // Suma de porductos
  ) {
    case "1":
      let hxu = prompt("Cuantas hamburguesas queres?");
      sumarAlcarrito(hamburguesa * hxu, hamburguesa, hxu, "Hamburgesa");
      break;

    case "2":
      let pxu = prompt("Cuantos panchos queres?");
      sumarAlcarrito(pancho * pxu, pancho, pxu, "Pancho");
      break;

    case "3":
      let lxu = prompt("Cuantos lomos queres?");
      sumarAlcarrito(lomo * lxu, lomo, lxu, "Lomo");
      break;

    default:
      alert("El subtotal es de: $" + carrito);
      break;
  }

  continuar = confirm("Queres agregar productos");
}

console.log("El subtotal es de: $" + carrito);

if (carrito > 0) {
  pago = prompt(
    "Metodo de pago: \n 1: Efectivo (-" + efectivo * 100 + "%) \n 2: Transferencia (-" + transferencia * 100 + "%) \n 3: Tarjeta de credito",
  );
  switch (pago) {
    case "1":
      total = carrito * (1 - efectivo);
      console.log("El descuento es de -$" + carrito * efectivo);

      break;

    case "2":
      total = carrito * (1 - transferencia);
      console.log("El descuento es de -$" + carrito * transferencia);
      break;

    default:
      total = carrito;
      break;
  }
}

continuar != confirm("El total es de $" + total);
console.log("El total es de: $" + total);

if (pago == "1") {
  console.log("Gracias por tu pedido, el partidor cobrará en el domicilio");
} else if (pago == "2") {
  console.log("El alias es lucas.pulido, por favor enviar el comprobante a +54 9 11 1234-5678");
} else {
  console.log("Este es su link de pago: mercadopago......");
}

// console.log("Agregaste lomo " + hxu + " x $" + hamburguesa + " = $" + hamburguesa * hxu);
// console.log("Sacaste lomo -" + hxu + " x $" + hamburguesa + " = -$" + hamburguesa * hxu);
