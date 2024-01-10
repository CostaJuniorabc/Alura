alert("Boas vindas ao nosso site!");

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let  valor1 = parseInt( prompt("Informe o primeiro valor da subtração."));
console.log(`Valor 1 : ${valor1}`);

let valor2 = parseInt(prompt("Informe o segundo valor da subtração."));
console.log(`Valor 2 : ${valor2}`);

let resultado = valor1 - valor2 ;
alert(`resultado da subtração = ${resultado}`);
console.log(`resultado da subtração = ${resultado}`);
