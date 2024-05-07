// 1 - Tentem criar o algoritmo de 
// cálcular a área do círculo utilizando TYPESCRIPT 
// npm install typescript
// Quando termina de codar executar esse código abaixo:
// npx tsc calcularAreaCirculo.ts


//const idade: number = 20;

// Definindo uma função que calcula a área do círculo
function calcularAreaCirculo(raio: number): Number{
    const area: number = Math.PI * Math.pow(raio, 2);
    return area;
}

// Testando a função com um raio específico
// const raioDoCirculo: number = 5;
// const areaDoCirculo: number = calcularAreaCirculo(raioDoCirculo);
// console.log(`A área do círculo com raio ${raioDoCirculo} é ${areaDoCirculo}`);

console.log(calcularAreaCirculo(2));


