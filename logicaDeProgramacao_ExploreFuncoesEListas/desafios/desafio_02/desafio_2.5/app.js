// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio 2.5';

console.log(`${titulo.innerHTML}`);

function numerosDig() {

        let n1 = prompt('Digite um número.');
        console.log(`Digite um número.`);
        console.log(`Numero digitado = ${n1}`);

        let n2 = prompt('Digite outro número.');
        console.log(`Digite outro número.`);
        console.log(`Numero digitado = ${n2}`);

        let maiorQue = encontrarMaior(n1, n2);
        alert(`O maior número digitado foi : ${maiorQue}`)
        console.log(`O maior número digitado foi : ${maiorQue}`);
}

function encontrarMaior(a, b) {
        console.log(`1 - Numero digitado = ${a}`);
        console.log(`2 - Numero digitado = ${b}`);
        return a > b ? a : b;
}
