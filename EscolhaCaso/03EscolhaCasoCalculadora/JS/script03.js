alert("Calculadora")
let numero01 = parseFloat(prompt("Digite o primeiro numero: "))
let numero02 = parseFloat(prompt("Digite o segundo numero: "))
let operacao = prompt("Digite a operação desejada (soma, subtracao, multiplicacao, divisao) para realizar o calculo: ")
let operacaoEscolhida

switch (operacao){
    case "soma":
        operacaoEscolhida = numero01+numero02
        alert(numero01+" mais "+numero02+" o resultado é: "+operacaoEscolhida) 
        break
    case "subtracao":
        operacaoEscolhida = numero01-numero02
        alert(numero01+" menos "+numero02+" o resultado é: "+operacaoEscolhida)
        break
    case "multiplicacao":
        operacaoEscolhida = numero01*numero02
        alert(numero01+" vezes "+numero02+" o resultado é: "+operacaoEscolhida)
        break
    case "divisao":
        operacaoEscolhida = numero01/numero02
        alert(numero01+" dividido "+numero02+" o resultado é: "+operacaoEscolhida)
        break
    default:
        alert("Valor inválido")
    }

