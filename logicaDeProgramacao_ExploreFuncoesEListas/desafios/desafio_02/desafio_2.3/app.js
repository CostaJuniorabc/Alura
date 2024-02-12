// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio 2.3';

console.log(`${titulo.innerHTML}`);

function chamaNumero() {

        let numeroInput = prompt('Digite um numero.');
        console.log(`Digite um numero.`);
        console.log(`Numero digitado = ${numeroInput}`);

        let resultadoDobro = calcularDobro(`${numeroInput}`);
        alert(`O dobro do seu número é : ${resultadoDobro}`)
        console.log(`O dobro do seu número é : ${resultadoDobro}`);

}

function calcularDobro(numero) {
        return numero * 2;
}
