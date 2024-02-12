// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio 2.6';

console.log(`${titulo.innerHTML}`);

function numerosDig() {

        let n1 = prompt('Digite o número a ser multiplicado.');
        console.log(`Digite o número a ser multiplicado.`);
        console.log(`Numero digitado = ${n1}`);

        let numeroXNumero = multiplicaNumero(n1);
        alert(`O maior número digitado foi : ${numeroXNumero}`)
        console.log(`O maior número digitado foi : ${numeroXNumero}`);
}

function multiplicaNumero(a) {
        console.log(`1 - Numero digitado = ${a}`);
        
        return a * a ;
}
