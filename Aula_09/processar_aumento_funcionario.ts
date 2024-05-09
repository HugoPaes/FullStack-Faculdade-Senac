// Criar um algoritmo que tenha um funcionário criado chamado "Roberto" e
// uma função que pode trazer o salário do funcionário aumentado em 
// uma porcentagem(Obs: não vai alterar o salário dele, vai apenas trazer o valor aumentado em porcentagem).
// 1 - Faça a definição da interface "Funcionario" que representa um funcionário da empresa.
//     id: number;
//     nome: string;
//     cargo: string;
//     salario: number;
//     departamento: string;
// 2 - Criar uma função chamada "calcularAumentoSalario" que terá dois parâmetros sendo eles um "funcionario" do tipo "Funcionario"
// e "percentualAumento" do tipo "number".
// 3 - Criar a seguinte constante dentro da primeira linha de "calcularAumentoSalario"
//  const aumento: number = funcionario.salario * (percentualAumento / 100);
// 4 - A função ao fim deve retornar funcionario.salario + aumento
// 5 - Crie o seguinte funcionário para testarmos a função
// const Roberto: Funcionario = {
//     id: 1,
//     nome: "João",
//     cargo: "Desenvolvedor",
//     salario: 5000,
//     departamento: "TI"
// };
// 6 - Passe os valores e rode a função dentro de um console.log() para ver o resultado.
// Obs: Execute o código com npx ts-node "nome_do_arquivo"
// 7 - No final do arquivo coloque essa linha para ver o valor do objeto atualizado com o novo salário.
// console.log(`Salário antes do aumento para ${Roberto.nome}: R$${Roberto.salario.toFixed(2)}`);
// Obs: Execute o código com novamente npx ts-node "nome_do_arquivo"
// Obs: Nosso código não vai trocar diretamente o valor do salario de Roberto, apenas retornar o valor total aumentado.

interface IFuncionario {
    id: number;
    nome: string;
    cargo: string;
    salario: number;
    departamento: string;
}



const Roberto: IFuncionario = {
    id: 1,
    nome: "João",
    cargo: "Desenvolvedor",
    salario: 5000,
    departamento: "TI"
};


function calcularAumentoSalario(funcionario: IFuncionario, percentualAumento: number): number {
    const aumento: number = funcionario.salario * (percentualAumento / 100);
    return funcionario.salario + aumento;
}
const novoSalario = calcularAumentoSalario(Roberto, 10);
console.log("Novo salário de " + Roberto.nome + ": R$" + novoSalario);