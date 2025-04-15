alert("Soma maior numero")
let numero01 = parseInt(prompt("Digite o primeiro numero: "))
let numero02 = parseInt(prompt("Digite o segundo numero: "))
let numero03 = parseInt(prompt("Digite o terceiro numero: "))
let somaMaior

if (numero01>numero02 && numero02>numero03){
   somaMaior = numero01+numero02
   alert("A soma dos maiores numeros é: "+somaMaior)
}else if (numero02>numero01 && numero01>numero03){
   somaMaior = numero02+numero01
   alert("A soma dos maiores numeros é: "+somaMaior)
}else if (numero03>numero01 && numero01>numero02){
   somaMaior = numero03+numero01
   alert("A soma dos maiores numeros é: "+somaMaior)
}else{
   somaMaior = numero03+numero02
   alert("A soma dos maiores numeros é: "+ somaMaior)
}


