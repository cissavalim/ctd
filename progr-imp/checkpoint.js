let tempo;

function microondas(comida, tempoDesejado) {
  switch (comida) {
    case "Pipoca":
      tempo = 10;
      break;
    case "Macarrão":
      tempo = 8;
      break;
    case "Carne":
      tempo = 15;
      break;
    case "Feijão":
      tempo = 12;
      break;
    case "Brigadeiro":
      tempo = 8;
      break;
    default:
      console.log("Prato inexistente");
      break;
  }

  if (tempoDesejado > 2 * tempo) {
    console.log("Comida queimou");
    console.log("Prato pronto, bom apetite!");
  } else if (tempoDesejado < tempo) {
    console.log("Tempo insuficiente");
    console.log("Prato pronto, bom apetite!");
  } else if (tempoDesejado == 3 * tempo) {
    console.log("Kabumm");
    console.log("Prato pronto, bom apetite!");
  } else {
    console.log("Prato pronto, bom apetite!");
  }
}

microondas("Pipoca", 8);
