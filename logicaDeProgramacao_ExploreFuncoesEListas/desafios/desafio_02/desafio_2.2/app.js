let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio 2.2';

function chamaNome(){
        let seuNome = prompt('Digite o seu nome.');
        exibirOlaNome(`${seuNome}`);        
}

//  2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {                
        alert(`Olá ${nome}`)
        console.log(`Olá ${nome}`);
}