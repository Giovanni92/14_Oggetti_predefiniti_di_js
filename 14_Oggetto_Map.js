//Lo usiamo come DIZIONARIO DI CHIAVI E CVALORI
 //le chiavi possono essere di qualunque tipo
//possimao sapere la sua dimensione con .size
 //viene solitamente usato con un ciclo FOR per avere accesso ai dati


 //come veniva usato prima (oggetto Chiave - Valore)
 const provinces = {
     'TO' : 'TORINO',
     'MI' : 'MILANO'

 };
 //per accedere all'oggetto chiave valore (accediamo con chiave)
//  console.log(provinces.MI);
  //utilizziamo Oggetto come Dizionario
 //il PROBLEMA è che con un oggetot non abbiamo modo di sapere quant valori abbiamo al suo interno

//La differenza tra oggetto e map è che in un oggetto le chiavi sono strinfhe
 //Con le map le chiavi possono essere qualunque cosa, anche fuinzioni o array

const myFunc = () => {};
provinces[myFunc] = 'This is my func';  //possiamo aggiungere funzione all'obj ma verrà trasformata in stringa
// console.log(provinces[myFunc]);

//se cicliamo l'oggetto notiamo che il typeof della dunzione è string
for(let key in provinces) {
    // console.log(key);
    // console.log(typeof key);
}



//Ora utiliazziamo Map
let myDict = new Map();
const name = 'string key';
const func = () => {};
const obj = {name:'Tyranitar', type:'grass'};

//per usare queste chiavi e inserire i valori usiamo set
myDict.set(name, 'This is a string');
myDict.set(func, 'This is a function');
myDict.set(obj, 'This is an object');
//dimesnione
console.log('Size of my dict =' +myDict.size);
//cerchiamo 
console.log(myDict.get(obj));

//cicliamo questo oggetto tipo Map
for( [k, v] of myDict.entries()) {  //k la faccio stare per key, v per value
    console.log(typeof k);
}

//se vogliamo solo i valori
myDict.forEach((v, k) => {
    
    console.log(v);
});



//Per riassumere

//Quando vogliamo creare un Record con metodi e prop come se fosse un istanza di una classe, 
  //allora usiamo l'oggetto Object

//Se abbiamo bisogno di creare un dizionario chiave valore e avere accesso a questi valori,
  //ciclando, o avere diversi tipi di chiavi o farci un idea del numero di vlaori all'interno
    //dell'oggetto, allora usiamo Map anzichè l'oggetto normale

