alert("Desconto")
let nomeProduto = prompt("Digite o produto que deseja: ");
let quantidadeProduto = parseInt(prompt("Digite a quantidade que está levando: "));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do item: "));
let total = quantidadeProduto * precoUnitario;
let totalPagar

if (quantidadeProduto <= 5) {
   totalPagar = total - (total * 0.02);
   alert("Total a pagar de "+nomeProduto+" é: R$ " + totalPagar.toFixed(2) + ", o desconto é de 2%");
} else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
   totalPagar = total - (total * 0.03);
   alert("Total a pagar de "+nomeProduto+" é: R$ " + totalPagar.toFixed(2) + ", o desconto é de 3%");
} else if (quantidadeProduto > 10) {
   totalPagar = total - (total * 0.05);
   alert("Total a pagar de "+nomeProduto+" é: R$ " + totalPagar.toFixed(2) + ", o desconto é de 5%");
}

