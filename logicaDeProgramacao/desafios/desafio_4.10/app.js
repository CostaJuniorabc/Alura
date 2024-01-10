alert("Boas vindas ao nosso site!");

// Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt('Favor informar a nota final.');
console.log(`Nota informada - ${nota}`)

if (nota >= 7) {
    alert(`Você foi Aprovado por nota. Nota = ${nota}`)
    console.log(`Reprovado , Nota = ${nota}`)
} else {
    alert(`Você foi Reprovado por nota. Nota abaixo de 7`)
    console.log(`Reprovado , Nota = ${nota}`)
}
