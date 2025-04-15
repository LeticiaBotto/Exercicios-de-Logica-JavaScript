alert("Soma Idades")
let h1 = parseInt(prompt("Digite a idade do primeiro homem: "))
let h2 = parseInt(prompt("Digite a idade do segundo homem: "))
let m1 = parseInt(prompt("Digite a idade da primeira mulher: "))
let m2 = parseInt(prompt("Digite a idade da segunda mulher: "))
let soma1
let soma2

if (h1 > h2 && h1 < m1 && m2 < m1) {
   soma1 = h1 + m2
   soma2 = h2 + m1
   alert("A soma da idade do homem mais velho com a mulher mais nova é " + soma1 + ", e a soma do homem mais novo com a mulher mais velha é " + soma2)
} else if (h1 < h2 && h2 < m1 && m2 < m1) {
   soma1 = h2 + m2
   soma2 = h1 + m1
   alert("A soma da idade do homem mais velho com a mulher mais nova é " + soma1 + ", e a soma do homem mais novo com a mulher mais velha é " + soma2)
} else if (h1 < h2 && h2 < m2 && m1 < m2) {
   soma1 = h2 + m1
   soma2 = h1 + m2
   alert("A soma da idade do homem mais velho com a mulher mais nova é " + soma1 + ", e a soma do homem mais novo com a mulher mais velha é " + soma2)
} else if (h1 > h2 && h1 < m2 && m1 < m2) {
   soma1 = h1 + m1
   soma2 = h2 + m2
   alert("A soma da idade do homem mais velho com a mulher mais nova é " + soma1 + ", e a soma do homem mais novo com a mulher mais velha é " + soma2)
}
