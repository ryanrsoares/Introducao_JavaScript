var prompt = require('prompt-sync')();


let n1 = prompt("digite um numero :");
    
    if (n1 < 0) {
        return console.log("seu numero eh negativo")
    }else if (n1 > 0) {
        return console.log("seu numero eh positivo")
    }else if (n1 == 0){
        return console.log("seu numero eh zero")
    }else{
        return console.log("seu numero eh decimal")
    }