alert("Boas vindas ao nosso site!");

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);    
    numeroMaximo --; // subtrai 1 do valor
    alert(`contagem regressiva : ${numeroMaximo}`);
}