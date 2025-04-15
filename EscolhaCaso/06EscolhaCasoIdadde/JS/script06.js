alert("Idade")
let idade = parseInt(prompt("Digite uma idade: "))

switch (true) {
    case idade >= 1 && idade <= 13:
        alert("Criança")
        break
    case idade >= 14 && idade <= 17:
        alert("Adolescente")
        break
    case idade >= 18 && idade <= 69:
        alert("Adulto")
        break
    case idade >= 70:
        alert("Idoso")
        break
    default:
        alert("Valor invalido")
        break
}

