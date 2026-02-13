/* 
Primitivos (imutaveis) -  String, number, boolean, undefined,null (bigint, symbol) - valores copiados 
Referencia (mutavel) - Array, objects, function - Passados por referencia
*/
let nome = 'Joana';
nome = 'Maria';
nome[0] = 'R';

let a = 'A';
let b = a // copia
console.log(a,b)
console.log(nome);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'otavio'
};
const pessoa1 = pessoa;
pessoa.nome = 'joao';
console.log(pessoa1);


