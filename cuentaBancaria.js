/*
Crear dos o tres cuentas, mostrar por consola el saldo inicial, realizar operaciones,
mostrarlas por consola y luego mostrar el saldo final.
*/

function Cuenta(nombre, apellido, cuenta) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.cuenta = cuenta;
  this.saldo = 0;
  this.movimiento = [];

  this.nombreCompleto = function () {
    return `Nombre: ${this.nombre} ${this.apellido}`;
  };

  this.acreditar = function (dinero) {
    this.movimiento= [...this.movimiento, {tipo:"acredito", valor: dinero}];
    this.saldo += dinero;
    console.log(this.saldo);
    console.log(this.movimiento);
  };

  this.debitar = function (valorDebitado) {
    if (this.saldo < valorDebitado) {
      console.log("saldo insuficiente");
    } else {
      this.movimiento = [...this.movimiento, {tipo:"debito", valor:valorDebitado}];
      this.saldo += valorDebitado;
      console.log(this.saldo);
      console.log(this.movimiento);
    }
  };
}

const nuevaCuenta = new Cuenta("Javier", "Galindo");
console.log(nuevaCuenta.nombreCompleto());
const acredito1 = nuevaCuenta.acreditar(10000);
const debito1 = nuevaCuenta.debitar(8000);
const acredito2 = nuevaCuenta.acreditar(5000);
const debito2 = nuevaCuenta.debitar(24000);