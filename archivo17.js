// Funciones con retorno en JavaScript:

/**
 * let resultado; 
 *
 * function sumar(a, b){
 *
 *   resultado = a + b; 
 *   return resultado;
 * } 
 * 
 * document.write(sumar(5, 3), '<br>'); // Imprime 8 en la página.
 */ 

function verColor(valor){

    valor = parseInt(prompt('Ingrese un número del 1 al 3 para ver un color: ')); 

    switch (valor) {
        case 1:
            return 'Rojo';
        case 2:
            return 'Amarillo';
        case 3:
            return 'Verde';
    
        default:
            return '¡Valor inválido!';
    }
} 

alert(verColor()); // Muestra el color correspondiente al número ingresado.