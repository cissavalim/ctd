let conta = {
  numeroConta: 0,
  tipoConta: "",
  saldo: 0,
  titular: "",
};

function Conta(numeroConta, tipoConta, titular, saldo) {
  (this.numeroConta = numeroConta), (this.tipoConta = tipoConta), (this.titular = titular), (this.saldo = saldo);
}

let listaContas = [];

listaContas.push(new Conta(5486273622, "CC", "Abigael Natte", 27771));
listaContas.push(new Conta(1183971869, "CP", "Ramon Connell", 8675));
listaContas.push(new Conta(9582019689, "CP", "Jarret Lafuente", 27363));
listaContas.push(new Conta(1761924656, "CP", "Ansel Ardley", 32415));
listaContas.push(new Conta(7401971607, "CP", "Jacki Shurmer", 18789));
listaContas.push(new Conta(630841470, "CC", "Jobi Mawtus", 28776));
listaContas.push(new Conta(4223508636, "CC", "Thomasin Latour", 2177));
listaContas.push(new Conta(185979521, "CP", "Lonnie Verheijden", 25994));
listaContas.push(new Conta(3151956165, "CC", "Alonso Wannan", 7601));
listaContas.push(new Conta(2138105881, "CP", "Bendite Huggett", 33196));

let banco = {
  clientes: listaContas,
  consultarCliente: (titular) => {
    for (let i = 0; i < listaContas.length; i++) {
      if (listaContas[i].titular == titular) {
        return listaContas[i];
      } else {
        return "Não encontrado";
      }
    }
  },
  deposito: (titular, dinheiro) => {
    for (let i = 0; i < listaContas.length; i++) {
      if (listaContas[i].titular == titular) {
        listaContas[i].saldo += dinheiro;
        return "Depósito realizado, seu novo saldo é " + listaContas[i].saldo;
      } else {
        return "Não encontrado";
      }
    }
  },
  saque: (titular, dinheiro) => {
    for (let i = 0; i < listaContas.length; i++) {
      if (listaContas[i].titular == titular) {
        if (listaContas[i].saldo < dinheiro) {
          return "Saldo insuficiente";
        } else {
          listaContas[i].saldo -= dinheiro;
          return "Extração feita com sucesso, seu novo saldo é" + listaContas[i].saldo;
        }
      } else {
        return "Não encontrado";
      }
    }
  },
};
