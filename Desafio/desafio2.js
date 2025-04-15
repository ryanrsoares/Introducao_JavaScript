let Objetos = [
    {Produto:"Vaso", preço: 10.90},
    {Produto:"Escova", preço: 20.00},
    {Produto:"Prato", preço: 5.90},
    {Produto:"Copo", preço: 6.90}
];

let valor = Objetos.map(Objetos => Objetos.Produto+ " - R$ "+Objetos.valor) 


console.log(valor);