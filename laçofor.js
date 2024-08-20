///exemplo de for regressivo para cotagem ano novo
for (let index = 10; index >= 1; index = index - 1) {
    console.log(index);
}
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');
///exemplo de for carinho dee compras
const listaDeCompras = [
    'maçã',
    'gengibre',
    'miojo',
    'biscoito/bolacha',
    'banana',
    'feijão carioquinha',
    'pasta de dente',
];
const carrinho = [];

for (let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; posicaoNaLista = posicaoNaLista + 1) {
    if (listaDeCompras[posicaoNaLista] === 'maçã' || listaDeCompras[posicaoNaLista] === 'banana') {
        carrinho.push(listaDeCompras[posicaoNaLista]);
    }
}

console.log(carrinho); // ['maçã', 'banana']
///exemplo for de tabuada
console.log('Calcula tabuada em for');
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`);
}
///Exemplo de for aninhados
const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
    if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]){
      amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
    }
  }
}

console.log(amizadesEmComum);