///variavel simples, com um só dado.
const nome = 'Fàbio';
//variavel composta, varios dados.
const alunosTurma1 = ['Fàbio', 'Cristina', 'Jéssica'];
const alunosTurma2 = ['João', 'Diogo'];
console.log(alunosTurma1); // ['Fàbio', 'Cristina', 'Jéssica']
console.log(alunosTurma2); // ['João', 'Diogo']
///array com números
const numerosSorteados = [39, 7, 2, 21, 6, 26];
console.log(numerosSorteados); // [39, 7, 2, 21, 6, 26]
///acessando o array
const pizzas = ['4 queijos', 'frango com catupiry', 'alho', 'chocolate', 'pepperoni'];
const pizzaEscolhida = pizzas[1];
console.log(pizzaEscolhida); // frango com catupiry
//outro exemplo
const listaDeCompras = ['arroz', 'feijão', 'ovo'];
///add um item
listaCompras[3] = 'farofa';

console.log(listaDeCompras); // ['arroz', 'feijão', 'ovo', 'farofa']
console.log(listaCompras.push('farofa de mandioca')); // ['arroz', 'feijão', 'ovo', 'farofa']
///outro exemplo
const titulosCopaDoMundo = [1958, 1962, 1970, 1994];

console.log(titulosCopaDoMundo); // [1958, 1962, 1970, 1994]
///add um item
titulosCopaDoMundo[4] = 2002;
///ou tbm assim
titulosCopaDoMundo.push(2002)
console.log(titulosCopaDoMundo);
///substituindo um item no array
const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];
estadosNorte[3] = 'Pará';

console.log(estadosNorte);
//outro exemplo
const ingredientes = ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino'];
///substituindo  valor
ingredientes[2] = 'suco';
console.log(ingredientes); // ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino']
///var o tamanho do array
const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
const quantidadeConvidados = convidados.length;
console.log(convidados); // ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana']
convidados.push('Evelyn');
console.log(quantidadeConvidados); // 12
///descobrindo um elemento
const ultimoConvidado = convidados[convidados.length - 1];

console.log(ultimoConvidado); // Evelyn
