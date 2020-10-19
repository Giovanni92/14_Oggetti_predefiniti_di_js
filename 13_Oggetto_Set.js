
//Oggetto Set Immagazzina valori, ma i valori dentro a questo oggetto sono UNIVOCI, non possono essere ripetuti

var flavors = new Set();
flavors.add(4);
flavors.add('Name');
let myFunc = () => {};
flavors.add({name:'Pluto', lastName: 'Castagna'});

//se provassi ad aggiungere un nuovo valore, esempio di nuovo 4, non lo aggiunge, 
// in quanto raccoglie solo dati univoci

flavors.add(4);
console.log(flavors);



//possimao verificare se un valore esiste dentro l'array
console.log(flavors.has(4));    //true

//cancelliamo valore
flavors.delete(4);

console.log(flavors);


//cicliamo l'array
flavors.forEach( val => console.log(val));

//navighiamo tra i valori usando il for
for (let val of flavors.values()) {
    console.log(val);
}

//il set ha un altro metodo (keys)
  //keys sarebbeero chiavi ovvero i valori
for ( let k of flavors.keys()) {
    console.log('k='+k);
}

//entries cicla un array e ritorna un array con due valori
for ( let [k, v] of flavors.entries()) {
    console.log(k + '= '+ v);
}

//l'output da due valori uguali, Name=Name, Object = Object

//per pulire completamente array
flavors.clear();
console.log(flavors);


//Se vogliamo creare un set a partire da un array:
let myArray = [2,3,3,3,3,7,7,8,9,9,45];
//per avere valori univoci creiamo un set da questo array
let uniqueValues = new Set(myArray);
console.log(uniqueValues);