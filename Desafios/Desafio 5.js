/* Seu objetivo é ajudar a loja a identificar quais brinquedos estão elegíveis para descontos com base 
na quantidade comprada. Neste desafio, você vai receber uma lista de brinquedos, suas quantidades compradas 
e preços unitários. Sua tarefa é verificar quais brinquedos devem ter um desconto aplicado e quais devem 
o preço original. Você receberá um código que já inclui a função e o cálculo de desconto necessários. 
A função aplicará automaticamente um desconto de 10% para brinquedos cujo estoque comprado for igual ou 
maior que 5 unidades. Você deve utilizar essa função para processar a lista de brinquedos e formatar a 
saída conforme o esperado.

Entrada de Dados: O usuário fornecerá uma lista de brinquedos no formato "Nome: Quantidade, Preço Unitário".

Formatação da Saída: Para cada brinquedo, retorne uma string no formato "Nome: Preço com Desconto". */

function verificarPromocoes() {
    const entrada = gets(); 
    const produtos = entrada.split(' - '); 
    const resultado = [];

    produtos.forEach(produto => {
        const [nome, quantidadePreco] = produto.split(': '); 
        const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
        
        let precoFinal  = quantidade >= 5 ? precoUnitario * 0.9 : precoUnitario;
        
        resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
    });
     console.log(resultado.join(' - '));
}

verificarPromocoes();