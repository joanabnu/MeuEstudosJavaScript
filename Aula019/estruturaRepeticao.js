for (let i = 1; i<=10;i++){
 console.log(`Linha : ${i}`);
}
console.log(`-=-`.repeat(20))
console.log(`Nova Estrutura de Repetição`)
console.log(`-=-`.repeat(20))
for(let j = 10; j>=1;j--){
    console.log(`Linha : ${j}`);
}
console.log(`-=-`.repeat(20));
console.log(`Nova Estrutura de Repetição`)
console.log(`-=-`.repeat(20))
for (let g = 0; g <=10;g++){
    const par = g % 2 === 0 ? 'par': 'impar';
    console.log(g,par);
}