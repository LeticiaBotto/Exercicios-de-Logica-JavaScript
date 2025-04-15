alert("Salario Mensal")
let salario = parseFloat(prompt("Digite seu salario mensal: "))
let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "))
let total = (salario*reajuste)/100 + salario
alert("O salario final é: "+total.toFixed(2)+" reais")






