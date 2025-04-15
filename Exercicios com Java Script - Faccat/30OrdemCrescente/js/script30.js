alert("Ordem decrescente")
let numero01 = parseInt(prompt("Digite o primeiro numero: "))
let numero02 = parseInt(prompt("Digite o segundo numero: "))
let numero03 = parseInt(prompt("Digite o terceiro numero: "))

if (numero01>numero02 && numero02>numero03){
   alert("A ordem é: "+numero01+"; "+numero02+"; "+numero03)
}else if (numero02>numero01 && numero01>numero03){
   alert("A ordem é: "+numero02+"; "+numero01+"; "+numero03)
}else if (numero03>numero01 && numero01>numero02){
   alert("A ordem é: "+numero03+"; "+numero01+"; "+numero02)
}else if (numero03>numero02 && numero02>numero01){
      alert("A ordem é: "+numero03+"; "+numero02+"; "+numero01)
}else if (numero02>numero03 && numero03>numero01){
   alert("A ordem é: "+numero02+"; "+numero03+"; "+numero01)
}else if (numero01>numero02 && numero03>numero02){
   alert("A ordem é: "+numero01+"; "+numero03+"; "+numero02)
}
