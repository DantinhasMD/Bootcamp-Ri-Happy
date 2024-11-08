/* Este desafio consiste em criar um programa em JavaScript que recebe três strings como entrada do usuário, 
cada uma contendo o nome de um brinquedo. O programa deverá exibir essas strings como uma lista HTML formatada, 
usando a tag ul para a lista e a tag li para cada item da lista. */

// Capturando os nomes dos brinquedos
let brinquedo1 = gets();
let brinquedo2 = gets();
let brinquedo3 = gets();

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
print(`<li>${brinquedo2}</li>`);
print(`<li>${brinquedo3}</li>`);
print("</ul>");