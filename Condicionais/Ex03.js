var prompt = require('prompt-sync')();

let n1 = Number(prompt("DIgite um numero : "));

if (n1 %2 == 0) {
    console.log("O numero digitado eh par :)")
}else{
    console.log("O numero digitado eh impar :)")
}