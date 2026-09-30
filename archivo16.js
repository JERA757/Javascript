// Funciones con parámetro en JavaScript:
let resultado; 

let valorA, ValorB; 

function ingresarDatos(){
    valorA = parseInt(prompt("Ingrese el primer valor: "));
    valorB = parseInt(prompt("Ingrese el segundo valor: "));

    sumar(valorA, valorB); // Llamada a la función con los valores ingresados

}

function sumar(valor1, valor2){

    resultado = valor1 + valor2;
    alert("El resultado de la suma es: " + resultado);
} 

ingresarDatos();