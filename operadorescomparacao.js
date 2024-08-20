///=== para comparar estritamente a igualdade entre dois valores;
///!== para comparar estritamente a diferença entre dois valores;
///> para comparar se um valor é maior do que o outro;
///< para comparar se um valor é menor do que o outro;
///>= para comparar se um valor é maior ou igual do que o outro;
///<= para comparar se um valor é menor ou igual do que o outro.
7 < 10 // 7 é menor que 10 (verdadeiro), então retorna true.
7 > 10 // 7 é maior que 10 (falso), então retorna false. 

const idadeDaPessoa = 17;
const idadeMaioridade = 18;

///const verificaMaioridade = idadeDaPessoa >= idadeMaioridade; // aqui estamos verificando se idadeDaPessoa é maior ou igual que idadeMaioridade, o que retorna falso porque 17 não é maior e nem igual a 18
	
///const verificaIdade = idadeDaPessoa === 17; // aqui estamos comparando se idadeDaPessoa é igual a 17, o que é verdade, retornando true

///const cidade = 'Belo Horizonte';

///const verificaCidade = cidade === 'Belo Horizonte';

///console.log(verificaCidade);

const idade = '45';

const verificaIdade = idade === 45;

console.log(verificaIdade);
///---------------------------
const banda = 'Iced Earth';

const verificaBanda = banda === 'Iced Earth';

console.log(verificaBanda); // true
///---------------------------
const nomeDoCachorro = 'Pipoca';

const verificaNomeCachorro = nomeDoCachorro !== 'Pipoca'; // o valor da variável nomeDoCachorro é diferente de Pipoca?

console.log(verificaNomeCachorro); // false


///---------------------------
///const classificacaoIndicativa = 14;

///const idadeDaPessoa = 15;

///const verificaIdade = idadeDaPessoa > classificacaoIndicativa;

///console.log(verificaIdade);

///------------------------------

///const verificaIdade = classificacaoIndicativa > idadeDaPessoa;

///--------------------
///const classificacaoIndicativa = 14;

///const idadeDaPessoa = 15;

///const verificaIdade = idadeDaPessoa < classificacaoIndicativa;

///console.log(verificaIdade);
///--------------------
///const idadeDaPessoa = 18;

///const idadeMaioridade = 18;

///const verificaIdadeMaior = idadeDaPessoa > idadeMaioridade;

///const verificaIdadeMaiorOuIgual = idadeDaPessoa >= idadeMaioridade;

///console.log(verificaIdadeMaior);
///console.log(verificaIdadeMaiorOuIgual);

///----------------
///const idadeDaPessoa = 18;

///const idadeMaioridade = 18;

///const verificaIdade = idadeDaPessoa <= idadeMaioridade;

///console.log(verificaIdade);

