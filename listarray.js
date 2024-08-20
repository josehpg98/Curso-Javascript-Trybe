///execercio-1
const listaDeCompras = ['Maçã', 'Biscoito/Bolacha','Banana','Café em pó','Leite', 'Arroz'];
///exercicio-2
const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
///Mostre o terceiro item do array;
console.log(frutas[2]);
///Mostre o primeiro item do array
console.log(frutas[0]);
///Mostre o quinto item do array;
console.log(frutas[4]);
///concatenação do primeiro item com o terceiro do array
console.log(`${frutas[0]} e ${frutas[2]}`)
///exercicio-3
const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
///Substituir o nome 'Juliana' por 'Laura'
convidados[2] = 'Laura';
convidados.push('Guilherme', 'Leticia');
console.log(convidados);
///exercicio-4
const sabores = ['Chocolate','Morango','Açaí','Creme','Flocos'];
const coberturas = ['Chocolate', 'Morango','Doce de leite'];
console.log('Quantidade de sabores de sorvete: '+sabores.length);
console.log('Quantidade de sabores de cobertura: '+coberturas.length);
///exercicio-5
let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

if (inverter) {
  listaInvertida = Array(lista.length); // Cria um array vazio com o mesmo comprimento
  listaInvertida[0] = lista[lista.length - 1];
  listaInvertida[1] = lista[lista.length - 2];
  listaInvertida[2] = lista[lista.length - 3];
  listaInvertida[3] = lista[lista.length - 4];
  listaInvertida[4] = lista[lista.length - 5];

  console.log(listaInvertida);
} else {
  console.log(lista);
}
///ou assim
///let lista = [1, 2, 3, 4, 5];
///let inverter = true;
///let listaInvertida = [];

///if (inverter) {
  ///listaInvertida = lista.reverse();
  ///console.log(listaInvertida);
///} else {
  ///console.log(lista);
///}
