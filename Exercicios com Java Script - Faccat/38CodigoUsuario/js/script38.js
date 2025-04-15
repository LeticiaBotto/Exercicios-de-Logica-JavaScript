alert("Codigo Usuario")
let codigo = parseInt(prompt("Por favor, digite seu usuario: "))

if (codigo == 1234) {
   let senha = parseInt(prompt("Digite a senha: "))
   senha == 9999 ? alert("Acesso permitido, olá usuario " + codigo) : alert("Senha incorreta")
} else {
   alert("Usuario invalido!")
}
