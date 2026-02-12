function saudacao (nome) {
 
 return (`Bom dia! ${nome} `)
}
const variavel = saudacao('Joana');
console.log(variavel);

function soma(x,y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2));
console.log(soma(3,1));
console.log(soma(2,7));

function adicao(a= 1, b =1){
    const total =  a + b;
    return total;
}
const total = adicao(4,2);
console.log(`Total : ${total}`)

const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));