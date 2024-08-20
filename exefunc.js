///EXERCICIO-1
function mostrarFrase(){
    return 'Vamo que vamo!';
}
mostrarFrase();
///EXERCICIO-2
function saudacao(nome){
    return `Olá, ${nome}!`;
}
saudacao('Julia');
///EXERCICIO-3
function clientePedido(numeroPedido){
    if(numeroPedido === 1){
        return 'Pizza de Calabresa';
    }else if(numeroPedido === 2){
        return 'Pizza de Quatro Queijos';
    }else if(numeroPedido === 3){
        return 'Pizza de Frango com Catupiry';
    }else if(numeroPedido === 4){
        return 'Pizza de Brigadeiro';
    }else{
        return 'Número do pedido inválido!';
    }
}
console.log(clientePedido(1));
///EXERCICIO-4
function mediaDosNumeros(arrayNumeros) {
    let soma = 0;
    let media = 0;
  
    for (let index = 0; index < arrayNumeros.length; index = index + 1) {
      soma = soma + arrayNumeros[index];
    }
  
    media = soma / arrayNumeros.length;
  
    return media;
  }
  mediaDosNumeros(2,3,4);