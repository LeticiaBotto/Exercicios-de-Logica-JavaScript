alert("Media conceito")
let nota01 = parseFloat(prompt("Digite a primeira nota: "))
let nota02 = parseFloat(prompt("Digite a segunda nota: "))
let nota03 = parseFloat(prompt("Digite a terceira nota: "))
let mediaExercicios = parseFloat(prompt("Digite a média de exercicos: "))
let calculo = nota01 + (nota02 * 2) + (nota03 * 3) + mediaExercicios

if (calculo >= 9.0) {
   alert("Conceito A, nota: " + calculo)
} else if (calculo >= 7.5 && calculo < 9.0) {
   alert("Conceito B, nota: " + calculo)
} else if (calculo >= 6.0 && calculo < 7.5) {
   alert("Conceito C, nota: " + calculo)
} else if (calculo < 6.0) {
   alert("Conceito D, nota: " + calculo)
}