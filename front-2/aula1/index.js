let array = [1, 2, 4, 8];
let total = 0;

let iterar = (array) => {
  array.forEach((item) => {
    total += item;
    console.log(total);
  });
};

iterar(array);
