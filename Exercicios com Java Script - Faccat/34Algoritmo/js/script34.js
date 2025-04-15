alert("Algoritmo")
let valorX = parseInt(prompt("Digite o primeiro valor: "))
let valorY = parseInt(prompt("Digite o segundo valor: "))
let valorZ = (valorX*valorY) + 5

if (valorZ <= 0) {
   alert("Resposta A, valor é "+valorZ)
} else if (valorZ <= 100){
   alert("Resposta B, valor é "+valorZ)
}else{
   alert("Resposta C, valor é "+valorZ)
}

//respostas 11 B; 455 C; -2 A; -5 A; 155 C