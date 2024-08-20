///exercicio-1
const numeros = [1, 2, 3, 4, 5];
for(let i = 0;i <= 4;i++){
    console.log(numeros[i]);
}
///exercicio-2
const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
let somaTotal = 0; // valor total
for(let i = 0;i < valoresProdutos.length;i++){
    somaTotal += valoresProdutos[i];
}
console.log('A soma total do lanche deu: '+somaTotal);
///exercicio-3
const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
listaDeFrutas.push('manga');
for(let i = 0;i < listaDeFrutas.length;i++){
    console.log(listaDeFrutas[i]);
}
///exercicio-4
console.log('exercicio-4');
const multiplicador = [3, 7];
let resultado;
for (let index = 0; index < multiplicador.length; index = index + 1) {
  for(let index2 = 1; index2 <= 9; index2 = index2 + 1) {
    resultado = multiplicador[index] * index2;
    console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
  }
}