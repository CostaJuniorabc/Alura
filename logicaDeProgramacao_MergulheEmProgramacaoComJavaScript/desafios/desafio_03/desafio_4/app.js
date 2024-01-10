alert("Boas vindas ao nosso site!");

let numeroMaximo = prompt("Digite um número para a contagem progressiva:");

let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);    
    contador ++; // subtrai 1 do valor
    alert(`contagem progressiva : ${contador}`);
}