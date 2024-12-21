

alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
// código omitido

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// //Desafio 1
// console.log('Boas vindas');

// //Desafio 2
// let nome = 'Gustavo';
// console.log(`Ola ${nome}!`)
// //Desafio 3
// let nome2 = 'Gustavo';
// alert(`Ola ${nome}`);
// //Desafio 4
// let linguagem = prompt('Qual linguagem de programacao voce mais gosta ?');
// console.log(`lingaguem e ${linguagem}`);
// //Desafio 5
// let valor1 = 2;
// let valor2 = 2;
// let resultado;
// resultado = valor1 + valor2;
// console.log(`resultado e ${resultado}`);
// //Desafio 6
// let valor3 = 5;
// let valor4 = 6;
// resultado2 = valor3 - valor4;
// console.log(`A diferenca entre ${valor3} e ${valor4} e igual a ${resultado2}`);
// //Desafio 7
// let idade = prompt('Qual sua idade?')
// if(idade >= 18){
//     console.log('Maior de idade');
// }else{
//     console.log('Menor de idade');
// }
// //Desafio 8
// let numero = prompt('Digite um numero ?');

// if(numero > 0){
//     console.log('Numero positivo')
// }else if(numero < 0){
//     console.log('Numero negativo');
// }else{
//     console.log('Numero e zero ')
// }
// //Desafio 9
// let numerico = 1;
// while(numerico <= 10){
//     console.log(numerico);
//     numerico++;
// }

// // Desafio 10
// let nota = 10;

// if(nota >= 7){
//     console.log('Aprovado');
// }else{
//     console.log('Reprovado');
// }
// //Desafio 11
// let aleatorio = Math.random();
// console.log(`${aleatorio}`);
// //Desafio 12
// let aleatorio2 = parseInt(Math.random() * 10 + 1);
// console.log(`${aleatorio2}`);

// // Desafio 13
// let aleatorio3 = parseInt(Math.random() * 1000 + 1);
// console.log(`${aleatorio3}`);


//desafio 1

// let contador = 1;

// while(contador < 10){
//     alert(`O numero [e] ${contador}`);
//     contador++
// }

//desafio 2
// let contador = 10;

// while(contador > 0){
//     alert(`O numero [e] ${contador}`);
//     contador--;
// }

//desafio 3
// let regressiva = prompt('Digite um numero para a contagem regressiva:');

// while(regressiva >= 0){
//   console.log(regressiva);
//   regressiva--;
// }

// desafio 4
// let numeroMaximo = prompt("Digite um número para a contagem progressiva:");;
// let contador = 0;

// while (contador <= numeroMaximo) {
//     console.log(contador);
//     contador++
// }


// código omitido

// código omitido

//exercicio 1
// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

//exercicio 2
// let numero = prompt('Digite um numero ');

// if(numero >= 0){
//     alert('Numero positivo');
// }else{
//     alert('numero negativo')
// }

//exercicio 3

// let pontuacao = prompt('Digite um numero: ');

// if(pontuacao >= 100){
//     alert('Parabéns, você venceu!')
// }else{
//     alert('Tente novamente para ganhar.')
// }

//exercicio 4
// let saldoConta = 2500;
// let mensagem = alert(`Seu saldo da conta é ${saldoConta}`);

//exercicio 5
// let nome = prompt('Qual seu nome ?');

// alert(`Bem vindo de volta ${nome}`);






// alert('Boas vindas ao nosso site!');
// let nome = 'lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemDeErro = alert('Erro! Preencha todos os campos');
// alert(mensagemDeErro);
// let nome = prompt('Qual seu nome ?');
// prompt('Qual sua idade ?');

// let idade = prompt('Digite a sua idade');
// if(idade >= 18){
//     alert('pode tirar a habilitacao');
// }


