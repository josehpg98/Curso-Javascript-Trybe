///let ensolarado = false;
///let fimDeSemana = true;
///let vaiAPraia;
vaiAPraia = ensolarado && fimDeSemana
console.log(vaiAPraia); // false

let ensolarado = true;
console.log(vaiAPraia); // true

let fimDeSemana = false;

console.log(vaiAPraia); // false

///let gasolina = true;
let dinheiro = false;
///let vaiAPraia = gasolina || dinheiro;
console.log(vaiAPraia); // true

let gasolina = false;
console.log(vaiAPraia); // false

let carroQuebrado = true;
let vaiAPraia = !carroQuebrado;
console.log(vaiAPraia); // false

carroQuebrado = false;
console.log(vaiAPraia); // true

