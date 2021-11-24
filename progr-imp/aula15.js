let dados = require("./arquivo");
let listaUsuarios = [];

function Conta(numeroConta, tipoConta, saldo, titular) {
  this.numeroConta = numeroConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

for (let i = 0; i < dados.length; i++) {
  listaUsuarios.push(new Conta(dados[i].numero, dados[i].tipo, dados[i].saldo, dados[i].titular));
}

let banco = {
  clientes: listaUsuarios,
  consultarCliente: function(titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titular == titular) {
        return this.clientes[i];
      }
    }
  },
};

console.log(banco.consultarCliente("Abigael Natte"));
