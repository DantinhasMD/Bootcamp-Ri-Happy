/* Seu objetivo é identificar quais brinquedos estão com estoque baixo (menos de 5 unidades) e quais estão com estoque 
adequado.

Passo a Passo:

- Entrada de Dados: O usuário fornecerá uma lista de brinquedos e suas respectivas quantidades, no formato Nome 
do Brinquedo:Quantidade. As entradas serão separadas por vírgula e espaço. Por exemplo: "Carrinho:10, Boneca:3, 
Bloco de Montar:15".
- Processamento dos Dados: Verifique o estoque de cada brinquedo utilizando a estrutura de repetição For. 
Se a quantidade for menor que 5, o brinquedo está com "Baixo"; caso contrário, está com "Adequado".
- Formatação da Saída: Para cada brinquedo, retorne seu nome seguido por sua situação ("Baixo" ou "Adequado").*/

let dados = gets().split(", ");
let resultado = [];

dados.forEach(item => { // repetir uma ação para cada elemento da lista
    let [nome, quantidade] = item.split(":"); //divide cada item onde encontra o caractere :
    quantidade = parseInt(quantidade); 

    let status = quantidade < 5 ? "Baixo" : "Adequado"; //operador ternário ? : - Comparação 

    resultado.push(`${nome}: ${status}`);
});
console.log(resultado.join(", "));