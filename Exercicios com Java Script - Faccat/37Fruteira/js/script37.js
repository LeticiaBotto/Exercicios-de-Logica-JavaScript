alert("Fruteira")
let morangos = parseInt(prompt("Por favor, digite em Kg a quantidade de morangos: "))
let macas = parseInt(prompt("Por favor, digite em Kg a quantidade de maças: "))
let totalPagar

if (morangos <= 5 && macas <= 5) {
   totalPagar = (morangos * 2.50) + (macas * 1.80)
} else if (morangos > 5 && macas > 5) {
   totalPagar = (morangos * 2.20) + (macas * 1.50)
} else if (morangos <= 5 && macas > 5) {
   totalPagar = (morangos * 2.50) + (macas * 1.50)
} else if (morangos > 5 && macas <= 5) {
   totalPagar = (morangos * 2.20) + (macas * 1.80)
}

alert("O total a pagar é: "+totalPagar.toFixed(2)+"$")