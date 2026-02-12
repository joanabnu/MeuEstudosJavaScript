const numero = Number(prompt('Digite um numero : '));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>O seu numero -2 é ${numero +2} </p>`;
texto.innerHTML += `<p>Raiz quadrado  : ${numero ** 0.5}</p>`;

texto.innerHTML += `<p>Raiz quadrada : ${Number.isInteger(numero)}<p/>`;
texto.innerHTML += `<p>É NAN: ${Number.isNaN(numero)}<p/>`;
texto.innerHTML += `<p> Arrendondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para cima : ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas decimais ${numero.toFixed(2)}</p>`;
