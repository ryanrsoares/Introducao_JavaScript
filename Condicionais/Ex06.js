var prompt = require('prompt-sync')();

let dia = Number(prompt("digite um numero do dia da semana :"));

switch (dia) {
    case 1:
        console.log("O dia escolhido foi: Domingo")
        break;
    case 2:
        console.log("O dia escolhido foi: segunda")
        break;
    case 3:
        console.log("O dia escolhido foi: terca")
        break;
    case 4:
        console.log("O dia escolhido foi: Quarta")
        break;
    case 5:
        console.log("O dia escolhido foi: Quinta")
        break;
    case 6:
        console.log("O dia escolhido foi: Sexta")
        break;
    case 7:
        console.log("O dia escolhido foi: Sabado")
        break;
        
        default:
        console.log("O que o usuario digitou é invalido >:(")
        break;
}