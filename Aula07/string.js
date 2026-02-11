
let umastring = 'Uma texto';
console.log(umastring);
console.log(umastring.match(/[a-z]/g));
console.log(umastring.search(/x/));
console.log(umastring.replace('Uma','outra'));

let novaString = 'O rato roeu do rei roma.';
console.log(novaString.replace(/r/g,'#'));
console.log(novaString.length);
console.log(novaString.slice(-3));
console.log(novaString.slice(-5,-1));
console.log(novaString.split('r'));
console.log(novaString.split(' ',3));
console.log(novaString.toLocaleUpperCase());
console.log(novaString.toLocaleLowerCase());
