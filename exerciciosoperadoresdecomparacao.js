///exercicio-1
let roupa1;
let roupa2;
roupa1 = 35;
roupa2 = 20;
let compras = (roupa1 + roupa2);
let orcamento;
if(compras <= 60){
    orcamento = true;
}else {
    orcamento = false; // Não cabe no orçamento
}
/// exercicio - 2
///let idadeDaThays = 53;
///let idadeDoDouglas = 49;
///let comparacao1;
///let comparacao2;
///comparacao1 = idadeDaThays > idadeDoDouglas;
///comparacao2 = idadeDoDouglas < idadeDaThays;
///console.log("Idade da Thays maior que idade do Douglas?", comparacao1);
///console.log("Idade do Douglas menor que idade da Thays?", comparacao2);
// exercicio - 3
let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;
let comparacao1, comparacao2, comparacao3, comparacao4;
comparacao1 = nomePessoa1 != "Sheila";
comparacao2 = idadePessoa1 == 18;
comparacao3 = nomePessoa2 == "Cleyton";
comparacao4 = idadePessoa2 != 30;
console.log("o resultado é", comparacao1);
console.log("o resultado é", comparacao2);
console.log("o resultado é", comparacao3);
console.log("o resultado é", comparacao4);
// exercicio - 4
///let sapato = 15;
///let chinelo = 22;
///let pantufa = 33;
///let verificacao1, verificacao2, verificacao3;
///verificacao1 = sapato >= 15;
///verificacao2 = chinelo >= 12;
///verificacao3 = pantufa <= 18;
///console.log("o resultado é", verificacao1);
///console.log("o resultado é", verificacao2);
///console.log("o resultado é", verificacao3);
// exercicio - 5
let senhaDoWiFi = 159000;

  let senhaDigitada1 = 169000;
  let senhaDigitada2 = 159000;
  let senhaDigitada3 = '159000';
  let senhaDigitada4 = 159000;
  let verificacao1;
  let verificacao2;
  let verificacao3;
  let verificacao4;
  
  // Comparando as senhas
  verificacao1 = senhaDoWiFi === senhaDigitada1; // Senha 1
  verificacao2 = senhaDoWiFi === senhaDigitada2; // Senha 2
  verificacao3 = senhaDoWiFi === senhaDigitada3; // Senha 3 (string)
  verificacao4 = senhaDoWiFi === senhaDigitada4; // Senha 4
  
  // Exibindo os resultados
  console.log("Senha 1:", verificacao1 ? "Válida" : "Inválida");
  console.log("Senha 2:", verificacao2 ? "Válida" : "Inválida");
  console.log("Senha 3:", verificacao3 ? "Válida" : "Inválida");
  console.log("Senha 4:", verificacao4 ? "Válida" : "Inválida");