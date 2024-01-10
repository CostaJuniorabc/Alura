alert("Boas vindas ao nosso site!");

// Crie uma variável "numero" e peça um valor com prompt 
// verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt("Informe um valor."));
console.log(`Valor informado : ${numero}`);

if (numero == 0) {
    alert(`Valor informado = ${numero} , Valor e Zero`);
    console.log(`Valor informado = ${numero} , Valor e Zero`);
} else if (numero > 0) {
    alert(`Valor informado = ${numero} , Valor e positivo`);
    console.log(`Valor informado = ${numero} , Valor e positivo`);
} else {
    alert(`Valor informado = ${numero} , Valor e negativo`);
    console.log(`Valor informado = ${numero} , Valor e positivo`);
}