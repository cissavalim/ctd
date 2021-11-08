/* 
Mesa de trabalho - 26/10/2021
grupo: Matheus Galvao
Cecília Valim
Glauber Santos Silva
Wellington Siqueira
Rafael Vasconcelos
Rogério De Oliveira Silva
*/

//funcao 1

function converte(polegadas) {
  let resultado = polegadas * 2.54;
  return resultado;
}
console.log(converte(1));

//funcao2

function converte2(texto) {
  return "http://www." + texto + ".com.br";
}
console.log(converte2("super"));

//funcao3

function converte3(texto) {
  return texto + "!";
}
console.log(converte3("super"));

//funcao4

function converte4(anos) {
  return anos * 7;
}
console.log(converte4(10));

//funcao5

function converte5(sal) {
  return sal / 160;
}

console.log(converte5(2500));

//funcao6

function imc(altura, peso) {
  return (peso / altura) ^ 2;
}
console.log(imc(165, 157));

//funcao7

function maiuscula(texto) {
  return texto.toUpperCase();
}
console.log(maiuscula("cecilia"));

//funcao8

function tipo(dado) {
  return typeof dado;
}
console.log(tipo(null));

//funcao9

function circunferencia(raio) {
  return 2 * Math.PI * raio;
}
console.log(circunferencia(5));
