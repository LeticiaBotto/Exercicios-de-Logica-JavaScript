alert("Combustivel")
let tipoCombustivel = prompt("Digite o tipo de combustível: 'a' para álcool e 'g' para gasolina: ")
let litros = parseFloat(prompt("Digite a quantidade comprada em litros de combustivel: "))
let combustivel
let desconto
let preco

if (tipoCombustivel == "a") {
   combustivel = "Álcool"
   preco = 2.90
   desconto = litros <= 20 ? 3 / 100 : 5 / 100
} else if (tipoCombustivel == "g") {
   combustivel = "Gasolina"
   preco = 3.30
   desconto = litros <= 20 ? 4 / 100 : 6 / 100
}

let valorFinal = litros * preco * (1 - desconto)

alert("O tipo de Combustível escolhido foi: " + combustivel + ", foram comprados: " + litros + " litros, valor total a ser pago: " + valorFinal.toFixed(2))

