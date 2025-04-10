var prompt = require('prompt-sync')();

let dia = Number(prompt("digite um numero do mês :"));

switch (dia) {
    case 1:
        console.log("O dia escolhido foi: Janeiro")
        break;
    case 2:
        console.log("O dia escolhido foi: Fevereiro")
        break;
    case 3:
        console.log("O dia escolhido foi: Março")
        break;
    case 4:
        console.log("O dia escolhido foi: Abril")
        break;
    case 5:
        console.log("O dia escolhido foi: Maio")
        break;
    case 6:
        console.log("O dia escolhido foi: Junho")
        break;
    case 7:
        console.log("O dia escolhido foi: Julho")
        break;
    case 8:
        console.log("O dia escolhido foi: Agosto")
        break;
    case 9:
        console.log("O dia escolhido foi: Setembro")
        break;
    case 10:
        console.log("O dia escolhido foi: Outubro")
        break;
    case 11:
        console.log("O dia escolhido foi: Novembro")
        break;
    case 12:
        console.log("O dia escolhido foi: Dezembro")
        break;
        
        default:
        console.log("O que o usuario digitou é invalido >:(")
        break;
}