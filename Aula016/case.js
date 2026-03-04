const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();

let diaSemanatexto;

switch(diaSemana){
    case 0:
        diaSemanatexto = 'Domingo';
        break;
    case 1:
        diaSemanatexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanatexto = 'Terça-feira';
        break;
    case 3: 
        diaSemanatexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanatexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanatexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanatexto = 'Sabado';
        break;
    default:
        diaSemanatexto = 'Dia Inexistente';

}

// if (diaSemana === 0){
//     diaSemanatexto = 'Domingo';

// }else if (diaSemana === 1){
//     diaSemanatexto = 'Segunda';
// } else if (diaSemana === 2){
//     diaSemanatexto = 'Terça-feira'
// } else if (diaSemana === 3){
//     diaSemanatexto = 'Quarta-feira'
// }else if (diaSemana === 4){
//     diaSemanatexto = 'Quinta-feira'
// } else if (diaSemana === 5){
//     diaSemanatexto = 'Sexta-feira'
// }else if (diaSemana === 6){
//     diaSemanatexto = 'Sabado'
// } else{
//     diaSemana = '';
// }

diaSemana = diaSemanatexto
console.log(diaSemana);

