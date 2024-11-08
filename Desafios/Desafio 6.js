/* Neste desafio, você precisará calcular o frete para as compras feitas em um e-commerce de loja de 
Brinquedos. Cada compra tem um custo fixo de frete e um custo adicional por produto. Dessa forma, sua 
tarefa é calcular o valor total do frete com base na lista de produtos comprados, aplicando a taxa fixa e 
a taxa variável por produto. Para isso, você deve usar uma classe que gerencie a taxa fixa, a taxa por 
produto e calcule o frete total com base na quantidade total de produtos. */

class CalculadoraFrete {

    constructor(taxaFixa, taxaPorProduto) {
      this.taxaFixa = taxaFixa;
      this.taxaPorProduto = taxaPorProduto; 
    }

    calcularFrete(listaProdutos) {
        const produtos = listaProdutos.split(', ');
        
        const quantidadeTotal = produtos.reduce((total, produto) => { //SOMAR A QTD DE BRINQUEDOS - UNIDADES
          const quantidade = parseInt(produto.split(':')[1], 10);
          return total + quantidade;
        }, 0);
        
        const custoVariavel = this.taxaPorProduto * quantidadeTotal;
       
        const valorFrete = this.taxaFixa + custoVariavel;
        
        return valorFrete.toFixed(2);
    }
}

// Função principal para obter os dados de entrada e imprimir o resultado
function main() {
  
    const listaProdutos = gets();
    
    const taxaFixa = parseFloat(gets());
    
    const taxaPorProduto = parseFloat(gets());
    
    const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto);
    
    print(calculadora.calcularFrete(listaProdutos));
}

main();