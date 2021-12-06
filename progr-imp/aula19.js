let listaPessoas = require("./arquivo");

function maiorMenorPessoa(listaPessoas) {
  let pessoasCresc = listaPessoas.sort((a, b) => {
    return a.altura - b.altura;
  });

  let menorPessoa = pessoasCresc[0];
  let maiorPessoa = pessoasCresc[pessoasCresc.length - 1];

  return `maior pessoa ${maiorPessoa.nome}: ${maiorPessoa.altura}m, \nmenor pessoa ${menorPessoa.nome}: ${menorPessoa.altura}m`;
}

console.log(maiorMenorPessoa(listaPessoas));

function mediaAlturaMulheres(listaPessoas) {
  let listaMulheres = listaPessoas
    .filter((item) => {
      return item.sexo === "F";
    })
    .map((item) => {
      return item.altura;
    });

  return (
    listaMulheres.reduce((acc, num) => {
      return acc + num;
    }) / listaMulheres.length
  );
}

console.log(mediaAlturaMulheres(listaPessoas));

function numeroHomens(listaPessoas) {
  return listaPessoas.filter((item) => {
    return item.sexo === "M";
  }).length;
}

console.log(numeroHomens(listaPessoas));
