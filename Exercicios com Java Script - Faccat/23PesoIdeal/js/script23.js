alert("Peso Ideal")
let nome = prompt("Digite o seu nome: ")
let sexo = prompt("Digite seu sexo (m ou f): ")
let altura = parseFloat(prompt("Digite sua altura (com ponto ao em vez de virgula): "))
let pesoIdeal

if (sexo = "m") {
    pesoIdeal = (72.7 * altura) - 58
} else if (sexo = "f") {
    pesoIdeal = (62.1 * altura) - 44.7
}
alert(nome + ", seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg")



