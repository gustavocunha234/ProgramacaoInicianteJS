
// código omitido

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute

// código omitido

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

    }
}
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


