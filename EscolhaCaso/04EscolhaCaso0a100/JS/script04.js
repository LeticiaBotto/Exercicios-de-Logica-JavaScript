alert("Classificação 0 a 100")
let numero = parseInt(prompt("Digite um numero: "))

switch (true) {
    case numero>=0 && numero<= 20:
        alert(numero + " A classificação é A")
        break
    case numero>=21 && numero<= 40:
        alert(numero + " A classificação é B")
        break
    case numero>=41 && numero<= 60:
        alert(numero + " A classificação é C")
        break
    case numero>=61 && numero <= 80:
        alert(numero + " A classificação é D")
        break
    case numero>=81 && numero <= 100:
        alert(numero + " A classificação é E")
        break
    default:
        alert("Valor inválido")
        break
}


