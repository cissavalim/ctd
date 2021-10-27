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
console.log("Adicao entre 10 e 5: " + adicao(10, 5));
console.log("Subtracao entre 12 e 5: " + subtracao(12, 5));
console.log("Multiplicacao entre 2 e 5: " + multiplicacao(2, 5));
console.log("Divisao entre 50 e 5: " + divisao(50, 5));
console.log("Divisao entre 50 e 0: " + divisao(50, 0));

function quadradoDoNumero(a) {
  return a ^ 2;
}

function mediaDeTresNumeros(a, b, c) {
  return divisao(adicao(adicao(a, b), c), 3);
}
console.log("Média: " + mediaDeTresNumeros(1, 2, 3));

function calculaPorcentagem(a, b) {
  return divisao(multiplicacao(b, 100), a);
}
console.log("Calcular porcentagem: " + calculaPorcentagem(100, 15));

function geradorDePorcentagem(a, b) {
  return divisao(multiplicacao(a, 100), b);
}
console.log("Gerador de porcentagem: " + geradorDePorcentagem(2, 200));
