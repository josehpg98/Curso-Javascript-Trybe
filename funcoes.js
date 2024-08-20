///exemplo-1
function imprimeSaudacao1() {
    console.log('Olá Gisele!');
  }
  
imprimeSaudacao1();
//ou
function imprimeSaudacao2() {
    const saudacao = 'Olá, Gisele!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao2());
  //ou
  function imprimeSaudacao3() {
    const saudacao = 'Olá, Gisele!';
  
    console.log('Eu sou um console e vou aparecer!');
    return saudacao;
  
    console.log('Eu sou um console e não vou aparecer 😭!');
  }
  
  imprimeSaudacao3();
  ///função com parametro
  function imprimeSaudacao4(parametro) {
    return parametro;
  }
  
  console.log(imprimeSaudacao4('Oi! Eu sou um parâmetro!')); // o valor do parâmetro é passado na chamada da função
  ///ou
  function imprimeSaudacao5(parametro) {
    return parametro;
  }
  
  console.log(imprimeSaudacao5('Olá, Gisele!'));
///ou também
function imprimeSaudacao6(parametro) {
    return 'Olá, ' + parametro + '!';
  }
  
  console.log(imprimeSaudacao6('Gisele'));
  ///ou
  function imprimeSaudacao7(nome) {
    const saudacao = 'Olá, ' + nome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao7('Gisele'));
  ///ou também
  function imprimeSaudacao8(nome, sobrenome) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao8('Gisele', 'Santin'));
///ou também 
function imprimeSaudacao9(nome, sobrenome) {
    const saudacao9 = 'Olá, ' + nome + ' ' + sobrenome + '!';
    return saudacao9;
  }
  
  const nomeDaPessoa9 = 'Gisele';
  const sobrenomeDaPessoa9 = 'Santin';
  
  console.log(imprimeSaudacao9(nomeDaPessoa9, sobrenomeDaPessoa9));
///ou funções com números
function imprimeSaudacao10(nome, sobrenome, idade) {
    const saudacao10 = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade10 = 'Você tem ' + idade + ' anos.';
  
    return saudacao10 + ' ' + exibeIdade10;
  }
  
  const nomeDaPessoa10 = 'Gisele';
  const sobrenomeDaPessoa10 = 'Santin';
  
  console.log(imprimeSaudacao10(nomeDaPessoa10, sobrenomeDaPessoa10, 25));
///testando com 3 pessoas
function imprimeSaudacao11(nome, sobrenome, idade) {
    const saudacao11 = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade11 = 'Você tem ' + idade + ' anos.';
  
    return saudacao11 + ' ' + exibeIdade11;
  }
  
  console.log(imprimeSaudacao11('Alberto', 'Cavalcanti', 85));
  console.log(imprimeSaudacao11('Cleyton', 'Oliveira', 32));
  console.log(imprimeSaudacao11('Sandra', 'Cardoso', 58));
  ///ou exemplo conta de luz
  function calculaDespesa(luz, internet) {
    const despesaTotal = luz + internet;
  
    return 'Esse mês, a despesa foi de: R$ ' + despesaTotal;
  }
  
  console.log(calculaDespesa(230, 125));