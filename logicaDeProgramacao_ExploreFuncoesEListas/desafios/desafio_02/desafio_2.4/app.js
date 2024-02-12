// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio 2.4';

console.log(`${titulo.innerHTML}`);

function mediaNumeros() {

        let n1 = prompt('Digite o primeiro número.');
        console.log(`Digite o primeiro número.`);
        console.log(`Numero digitado = ${n1}`);

        let n2 = parseInt(prompt('Digite o segundo número.'));
        console.log(`Digite o segundo número.`);
        console.log(`Numero digitado = ${n2}`);

        let n3 = parseInt(prompt('Digite o terceiro número.'));
        console.log(`Digite o terceiro número.`);
        console.log(`Numero digitado = ${n3}`);

        let resultadoMedia = calcularMedia(n1, n2, n3);
        alert(`A media dos seus números : ${resultadoMedia}`)
        console.log(`A media dos seus números : ${resultadoMedia}`);

}

function calcularMedia(a, b, c) {

        console.log(`Numero 1 digitado = ${a}`);
        console.log(`Numero 2 digitado = ${b}`);
        console.log(`Numero 3 digitado = ${c}`);

        soma = (parseInt(a) + parseInt(b) + parseInt(c));
        console.log(`Soma dos Numeros = ${soma}`)

        resultado = soma / 3; 
        let numeroArredondado = resultado.toFixed(2);

        return numeroArredondado;

}
