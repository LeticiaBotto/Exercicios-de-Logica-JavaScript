alert("Media Simples");
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))

let media = (nota1 + nota2) /2

if (media >= 6) {
    alert("Aluno aprovado, media: "+media+toFixed(2))
}else{
    alert("Aluno reprovado, media: "+media)
}



