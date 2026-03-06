const pessoa = {
    nome: 'Joana',
    sobrenome:'Maria',
    idade: 30,
    endereço:{
        rua: 'Av Brasil',
        numero:320
    }
};
// Atribuicao via desestruturacao
const {endereço: {rua,numero}} = pessoa;
console.log(rua,numero);