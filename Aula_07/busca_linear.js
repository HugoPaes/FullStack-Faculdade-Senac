function buscaLinear(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i; // Retorna ao indice do elemento encontrado
    }
  }
  return -1; // Retorna -1 se o elemento não for encontrado
}

const regra = [10, 5, 4, 3, 2, 6, 7, 8, 9, 1];
const elementoBuscado = 4;
const indice = buscaLinear(regra, elementoBuscado);
console.log(`O elemento ${elementoBuscado} se encontra no índice ${indice}.`);

// Output:

// O elemento 4 se encontra no indice 2.