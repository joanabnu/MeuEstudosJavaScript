// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
const data = new Date(); // a, m, d,h,m,s,ms
console.log('Dia',data.getDate());
console.log('Mes', data.getMonth()); // Mes começa do zero 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg',data.getSeconds());
console.log('Ms',data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - domingo, 6 - Sabado
console.log(data.toString());
console.log(Date.now());