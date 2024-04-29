console.log("Hello World!");

var nome = "Felipe";
var gps = 20.0000;
const pi = 3.14;

function SomarDoisValores(A, B){
    console.log(A + B)
};
SomarDoisValores(10, 10);
SomarDoisValores(20, 20);
SomarDoisValores(30, 30);
SomarDoisValores(40, 40);


function calcularIMC(peso, altura){
    let resultado = peso / (altura * altura);
    console.log(resultado.toFixed(2));

}

calcularIMC(80, 1.75);
//ENTRADA - DIGITAR
//PROCESSAMENTO - PROCESSAR AÇÃO
//SAIDA - ABRIR NAVEGADOR