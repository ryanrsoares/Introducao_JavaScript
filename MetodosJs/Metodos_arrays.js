// .lenght() => tamanho
// let frutas = ["Amora", "Limão", "Morango", "Uva verde", "Melancia"];

// // console.log() => imprime o seu código
// console.log(frutas.length);

//                0  1  2
// let numeros = [30,23,12]
// console.log(numeros.lenght)

// -------------------------------------------- //

// .reverse() => reverte a ordem do array
// let numeros = [70, 100, 50, 23];

// numeros.reverse();

// console.log(numeros);


// ------------------------------------------- //


// let nomes = ["Juliana", "Thiago", "Sophia", "Bryan"];

// .push() => adiciona mais um objeto no final
// nomes.push("Jean");

// .unshift() => adiciona um obejo no inicio
// nomes.unshift("Agatha");

// console.log(nomes);

// .pop() => remove um objeto no final
// nomes.pop();

// .shift() => remove um objeto no inicio
// nomes.shift("Juliana");

// .splice() => adiciona ou remove elementos do array
// nomes.splice(0,1);

// console.log(nomes);


// ------------------------------------------ //


// let nomeAnimais = ["Luna", "Felicia", "Branca"];

// .includes() => se existe no array e se existir, ele retornará true. se não, false
// console.log(nomeAnimais.includes("Bobby"));


// ------------------------------------------ //


// let valores = [30, 55, 40, 100];
// // quero os valores maiores que 50
// let maiores = valores.filter(num => num > 50);

// console.log(maiores);

// ------------------------------------------- // 


// .map() => definição: método usado em arrays que permite transformar os 
// elementos do array original em novos valores, criando um novo array, sem
// modificar o original

// // lista de nomes de alunos e notas
//  let alunos = [
//      {nome: "Ryan", nota: 10},
//      {nome: "Sillas", nota: 9999},
//      {nome: "Menegas", nota: 3},
//      {nome: "Spada", nota: 9}
// ];

//  // lista de nomes
//  let alunoNomes = alunos.map(alunos => alunos.nome);

// //Função
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// })

// let alunoNota = alunos.map(aluno => aluno.nota);

// // console.log(alunoNomes);

// ------------------------------------------- // 

// 2. criar um array com mensagens personalizadas

// let nomes = ["Negroghetti", "Ryan", "Dani", "Sillas"]

// // ola Dani
// //ola Ryan

// let mensagem = nomes.map(itemDoArrayNomes => `Ola, ${itemDoArrayNomes}`);
// // let mensagem2 = nomes.map(itemDoArrayNomes => "Ola, " + itemDoArrayNomes);

// console.log(mensagem);

// ------------------------------------------- // 

//3. pegar apenas os primeiro caranteres de nomes

// let nomes = ["Ryan", "Sillas", "Spada", "Meneghetti"]

// let inicialNomes = nomes.map(itemNomes => itemNomes[0]);

// console.log(inicialNomes);

// ------------------------------------------- // 

//4. kaue@gmail.com, pedro@hotmail.com, julia@outlook.com

// let emails = [
//     "kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
// ]

// let dominios = emails.map(element => element.split("@")[1]);

// console.log(dominios);

// ------------------------------------------- // 

