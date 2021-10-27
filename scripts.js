//Salvo l'array casuale in una variabile globale per poterlo confrontare con l'input dell'utente
const randomArray = generateRandomArray();
let numbers;
//Faccio vedere i numeri all'utente tramite un alert
alert(randomArray);

//Avvia un timer di trenta secondi
//Allo scadere del tempo chiedere all'utente di inserire dei numeri con un prompt()
setTimeout(function () {
  numbers = prompt("Inserisci cinque numeri separati da spazi o virgole")

  //Converte i numeri in un array
  let userArray = [];
  if (numbers.includes(" "))
    userArray = numbers.split(" ")
  else
    userArray = numbers.split(",")
  console.log(userArray);

  //Controllare quali e quanti numeri sono stati individuati
}, 0)







//Creo una funzione che ritorna un array di 5 numeri casuali
function generateRandomArray() {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 50 + 1);
    arr.push(num);
  }

  return arr;
}
