console.log("JS carregou");

function IMC(){
 const formulario = document.querySelector('.formulario')
 const resultado = document.querySelector('.resultado')
 const informacao = [];
 function recebeEventoForm (evento){
    evento.preventDefault();
    const peso = Number(formulario.querySelector('.peso').value);
    const altura = Number(formulario.querySelector('.altura').value);
    console.log(peso,altura)

     informacao.push(
    {
        peso: peso,
        altura: altura
    }
 );
  console.log(informacao);
   resultado.innerHTML += `<p>Peso : ${peso}</p>`;
 resultado.innerHTML += `<p>Altura : ${altura}</p>`
 }



 formulario.addEventListener('submit',recebeEventoForm);
}
IMC();