
//Math Object
//max min abs random sin cos exp pow

console.log(Math.max(4,66,12,98));  //98

//leggere assoluto numero
var num = -2;
console.log(Math.abs(num));     //lo uso per trasformare in positivi valori numerici negativi

//random
console.log(Math.random());    //ritorna un num random tra 0 e 1 decimale
//se vogliamo un num fino a 10 - round arrotonda
console.log(Math.round(Math.random() * 10));  
//da zero a cento
console.log(Math.round(Math.random() * 100));  


Math.ceil();    //arrotonda exess
Math.floor();   //difetto

//calcolare radice quadrata
console.log(Math.sqrt(16));
//la potenza
console.log(Math.pow(4, 2));


//Numero Eurelio alla seconda potenza+
console.log(Math.exp(2));

//calcolare sin e cos
console.log(Math.sin(2*Math.PI));  //gli diamo i valori in radiali, in questo caso PI