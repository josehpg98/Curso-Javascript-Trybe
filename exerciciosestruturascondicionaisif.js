///exemplo-1
if (1 + 1 === 2) { // true
    console.log('Entrou no escopo deste if'); // executa o código
  }
  
  if (1 + 1 === 3) { // false
    console.log('Não entrou no escopo deste if'); // não executa o código
  }
  ///exemplo-2
const frutaDisponivel = 'banana';

if (frutaDisponivel === 'abacate') {
  console.log('Vitamina de abacate saindo');
} else if (frutaDisponivel === 'banana') {
  console.log('Vitamina de banana saindo');
} else {
  console.log('Suco de ' + frutaDisponivel + ' saindo');
}

const notaDaPessoaEstudante = 7.5;

if (notaDaPessoaEstudante >= 8) {
  console.log('Nota A');
} else if (notaDaPessoaEstudante >= 6 && notaDaPessoaEstudante < 8 ) {
  console.log('Nota B');
} else if (notaDaPessoaEstudante >= 4 && notaDaPessoaEstudante < 6 ) {
  console.log('Nota C');
} else {
  console.log('Nota D');
}