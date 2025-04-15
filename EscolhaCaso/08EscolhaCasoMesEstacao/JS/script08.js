alert("Estação do mes")
let mes = parseInt(prompt("Digite um mes em numero: "))

switch (true){
    case mes>=1 && mes<=3:
        alert("A estação escolhida foi primavera")
        break
    case mes>=4 && mes<=6:
        alert("A estação escolhida foi verão")
        break
    case mes>=7 && mes<=9:
        alert("A estação escolhida foi outono")
        break
    case mes>=10 && mes<=12:
        alert("A estação escolhida foi inverno")
        break
    default:
        alert("Valor invalido")
        break
}


