const nome = prompt('Digite o seu nome : ')
document.body.innerHTML += `O seu nome é : ${nome}<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é : ${nome} <br/>`;
document.body.innerHTML += `A quantidade de letras : ${nome.length}<br/>`;
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome <strong>${nome[1]}</strong> <br/>`;
document.body.innerHTML += `Qual o primeiro indice da letra ${nome.indexOf('a')}<br/>`;
document.body.innerHTML += `O seu nome com letra minusculas : ${nome.toLocaleLowerCase()} <br/>`;
document.body.innerHTML += `Qual o ultimo indice a no seu nome : ${nome.lastIndexOf('a')}<br/>`;
document.body.innerHTML += `${nome.split('')} <br/>`;
document.body.innerHTML += `O seu nome com letra Maiuculas : ${nome.toLocaleUpperCase()}<br/>`;
console.log(`O seu nome é : ${nome}`);