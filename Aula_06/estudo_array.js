//Atividade Obrigatória - 1: Para construirmos algoritmos mais complexos, necessitamos do conhecimento de algo chamado "Array".
// Faça um estudo de 2 até 10 linhas explicando o que é um array, após faça um exemplo para que eu possa entender.

// Arrays são geralmente descritas como "lista de objetos"; elas são basicamente 
// objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado 
// em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está 
// em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas 
// com a lista, como laço através da lista e fazer a mesma coisa para cada valor. Talvez nós pegamos uma 
// série de produtos e seus preços armazenados em uma array, e nós queremos fazer um laço através de todos 
// eles e mostrar em um recibo, enquanto somamos todos os preços e mostramos o preço total ao final.

const array = ["a", "b", "c", "d", "e"]
console.log(array) // ['a','b','c','d','e' ]

array.reverse()
console.log(array); // ['e','d','c','b','a' ]
