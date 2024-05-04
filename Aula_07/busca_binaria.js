function buscaBinaria(array, alvo) {
    let inicio = 0; // Define o índice inicial do intervalo de busca como 0
    let fim = array.length - 1; // Define o índice final do intervalo de busca como o comprimento do array menos 1

    // Enquanto o índice de início for menor ou igual ao índice de fim, continue a busca
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2); // Calcula o índice do meio do intervalo de busca

        // Verifica se o elemento do meio é igual ao alvo
        if (array[meio] === alvo) {
            return meio; // Retorna o índice se o alvo for encontrado
        } else if (array[meio] < alvo) {
            inicio = meio + 1; // Se o elemento do meio for menor que o alvo, atualiza o índice de início
        } else {
            fim = meio - 1; // Se o elemento do meio for maior que o alvo, atualiza o índice de fim
        }
    }

    return -1; // Retorna -1 se o alvo não for encontrado no array
}

// Exemplo de uso:
const array = [1, 3, 5, 7, 9, 11, 13];
const alvo = 7;
const indice = buscaBinaria(array, alvo);

if (indice !== -1) {
    console.log(`Alvo ${alvo} encontrado no índice ${indice}.`);
} else {
    console.log(`Alvo ${alvo} não encontrado no array.`);
}
