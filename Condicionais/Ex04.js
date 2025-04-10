const senha = 123;

var prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite sua senha: "));

if (senha == n1) {
    console.log("A senha esta correta. Bem-vindo de volta :)")
} else {
    console.log("A senha esta incorreta.")
}