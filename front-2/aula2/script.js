let contadorPessoa = 0;
let contadorMaquina = 0;

while (contadorMaquina < 2 || contadorPessoa < 2) {
  let escolhaPessoa = parseInt(prompt("Digite o número que você escolheu: \n1 - Pedra \n2 - Papel \n3 - Tesoura "));
  alert("Vc escolheu " + escolhaPessoa);

  let maquina = Math.floor(Math.random() * 3) + 1;
  alert("Computador escolheu " + maquina);

  switch (escolhaPessoa) {
    case 1:
      if (maquina == 2) contadorMaquina++;
      else if (maquina == 3) contadorPessoa++;
      break;
    case 2:
      if (maquina == 3) contadorMaquina++;
      else if (maquina == 1) contadorPessoa++;
      break;
    case 3:
      if (maquina == 1) contadorMaquina++;
      else if (maquina == 2) contadorPessoa++;
      break;
  }

  alert("Seus pontos: " + contadorPessoa + "\nProntos maquina: " + contadorMaquina);
}

alert(contadorMaquina > contadorPessoa ? "Maquina ganhou" : "Você ganhou!");
