alert("Boas vindas ao nosso site!");

// Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
// exibindo uma mensagem apropriada no console.

let idade = parseInt(prompt("Informe a sua idade."));
console.log(`idade informada : ${idade}`);

if (idade >= 18) {
    alert(`idade informada : ${idade} , Parabéns você e maior de 18 anos. Pode entrar na balada !!!`);
    console.log(`idade informada : ${idade} , Parabéns você e maior de 18 anos. Pode entrar na balada !!!`);
} else {
    alert(`idade informada : ${idade} , Infelizmente você e menor de 18 anos. Não pode entrar na balada !!!`);
    console.log(`idade informada : ${idade} , Infelizmente você e menor de 18 anos. Não pode entrar na balada !!!`);
}

