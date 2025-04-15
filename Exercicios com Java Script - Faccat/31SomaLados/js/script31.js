alert("Soma Lados")
let valorA = parseInt(prompt("Digite o primeiro valor: "))
let valorB = parseInt(prompt("Digite o segundo valor: "))
let valorC = parseInt(prompt("Digite o terceiro valor: "))

if (valorA < valorB+valorC && valorB < valorA+valorC && valorC < valorA+valorB){
   alert("Forma um triangulo, pois o valor do lado é menor que a soma dos outros lados")
}else{
   alert("Não forma um triangulo")
}

