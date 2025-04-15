alert("Calculo hora extra")
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas em um mes: "))
let salarioHora = parseFloat(prompt("Digite o valor do salario por hora: "))
let horaExtra
let salarioFinal

if (horasTrabalhadas > 160){
    horaExtra = horasTrabalhadas - 160
    salarioFinal = salarioHora * horasTrabalhadas + salarioHora * horaExtra * 50/100
    alert("Valor total do salario é: "+salarioFinal)
}else{
    salarioFinal = salarioHora * horasTrabalhadas
    alert("Valor total do salario é: "+salarioFinal)
}




