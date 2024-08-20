let roupa = 'camiseta';
console.log(roupa);
roupa = 'moletom';
console.log(roupa);
///exercicio-1
let cor = 'verde';
console.log(cor);
///exercicio-2
let cidade = 'Paraupebas';
cidade = 'Rio de Janeiro';
console.log(cidade);
///exercicio-3
const meuNome = 'José';
console.log(meuNome);
///exercicio-4
let minhaIdade = 26;
console.log(minhaIdade);
///exercicio-5
function corrigeCodigo() {
    try {
      /***** Não altere os códigos acima *****/
      /***** Escreva o seu código aqui *****/
  
  
      let email = 'email@trybe.com';
      email = 'outroEmail@trybe.com';
  
  
      /***** Fim do seu código *****/
      /***** Não altere os códigos abaixo *****/
    } catch (e) {
      return 'email está incorreto!'
    }
    return 'email está correto!'
}

/// chamando só a função
///corrigeCodigo();

let resultado = corrigeCodigo();
console.log(resultado);  

