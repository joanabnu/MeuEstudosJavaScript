function meuEscopo(){
  const formulario = document.querySelector('.formulario');
  const resultado = document.querySelector('.resultado');
 const pessoas = [];
function recebeEventoForm (evento){
    evento.preventDefault();
    const nome = formulario.querySelector('.nome');
    const sobrenome = formulario.querySelector('.sobrenome');
    const idade = formulario.querySelector('.idade');
    const peso = formulario.querySelector('.peso');
    const altura = formulario.querySelector('.altura');
    console.log(nome, sobrenome,idade, peso,altura);

    pessoas.push(
        {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        }
    );
    console.log(pessoas);

    resultado.innerHTML += `<p> Nome  : ${nome.value}</p>`;
    resultado.innerHTML += `<p>Sobrenome : ${sobrenome.value}</p>`;
    resultado.innerHTML += `<p>Idade : ${idade.value}</p>`;
    resultado.innerHTML += `<p>Peso : ${peso.value}</p>`;
    resultado.innerHTML += `<p>Altura :  ${altura.value} </p>`;
}


  formulario.addEventListener('submit', recebeEventoForm);
}
meuEscopo();