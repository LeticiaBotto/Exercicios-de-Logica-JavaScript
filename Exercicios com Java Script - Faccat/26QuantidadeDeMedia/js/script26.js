alert("Quantidade media de produtos")
let item = prompt("Digite o item em estoque que deseja calcular: ")
let quantidadeItem = parseInt(prompt("Digite a quantidade atual de itens no estoque"))
let quantidadeMaxima = parseInt(prompt("Digite a quantidade maxima em estoque: "))
let quantidadeMinima = parseInt(prompt("Digite a quantidade minima em estoque: "))
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2

if (quantidadeMedia<=quantidadeItem){
    alert("Quantidade media: "+quantidadeMedia+" não efetuar compra do item: "+item)
}else{
    alert("Quantidade media: "+quantidadeMedia+" efetuar compra do item: "+item)
}



