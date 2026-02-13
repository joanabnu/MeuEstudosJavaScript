const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';

console.log(array);

const pessoa1 = {
    nome: 'Joana',
    sobrenome: 'Maria',
    idade: 25
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (nomePessoa,sobrenomePessoa,idadePessoa){
    return {
        nomePessoa,
        sobrenomePessoa,
        idadePessoa
    };
}
const pessoa2 = criaPessoa('Joana', 'Maria', 25);
const pessoa3 = criaPessoa('Miranda','Oliveira',32);
const pessoa4 = criaPessoa('Joao', 'Moreira', 55);
const pessoa5 = criaPessoa('Junior', 'Lara',44);
const pessoa6 = criaPessoa('Jean', 'Otavio',69);
console.log(pessoa2,'\n' ,pessoa3, '\n', pessoa4,'\n', pessoa5, '\n',pessoa6)

const  person = {
    nome: 'Katia',
    sobrenome: 'Aparecida',
    idade: 69,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}esta falando oi... a minha idade é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }

};
person.fala();
person.incrementaIdade();
person.fala();