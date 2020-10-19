//JSON sta per js Object Notation
  //permette di parsificare e codificare un obj in JSON e un JSON in un oggetto
    //standard di trasmissione dati indipendentemente dalla piattaforma che si utilizzi e linguaggio di programmazione
   //è uno standard per scambiare info, basato sugli oggetti di js ma ha una sua sintassi


var obj = {

    name:'Giovanni' //chiave valore
};

//per convertire questo oggetto in JASON faccio: 
JSON.stringify(obj);    //prende un oggetto e lo converte in una stringa JSON
console.log(JSON.stringify(obj));   //{"name":"Giovanni"}

//la rappresentazione in JSON è la chiave seguita dal valore racchiuisi tra virgolette

//parsifichiamo stringa json in oggetto js
  //immatinqndo che questo valore arrivi dal server e che lo dobbiamo parsificar ein oggetto
var jsonString = '{"name" : "Bob", "lastName":"Sinclair"}';

//js parsifica il JSON in oggetto, convertendolo
var mioObj = JSON.parse(jsonString);
console.log(mioObj);



//che tipo di valori posso mettere in un oggetto JSON
//number, string, null, object, array, true , false
  //* le proprietà sono di tipo strinìg e vanno tra virgolette

  var newJson = '{"isMarried" : true, "indirizzo": {"via":"racconigi"}, "materie": [1,2,3,4,5]}';  
  //isMarried di tipo booleano
  //metto indirizzo con valore di tipo obj
  //materie di tipo array
  console.log(JSON.parse(newJson));

  var dati = JSON.parse(newJson);
  console.log(dati.indirizzo.via);
