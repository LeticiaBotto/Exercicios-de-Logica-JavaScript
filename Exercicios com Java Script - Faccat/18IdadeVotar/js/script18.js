alert("Idade para votar");
let ano = parseInt(prompt("Digite o ano em que nasceu: "))
let anoAtual = parseInt(prompt("Digite o ano atual: "))
let idade = anoAtual-ano 

if (idade < 0){
    alert("Valor invalido")
}else if (idade >= 18) {
    alert("Pode avotar, idade: "+idade)
}else{
    alert("Não pode votar, idade: "+idade)
}



