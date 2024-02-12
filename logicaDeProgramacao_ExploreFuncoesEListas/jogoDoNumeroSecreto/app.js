
exibirTextoNaTela('h1', 'Jogo do Número Secreto.');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
console.log(`Bem vindo ao Jogo do Numero Secreto.`)

let numeroSecreto = gerarNumeroAleatorio();
console.log(`Numero aleatorio = ${numeroSecreto}`)

// altera as informações que são exibidas na tela
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// informa a quantidade de vezes que o botaõ foi clicado
function verificarChute () {
    let chute = document.querySelector(`input`).value;
    console.log('O botão de chute foi clicado.'); // mostra quantas vezes o botão chute foi clicado
    console.log(`Chute e igual a número secreto ? `,chute == numeroSecreto); // esta comparando um valor
}

// gera um numero inteiro aleatorio de 1 a 100 
function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100 + 1 );
}

// let titulo = document.querySelector(`h1`);
// titulo.innerHTML = `Jogo do Número Secreto.`;

// let paragrafo = document.querySelector(`p`);
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';