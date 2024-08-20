///exercicio-1
let atribuirMensagem = true;
let mensagem;
if (atribuirMensagem) {
    mensagem = 'Olá, Tryber!';
    console.log(mensagem);
}
//com função
///let atribuirMensagem = true;
///let mensagem;
///function ifElseExercise() {
///if (atribuirMensagem == true) {
///mensagem = 'Olá, Tryber!';
///console.log(mensagem);
///}
///}
///exercicios-2
let lampada = 'ligada';
let estadoLampada;
function ifElseExercise() {
    if (estadoLampada) {
        estadoLampada = 'A lâmpada está ligada!';
        ///console.log(estadoLampada);
    } else {
        estadoLampada = 'A lâmpada está desligada!';
        ///console.log(estadoLampada);
    }
    console.log(estadoLampada);
}
///exercicio-3
let num = 22;
let msg;
function ifElseExercise() {
    if (num % 2 === 0) {
        msg = num + ' é par!';
        console.log(num + ' é par!');
    } else {
        msg = num + ' é impar!';
        console.log(num + ' é impar!');
    }
}
//exercicio-4
let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
media = (nota1 + nota2) / 2;
if (media >= 7) {
    resultado = 'Pessoa estudante aprovada';
} else {
    resultado = 'Pessoa estudante reprovada';
}
///execicio om função
/***** Não altere os códigos dentro desse bloco *****/
///let nota1 = 8;
///let nota2 = 6;
///let media;
///let resultado;
media = (nota1 + nota2) / 2;
function ifElseExercise() {
    if (media >= 7) {
        resultado = 'Pessoa estudante aprovada';
    } else {
        resultado = 'Pessoa estudante reprovada';
    }
}
///exercicio-5
let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;
function ifElseExercise() {
    if (usuario === 'tryber' && senha === 'trib3') {
        autenticacao = 'Autenticação valida!';
    } else {
        autenticacao = 'Login e/ou senha incorretos';
    }
}
console.log(autenticacao);
//exercicio-6
let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';
function ifElseExercise() {
    if (idadeJulia > idadeErick) {
        verificaIdadePessoas = 'Julia é mais velha que Erick';
    } else if (idadeErick > idadeJulia) {
        verificaIdadePessoas = 'Erick é mais velho que Julia';
    } else {
        verificaIdadePessoas = 'Possuem a mesma idade';
    }
}
///exercicio-7
///let dadoNumero = 16;
///let classe = '';
///let resultado = '';
///function ifElseExercise() {
    ///if (dadoNumero < 4) {
        ///classe = 'Guerreiro(a)';
    ///} else if (dadoNumero >= 4 && dadoNumero < 8) {
        ///classe = 'Ladino(a)';
    ///} else if (dadoNumero >= 8 && dadoNumero < 12) {
        ///classe = 'Curandeiro(a)';
    ///} else if (dadoNumero >= 12 && dadoNumero < 16) {
        ///classe = 'Arqueiro(a)';
    ///} else {
        ///classe = 'Feiticeiro(a)';
    ///}
    ///resultado = 'Sua classe é: ' + classe;
///}