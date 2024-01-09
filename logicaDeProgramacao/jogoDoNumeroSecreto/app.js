alert("Olá Mundo !!!");
alert("Boas-Vindas ao jogo do Número Secreto.");

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log('Valor do numero secreto:', numeroSecreto);
let numeroChute;
let tentativas = 1;

// Adicione um console.log para verificar o valor de "numeroChute" após a entrada do usuário
console.log('Valor do chute:', numeroChute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', numeroChute == numeroSecreto);

//enquanto chute não for igual ao numero secreto 
while (numeroChute != numeroSecreto) {

    numeroChute = prompt("Escolha um numero entre 1 e 100");

    // Se chute for igual ao número secreto
    if (numeroChute == numeroSecreto) {
        break;

    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O numero secreto é menor que : ${numeroChute}`);
            console.log("Você não descobriu o número secreto.");
        } else {
            alert(`O numero secreto é maior que ${numeroChute}`);
            console.log("Você não descobriu o número secreto.");
        }
        // tentativas = tentativas + 1; // soma a quantidade de tentativas
        tentativas++; // soma a quantidade de tentativas 
    }

}

// operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
console.log("Isso ai! Você descobriu o número secreto", numeroSecreto);

// mesma coisa do operador ternario
//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//    console.log("Isso ai! Você descobriu o número secreto", numeroSecreto);
//
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//    console.log("Isso ai! Você descobriu o número secreto", numeroSecreto);
//}

// serve para comentar
// alert("Você errou :(")
// console.log("Você não descobriu o número secreto.");
// console.log('O número secreto era ' + numeroSecreto);