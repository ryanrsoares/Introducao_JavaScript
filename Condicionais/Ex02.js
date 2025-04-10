var prompt = require('prompt-sync')();

let idade = prompt("Qual é a sua idade :");

if (idade >= 18) {
    console.log("voce eh maior de idade, pode tirar a carteira :) ")
}else if(Idade < 18) {
    console.log("voce eh meno de idade, nao pode tirar a carteira :( ")
}else {
    console.log("informação invalida")
}