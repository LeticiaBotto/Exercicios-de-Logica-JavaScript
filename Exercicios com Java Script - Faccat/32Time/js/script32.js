alert("Times")
let time01 = prompt("Digite o primeiro time: ")
let marcacoes1 = prompt("Quantos pontos o time " + time01 + " marcou?")
let time02 = prompt("Digite o segundo time: ")
let marcacoes2 = prompt("Quantos pontos o time " + time02 + " marcou?")

if (marcacoes1 > marcacoes2) {
   alert("O time "+time01+ " é vencedor tendo "+marcacoes1+" pontos")
} else if (marcacoes1 == marcacoes2){
   alert("Empate! Os dois times tem "+marcacoes1+" pontos")
}else{
   alert("O time "+time02+" é vencedor tendo "+marcacoes2+" pontos")
}
