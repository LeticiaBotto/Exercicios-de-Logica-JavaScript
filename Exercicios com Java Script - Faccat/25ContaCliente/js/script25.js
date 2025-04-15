alert("Conta cliente")
let numeroConta = parseInt(prompt("Digite o numero da sua conta: "))
let saldo = parseFloat(prompt("Digite o saldo total da sua conta: "))
let debito = parseFloat(prompt("Digite o debito total da sua conta: "))
let credito = parseFloat(prompt("Digite o credito total da sua conta: "))
let saldoFinal = saldo-debito+credito

if (saldoFinal<=0) {
    alert("Saldo de: "+saldoFinal+"$ saldo da conta "+numeroConta+" é NEGATIVO")
}else{
    alert("Saldo de: "+saldoFinal+"$ saldo da conta "+numeroConta+" é POSITIVO")
}

