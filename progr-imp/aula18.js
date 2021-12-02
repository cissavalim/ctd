function loopDePares(num) {
  for (let i = 0; i <= 100; i++) {
    if ((i + num) % 2 == 0) {
      console.log("O número " + (i + num) + "é par");
    } else {
      console.log(i);
    }
  }
}

function loopDeImpares(num, palavra) {
  for (i = 0; i <= 100; i++) {
    if ((i + num) % 2 != 0) {
      console.log(palavra);
    } else {
      console.log(i);
    }
  }
}

function soma(num) {
  let soma = 0;
  for (i = num; i > 0; i--) {
    soma += i;
  }
  return soma;
}

function newArray(num) {
  let array = [];

  for (i = 1; i <= num; i++) {
    array.push(i);
  }

  return array;
}

function split(palavra) {
  let palavraNova = [];

  for (let i = 0; i < palavra.length; i++) {
    palavraNova.push(palavra[i]);
  }

  return palavraNova;
}

function moveZeros(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}

function arrayHandler(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    console.log("Eu sou o " + array1[i] + " e eu sou o " + array2[i]);
  }
}

function arrayObjects(num) {
  let array = [];

  for (i = 1; i <= num; i++) {
    array.push({
      valor: i,
    });
  }

  return array;
}

function arrayObjectsTwo(num, palavra) {}
