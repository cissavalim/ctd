let pares = [2, 4, 6, 8, 10];

let impares = pares.map((par) => {
  return par + 1;
});

console.log(impares);

let nomes = ["Cecilia", "Maria", "Joao", "Jose", "Jessica"];
let filtro = nomes.filter((item) => {
  return item == "Maria";
});

console.log(filtro);

let numerosFormatados = pares.reduce((ac, item) => {
  return ac + "-" + item;
});

console.log(numerosFormatados);

let animais = ["Jacare", "Cachorro", "Urso"];

animais.forEach((item) => {
  console.log("O nome do animal é " + item);
});
