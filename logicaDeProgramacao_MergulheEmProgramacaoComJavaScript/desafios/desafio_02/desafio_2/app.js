alert("Boas vindas ao nosso site!");

let numero = prompt("Digite qualquer número");
console.log("Numero digitado pelo usuario:", numero);

if (numero >= 0 ){
    alert("número digitado pelo usuário é positivo.", `numero:${numero}`);
    console.log("número digitado pelo usuário é positivo");
} else {
    alert("número digitado pelo usuário é negativo");
    console.log("número digitado pelo usuário é negativo");
}