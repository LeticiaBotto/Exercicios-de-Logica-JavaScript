alert("Venda e comissão")
let salarioFixo = parseFloat(prompt("Digite seu salario fixo: "))
let vendas = parseFloat(prompt("Digite o total do valor das vendas que realizou: "))
let salarioFinal

if (salarioFixo <= 1500){
    salarioFinal = (vendas * 3 / 100) + salarioFixo
} else {
    salarioFinal = ((vendas * 3 / 100) + (vendas * 5 / 100)) + salarioFixo
}
alert("Seu salario final total é: " + salarioFinal)