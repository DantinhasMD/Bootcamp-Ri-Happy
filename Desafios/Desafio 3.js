/* O objetivo deste desafio é criar um programa que, ao receber a faixa etária fornecida pelo usuário, categorize o 
brinquedo em uma das seguintes categorias: "Infantil", "Pre-Adolescente" ou "Adolescente".
O programa deverá retornar uma mensagem categorizando o brinquedo de acordo com a faixa etária fornecida. 
As categorias são:

- "Infantil" para idades de 0 a 9 anos.
- "Pre-Adolescente" para idades de 10 a 14 anos.
- "Adolescente" para idades de 15 a 18 anos. */

const idade = parseInt(gets());

let categoria;

if (idade <= 9) {
  categoria = "Infantil";
} else if (idade <= 14) {
  categoria = "Pre-Adolescente";
} else if (idade <= 18) {
  categoria = "Adolescente";
}

// Exibe o resultado no console
print(categoria);