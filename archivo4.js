// Arreglos en JavaScript

let numeros = []; 
numeros = [15, 80, 650, 50.30, -10];

document.write('Los valores del arreglo de números son: ', numeros, '<br>');

// Longitud de un arreglo: 
document.write('La cantidad de elementos del arreglo es: ', numeros.length, '<br>');

// Determinar último índice: 
frutas = ['Manzana', 'Pera', 'Durazno', 'Naranja'];
document.write('último elemento del arreglo de frutas es: ', 
    frutas[frutas.length - 1], '<br>'
);  

// Arreglos de tipo cadenas: 
document.write(numeros.toString(), '<br>');

// concatención de arreglos: 
let letras = ['a', 'b', 'c'];
let numeros2 = [1, 2, 3];
document.write('El arreglo resultante es: ', letras.concat(numeros2), '<br>');

// Eliminar el último elemento de un arreglo:
numeros.pop();
document.write("El arreglo actualizado es: ", numeros, '<br>');

// Insertar al final de un arreglo: 
numeros.push(100);
document.write("El arreglo actualizado es: ", numeros, '<br>');

// Eliminar el primer elemento de un arreglo:
numeros.shift(); 
document.write("El arreglo actualizado es: ", numeros, '<br>');

// Insertar al inicio de un arreglo:
numeros.unshift(90);
document.write("El arreglo actualizado es: ", numeros, '<br>');

/*
 * Eliminar elemetos a partir de un punto específico, Método a usar es: 
 * splice(posición inicial a eliminar, cantidad de elementos a eliminar);
*/ 
numeros.splice(2, 3);
document.write("El arreglo actualizado es: ", numeros, '<br>');

// Copiar un arreglo:
let cantidades = [100, 200, 300, 400, 500];

/* 
 * El método es el siguiente:
 * slice(indice inicial para copiar, cantidad de elementos a copiar 
 * menos uno); 
 * Es decir, copia hasta el elemento anterior al número indicado en 
 * el segundo argumento del método.
 */ 
let copia = cantidades.slice(1, 4);
document.write("El arreglo original es: ", cantidades, '<br>');
document.write("El arreglo copiado es: ", copia, '<br>');

// Ordenar un arreglo:
document.write("El arreglo original es: ", frutas, '<br>');
frutas.sort(); 
document.write("El arreglo ordenado es: ", frutas, '<br>');

// Invertir el orden de un arreglo:
frutas.reverse();
document.write("El arreglo invertido es: ", frutas, '<br>');
