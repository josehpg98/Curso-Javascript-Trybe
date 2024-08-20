///exercicio-1
let numero = 30;
let resultado;
if(numero >= 20 && numero <= 50 && numero % 2 == 0){
    resultado = true;
}else{
    resultado = false;
}
console.log(resultado);
///exercicio-2
let local = 'praia';
let estadoEmocional;
if (local === 'praia' || local === 'cinema') {
    estadoEmocional = 'feliz';
  } else {
    estadoEmocional = 'neutro';
  }
  
  console.log(`Estado emocional: ${estadoEmocional}`);
///exercicio-3
  // Variáveis iniciais com valores incorretos
let temOxigenioNoEspaco = true; // Oxigênio presente no espaço (erro)
let aTerraEPequena = true; // Terra é pequena (erro)

// Reatribuição dos valores negando os valores originais
temOxigenioNoEspaco = !temOxigenioNoEspaco; // Nega o valor original (falta de oxigênio)
aTerraEPequena = !aTerraEPequena; // Nega o valor original (Terra não é pequena)

// Valores corrigidos das variáveis
console.log("temOxigenioNoEspaco:", temOxigenioNoEspaco); // false
console.log("aTerraEPequena:", aTerraEPequena); // false
///exercicio-4
// Variáveis fornecidas
let login = 'joabCassimiro';
let senha = '12345678';

// Variável para armazenar o resultado da verificação
let verificaCredenciais;

// Comparação das credenciais
verificaCredenciais = (login === 'joabCassimiro' && senha === '12345678');

// Impressão do resultado
console.log("Credenciais corretas?", verificaCredenciais);
///exercicio-5
// Variável inicial
let gostoPorPraia = false;

// Negação do valor
let novoGostoPorPraia = !gostoPorPraia;

// Impressão do novo gosto
console.log("Novo gosto do Juninho por praia:", novoGostoPorPraia);