let ingresos = 0;
let gastos = 0;
let inveciones = 0;

const cuentas = [
  { cuenta: "Efectivo", saldo: 0 },
  { cuenta: "Satander", saldo: 0 },
];

// Mensaje que se muestra siempre para la suma
const mensajeCuentas = () => {
  let mensaje = "Elegí una cuenta:\n";
  for (let i = 0; i < cuentas.length; i++) {
    mensaje += i + 1 + " - " + cuentas[i].cuenta + "\n";
  }
  return mensaje;
};

//Historial

let historial = [];
let feed = "";

// Funciones para sumar/restar movimientos.

const sumarInvercion = (invmonto, invcuenta) => {
  inveciones += invmonto;
  invcuenta.saldo -= invmonto;
  console.log("Invertiste $" + invmonto + " desde la cuenta: " + invcuenta.cuenta);
};

const sumarIngreso = (ingmonto, ingcuenta) => {
  ingresos += ingmonto;
  ingcuenta.saldo += ingmonto;
  console.log("Ingresaste $" + ingmonto + " a la cuenta: " + ingcuenta.cuenta);
};

const sumarGasto = (gasmonto, gascuenta) => {
  gastos += gasmonto;
  gascuenta.saldo -= gasmonto;
  console.log("Gastaste $" + gasmonto + " a la cuenta: " + gascuenta.cuenta);
};

const transfCuentas = (trfmonto, cOrigen, cDestino) => {
  if (cOrigen.saldo < trfmonto) {
    console.log("Saldo insuficiente para transferir");
    alert("Saldo insuficiente para transferir");
    return;
  }

  // movimiento de dinero
  cOrigen.saldo -= trfmonto;
  cDestino.saldo += trfmonto;

  console.log(`
  Transferencia realizada
  Desde: ${cOrigen.cuenta}
  Hacia: ${cDestino.cuenta}
  Monto: $${trfmonto}
  `);
};

// Totales

const generarResumen = () => {
  let resumen = `
  --- MOVIMIENTOS ---
Total ingresos: $${ingresos}
Total gastos: -$${gastos}
Total inversiones: $${inveciones}

  --- SALDOS ---
`;

  for (const cuenta of cuentas) {
    resumen += `${cuenta.cuenta}: $${cuenta.saldo}\n  `;
  }

  return resumen;
};

// Antes de arrancar el While
let eleccion;
let continuar = true;

while (continuar) {
  let eleccion = prompt("Hola, que vas a cargar? \n 1: Ingreso \n 2: Gasto \n 3: Invesión \n 4: Transferencia \n 5: Ver historial \n 10:Saldos");

  switch (eleccion) {
    case "1": //Ingresos
      let ingMon = Number(prompt("Cuanto dinero ingresas?"));
      let ingOpcion = Number(prompt(mensajeCuentas()));
      let ingCuenta = cuentas[ingOpcion - 1];

      sumarIngreso(ingMon, ingCuenta);
      historial.push({ tipo: "Ingresó", Hmonto: ingMon, detalle: ingCuenta.cuenta });
      break;

    case "2": //Gastos
      let gasMon = Number(prompt("Cuanto dinero gastaste?"));
      let gasOpcion = Number(prompt(mensajeCuentas()));
      let gasCuenta = cuentas[gasOpcion - 1];

      sumarGasto(gasMon, gasCuenta);
      historial.push({ tipo: "Gastó", Hmonto: gasMon, detalle: gasCuenta.cuenta });
      break;

    case "3": //Inversiones
      let invMon = Number(prompt("Cuanto dinero invertis?"));
      let invOpcion = Number(prompt(mensajeCuentas()));
      let invCuenta = cuentas[invOpcion - 1];

      sumarInvercion(invMon, invCuenta);
      historial.push({ tipo: "Invitió", Hmonto: invMon, detalle: invCuenta });
      break;

    case "4": //Transferencia
      let transfiere = Number(prompt("Cuanto dinero vas a transferir?"));
      let origen = Number(prompt("Cuenta origen\n" + mensajeCuentas())) - 1;
      let destino = Number(prompt("Cuenta destino\n" + mensajeCuentas())) - 1;
      transfCuentas(transfiere, cuentas[origen], cuentas[destino]);
      historial.push({ tipo: "Salio ", Hmonto: transfiere, detalle: "de " + cuentas[origen].cuenta });
      historial.push({ tipo: "Entro ", Hmonto: transfiere, detalle: "a " + cuentas[destino].cuenta });

      break;

    case "5":
      for (const mov of historial) {
        feed += `${mov.tipo} $${mov.Hmonto} ${mov.detalle}\n`;
      }

      console.log(feed);
      break;

    default:
      console.log(generarResumen());

      break;
  }

  alert(generarResumen());
  continuar = confirm("Queres cargar otro movimiento?");
}

console.log(generarResumen());
