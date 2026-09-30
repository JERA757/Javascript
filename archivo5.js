// Ciclo condicional en JavaScript: if-else

let nombre, edad; 

nombre = prompt("¿Cuál es tu nombre?");
edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 18){
   document.write('¡Hola, bienvenido al sistema , ',nombre, ' eres mayor de edad!');
} else if (edad < 18){
   document.write('¡Hola, ',nombre, ' no eres mayor de edad!');
} else{
    document.write('¡Debes de ingresar un valor válido!'); 
}