let pessoas = [
  { idade: 12, nota: 1 },
  { idade: 15, nota: 2 },
  { idade: 21, nota: 3 },
  { idade: 35, nota: 2 },
  { idade: 54, nota: 3 },
  { idade: 22, nota: 1 },
  { idade: 33, nota: 1 },
  { idade: 56, nota: 1 },
  { idade: 18, nota: 2 },
  { idade: 19, nota: 3 },
  { idade: 22, nota: 2 },
  { idade: 13, nota: 2 },
  { idade: 25, nota: 3 },
  { idade: 54, nota: 1 },
  { idade: 46, nota: 3 },
];

function mediaIdades(pessoas) {
  let mediaIdades = pessoas
    .filter((item) => {
      return item.nota == 3;
    })
    .map((item) => {
      return item.idade;
    });

  return (
    mediaIdades.reduce((acc, num) => {
      return acc + num;
    }) / mediaIdades.length
  );
}

console.log(mediaIdades(pessoas));

function quantidadePessoas(pessoas) {
  return pessoas.filter((item) => {
    return item.nota == 1;
  }).length;
}

console.log(quantidadePessoas(pessoas));

function porcentagem(pessoas) {
  return (
    (pessoas.filter((item) => {
      return item.nota == 2;
    }).length *
      100) /
    15
  );
}

console.log(porcentagem(pessoas));
