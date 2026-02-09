// const nome = 'Luiz Otávio';
// const sobrenome = 'Miranda';
// const idade = 30;
// const peso = 84;
// const alturaEmCm = 1.80; 

const nome = 'Joana';
const sobrenome = 'Maria';
const idade = 25;
const peso = 50;
const alturaEmM = 1.55;
let imc = peso / ( alturaEmM * alturaEmM)

console.log('Nome : ',nome, '\nSobrenome : ',sobrenome,'\nIdade : ',idade, '\npeso : ',peso, 'Altura : ',alturaEmM, '\nO IMC : ',imc); 
// Templates strings
console.log('----Templates String----')
console.log(`Nome : ${nome} \nSobrenome : ${sobrenome} \nIdade : ${idade} \nPeso : ${peso} \nAltura ${alturaEmM} \nO Imc ${imc}`)