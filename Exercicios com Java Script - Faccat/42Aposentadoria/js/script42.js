alert("Aposentadoria")
let numeroIdentificacao= parseInt(prompt("Digite seu numero de indentificação: "))
let anoNascimento = parseInt(prompt("Digite o ano de seu nascimento, com quatro digitos: "))
let empresaAno = parseInt(prompt("Digite o ano em que entrou na empresa, com quatro digitos: "))
let idade = 2025 - anoNascimento
let totalEmpresa = 2025 - empresaAno

// || significa OU, sempre colocando em parenteses para ver o que verificar primeiro
if (idade >= 65){
   alert("Requer aposentadoria, identificação: "+ numeroIdentificacao)
}else if (totalEmpresa >= 30){
   alert("Requer aposentadoria, identificação: "+ numeroIdentificacao)
}else if (idade >= 60 && totalEmpresa >= 25){
   alert("Requer aposentadoria, identificação: "+ numeroIdentificacao)
} else {
   alert("Não requer aposentadoria, indentificação: "+numeroIdentificacao)
}
