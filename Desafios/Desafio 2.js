/* O objetivo deste desafio é criar um programa que, ao receber três entradas (cor, tamanho da fonte e nome do brinquedo), 
nos retorne e formate o código CSS em uma tag HTML <h1> */

const cor = gets();
const tamanhoFonte = gets();
const nomeBrinquedo = gets();

const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);