alert("Macas compradas");
let macas = parseInt(prompt("Digite a quantidade de maças compradas: "))
let valorMacas

if (macas >= 12) {
    valorMacas = 1.00
}else{
    valorMacas = 1.30
}

let valorFinal = macas * valorMacas

alert("O valor final da sua compra é: "+valorFinal.toFixed(2))


