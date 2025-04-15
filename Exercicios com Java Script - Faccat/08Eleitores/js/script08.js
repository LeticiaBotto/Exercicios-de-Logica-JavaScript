alert("Porcentagem de Eleitores")
let totalVotos = parseInt(prompt("Digite o numero total de votos na cidade: "))
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
let votosBrancos = parseInt(prompt("Digite a quantidade de votos em branco: "))
let porcentagemNulos = votosNulos/totalVotos*100
let porcentagemBrancos = votosBrancos/totalVotos*100
let votosValidos = totalVotos-(votosNulos+votosBrancos)
let porcentagemValidos = votosValidos/totalVotos*100

alert("A porcentagem dos votos são: "+porcentagemNulos+"% nulos; "+porcentagemBrancos+"% brancos; "+porcentagemValidos+"% validos")




