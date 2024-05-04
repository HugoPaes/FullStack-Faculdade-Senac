// Define uma função chamada linearSearch que recebe um array e um valor alvo como parâmetros de entrada
function linearSearch(array, alvo) {
    // Itera através de cada elemento do array
    for (let i = 0; i < array.length; i++) {
        // Verifica se o elemento atual é igual ao valor alvo
        if (array[i] === alvo) {
            // Se uma correspondência for encontrada, retorna o índice do alvo no array
            return i;
        }
    }
    // Se nenhuma correspondência for encontrada após iterar por todo o array, retorna -1
    return -1;
}

// Exemplo de uso:
// Define um array
const array = [10, 5, 7, 3, 2, 8];
// Define um valor alvo para procurar
const alvo = 7;
// Chama a função linearSearch com o array e o valor alvo como argumentos
const indice = linearSearch(array, alvo);
// Verifica se o índice retornado por linearSearch não é igual a -1
if (indice !== -1) {
    // Se o índice não for -1, registra uma mensagem indicando que o alvo foi encontrado e seu índice
    console.log(`Alvo ${alvo} encontrado no índice ${indice}.`);
} else {
    // Se o índice for -1, registra uma mensagem indicando que o alvo não foi encontrado no array
    console.log(`Alvo ${alvo} não encontrado no array.`);
}
