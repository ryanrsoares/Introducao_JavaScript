var prompt = require('prompt-sync')();

let soma =0;

let n1 = Number(prompt("Digite um numero: "));

while (n1 !== 0) {
    soma += n1;
    n1 = Number(prompt("Digite sum numero(Caso queira sair, digite 0): "))
}

console.log(soma); 
