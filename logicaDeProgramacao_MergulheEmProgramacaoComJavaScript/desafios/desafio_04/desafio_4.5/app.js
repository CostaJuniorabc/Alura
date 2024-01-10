alert("Boas vindas ao nosso site!");

// Crie uma variável chamada "valor1" e outra chamada "valor2", 
// Atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let  valor1 = parseInt( prompt("Favor digitar o primeiro valor da soma."));
console.log(`Valor 1 : ${valor1}`);

let valor2 = parseInt(prompt("Favor digitar o segundo valor da soma."));
console.log(`Valor 2 : ${valor2}`);

let resultado = valor1 + valor2 ;
alert(`A soma dos valores = ${resultado}`);
console.log(`A soma dos valores e igual a : ${resultado}`);
