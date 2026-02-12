
const alunos = ['Luiz',' Maria', 'Joao'];
alunos.push('fabio'); //  adicionar no final
alunos.unshift('Luiza'); // Adicionar no começo 
const removido = alunos.pop();
delete alunos[1];
console.log(alunos instanceof Array)
console.log(removido);
console.log(alunos);