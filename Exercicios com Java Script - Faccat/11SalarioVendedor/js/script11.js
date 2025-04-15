alert("Salario Vendedor")
let carrosVendidos = parseInt(prompt("Digite o total de carros que foram vendidos: "))
let comissao = parseFloat(prompt("Digite a comissao que o vendedor recebe por cada carro vendido: "))
let salario = parseFloat(prompt("Digite o salario do vendedor: "))
let valorVenda = parseFloat(prompt("Digite o valor total das vendas do vendedor: "))
let salarioTotal = salario + (carrosVendidos*comissao)+5/100*valorVenda
alert("O salario final é: "+salarioTotal+" reais")




