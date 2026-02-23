/*
Entre 0 - 11 - bom dia
Entre 12 - 17 - boa tarde
Entre 18 - 23  - boa noite */
// if pode ser usado sozinho
// else Sempre que utilizo a palavra, preciso de if antes
// So posso ter um else na checagem

const hora = 23;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!')
}
else if(hora >= 12  && hora <= 17){
 console.log('Boa tarde!')
}
else if( hora >= 18 && hora <= 23){
    console.log('Boa noite')
}else{
    console.log('Olá ')
}

const tenhoGrana = true;

if(tenhoGrana){
    console.log('Vou sair de casa')
}else{
    console.log('Não vou sair de casa')
}
