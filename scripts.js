//Creo una funzione che ritorna un array di 5 numeri casuali
function generateRandomArray() {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 50 + 1);
    arr.push(num);
  }

  return arr;
}
