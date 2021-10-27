//Salvo l'array casuale in una variabile globale per poterlo confrontare con l'input dell'utente
const randomArray = generateRandomArray();
//Faccio vedere i numeri all'utente tramite un alert
alert(randomArray);

//Avvia un timer di trenta secondi
//Allo scadere del tempo chiedere all'utente di inserire dei numeri con un prompt()
let userNumbers;
setTimeout(function () {
  userNumbers = prompt("Inserisci cinque numeri separati da spazi o virgole");

  //Converte le stringhe in un array
  let userArray = [];
  if (userNumbers.includes(" "))
    userArray = userNumbers.split(" ")
  else
    userArray = userNumbers.split(",")

  //Converte le stringhe nell'array in numeri
  for (let i = 0; i < 5; i++) {
    userArray[i] = parseInt(userArray[i])
  }

  //Controllare quanti e quali numeri sono stati individuati
  let resultArray = [];
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    const currentNumber = userArray[i]
    if (randomArray.includes(currentNumber)) {
      resultArray.push(currentNumber)
      counter++;
    }
  }

  alert(`Hai indovinato ${counter} numeri. I numeri indovinati sono: ${resultArray}`)
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
