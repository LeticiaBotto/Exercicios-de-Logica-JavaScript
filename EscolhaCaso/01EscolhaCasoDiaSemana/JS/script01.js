alert("Dia da semana")
alert("Digite um numero para escolher o dia da semana  \n (Considere que domingo é o primeiro dia)")
let diaSemana = parseInt(prompt("1 ,2, 3, 4, 5, 6, 7"));

switch (diaSemana) {
    case 1:
        alert("O dia escolhido é Domingo")
        break
    case 2:
        alert("O dia escolhido é Segunda-Feira")
        break
    case 3:
        alert("O dia escolhido é Terça-Feira")
        break
    case 4:
        alert("O dia escolhido é Quarta-feira")
        break
    case 5:
        alert("O dia escolhido é Quinta-Feira")
        break
    case 6:
        alert("O dia escolhido é Sexta-Feira")
        break
    case 7:
        alert("O dia escolhido é Sabado")
    default: 
        alert("O valor informado não corresponde a um dia da semana")
        break
}