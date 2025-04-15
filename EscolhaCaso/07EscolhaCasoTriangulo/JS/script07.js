alert("Triangulo")
let lado1 = parseInt(prompt("Digite o primeiro lado do triangulo: "))
let lado2 = parseInt(prompt("Digite o segundo lado do triangulo: "))
let lado3 = parseInt(prompt("Digite o terceiro lado do triangulo: "))

switch (true) {
    case (lado1 == lado2 && lado2 == lado3 && lado1 == lado3):
        alert("Equilatero, todos os lados iguais")
        break
    case (lado1 == lado2 && lado1 !== lado3 && lado2 !== lado3):
        alert("Isosceles, dois lados iguais e um diferente")
        break
    case (lado1 !== lado2 && lado1 == lado3 && lado2 !== lado3):
        alert("Isosceles, dois lados iguais e um diferente")
        break
    case (lado1 !== lado2 && lado1 !== lado3 && lado2 == lado3):
        alert("Isosceles, dois lados iguais e um diferente")
        break
    case (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3):
        alert("Escaleno, todos os lados diferentes")
        break
    default:
        alert("Valor invalido")
        break
}

