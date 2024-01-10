alert("Boas vindas ao nosso site!");

console.timeLog
let numero1 = prompt("Digite um número.");
console.log("Primeiro digitado pelo usuario:", numero1);
let numero2 = prompt("Digite mais um número.");
console.log("Segundo número digitado pelo usuario:", numero2);
let numero3 = prompt("Digite mais um número.");
console.log("Terceito número digitado pelo usuario:", numero3);
let numero4 = prompt("Digite mais um número.");
console.log("Quarto número digitado pelo usuario:", numero4);

let total = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4);
console.log("Total da soma dos número digitado pelo usuario:", total);

if (total >= 100 ){
    console.log("Parabéns, você venceu!", `Soma dos números:${total}`);
    alert("Parabéns, você venceu!", `Soma dos números:${total}`);
} else {
    console.log("Tente novamente para ganhar.", `Soma dos números:${total}`);
    alert("Tente novamente para ganhar.");
}