function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

console.log("-------------- Teste de Operações / Calculadora --------------");
console.log("Adicao: " + adicao(10, 5));
console.log("Subtracao: " + subtracao(12, 5));
console.log("Multiplicacao: " + multiplicacao(2, 5));
console.log("Divisao: " + divisao(50, 5));
console.log("Divisao com 0: " + divisao(50, 0));

function quadradoDoNumero(a) {
  return a ^ 2;
}

function mediaDeTresNumeros(a, b, c) {
  return divisao(adicao(adicao(a, b), c), 3);
}

function calculaPorcentagem(a, b) {
  return divisao(multiplicacao(b, 100), a);
}

function geradorDePorcentagem(a, b) {
  return divisao(multiplicacao(a, 100), b);
}
