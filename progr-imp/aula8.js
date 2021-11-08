function podeSubir(altura, acompanhada) {
  if (altura < 2 && altura > 1.4) return true;
  else if (altura <= 1.4 && acompanhada) return true;
  else return false;
}

function podeSubir(altura, acompanhada) {
  if (altura < 2 && altura > 1.4) return "Acesso autorizado";
  else if (altura <= 1.4 && acompanhada) return "Acesso autorizado somente com acompanhante";
  else return "Acesso negado";
}

console.log(podeSubir(1.6, false));

console.log(podeSubir(1.3, true));
