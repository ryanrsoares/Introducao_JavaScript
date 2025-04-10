var prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite sua nota: "));

if (n1 >= 6) {
    console.log("Voce foi aprovado, seja feliz")
} else {
    console.log("Voce foi reprovado, vai passar mais um ano comigo seu cabaço. >:)")
}