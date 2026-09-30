// Ciclo do-while en JavaScript: 

let salida = prompt('Teclee el valor 0 para salir del ciclo'); 

do {
    document.write('El valor que tecleaste es: ' + salida + '<br>');
    salida = prompt('Teclee el valor 0 para salir del ciclo');

} while (salida != 0); 

document.write('<br>¡Has salido del ciclo!');