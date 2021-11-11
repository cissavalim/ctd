function imprimirInverso(array) {
  console.log(array.reverse());
}

function inverter(array) {
  arrayNovo = array.reverse();
  return arrayNovo;
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;

function somarArray(array) {
  return array.reduce(reducer);
}

function join(array) {
  return array.reduce(reducer);
}

let filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

console.log(filmes[2]);

function letraMaiuscula(filmes) {
  return filmes.toUpperCase();
}

let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function funde(array, outrArray) {
  arrayNovo = array.concat(outrArray);
  return arrayNovo;
}

function modifica(array) {
  let tirado;

  tirado = array[array.length - 1];

  console.log(tirado);

  array.pop();
}

function notas(array1, array2) {
  if (array1.toString() == array2.toString()) {
    return "iguais";
  } else {
    return "nao iguais";
  }
}

funde(filmes, animacoes);
modifica(arrayNovo);
console.log(notas(filmes, animacoes));
