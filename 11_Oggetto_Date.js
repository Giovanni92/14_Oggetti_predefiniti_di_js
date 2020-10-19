
//esempi su come usare librerie oggetto Date
//per usare dichiarimao variabile

var data = new Date();
console.log(data.toString());

//se vogliamo mostrare ua data precisa
//anno, mese (0-11), giorno
var data2 = new Date(1892, 10, 5);
console.log(data2.toString());

//possiamo riciclare oggeto data e dargli nyuovi valori
data2.setFullYear(2020);
data2.setMonth(9);
data2.setDate(19);
data2.setHours(19);
data2.setMinutes(33);
data2.setSeconds(44);
console.log(data2.toString());

//mostra giorno del mese (numerico)
console.log(data2.getDate());
//mostra giorno della settimana(numerico)
console.log(data2.getDay()); 


//per combinarli insieme possiamo create un array
  //in js è da 0 a 6 e il primo gg della settimana è DOMENICA
var giorni = [
    'SUNDAY',
  'MONDAY', 'TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY', 
]

console.log(giorni[data2.getDay()]);