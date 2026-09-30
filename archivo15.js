// Funciones declarativas en JavaScript: 

/*
 * function saludar(){
 *   document.write('¡Hola a todos! <br>');
 * }
 * 
 * saludar();
 */

function saludar(){
    
    let saludo = prompt('Ingrese un saludo');
    alert(saludo);
    despedir();
} 

function despedir(){
    document.write('¡Adiós a todos! <br>');
}

saludar();