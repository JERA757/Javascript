// Cliclo condicional en JavaScript: Ternario

let numero = parseInt(prompt("Ingrese un número:"));
let resultado; 

resultado = (numero % 2 == 0)? "El número es PAR <br>" : "El número es IMPAR <br>";
document.write(resultado);