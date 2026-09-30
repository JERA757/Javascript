// Funciones matemáticas presentes en Javascript: 

// Funciones de redondeo: 
var numero1 = Math.round(5.5); 
var numero2 = Math.round(5.3); 
document.write("el valor rednodeado del primer número es: ", numero1, "<br>");
document.write("el valor rednodeado del segundo número es: ", numero2, "<br>");

// Redondea hacia el siguiente número entero:
var numero3 = Math.ceil(5.1);
document.write("el valor redondeado hacia el siguiente número entero es: ", 
    numero3, "<br>");

// Redondea hacia el número entero anterior:
var numero4 = Math.floor(5.9);
document.write("el valor redondeado hacia el número entero anterior es: ", 
    numero4, "<br>");

// Funciones de ángulo: 
var angulo = Math.sin(45);
document.write("el valor del seno de 45 grados es: ", angulo, "<br>");

// Exponencial de un número:
var numero5 = Math.exp(2);
document.write("el valor de la exponencial de 2 es: ", numero5, "<br>");

// Logaritmo de un número:
var numero6 = Math.log(10);
document.write("el valor del logaritmo de 10 es: ", numero6, "<br>");

// Valor absoluto de un número: 
var numero7 = Math.abs(-5);
document.write("el valor absoluto de -5 es: ", numero7, "<br>");

// Valor aleatorio de un número entre 0 y 100: 
var numero8 = Math.round(Math.random() * 100);
document.write("el valor aleatorio entre 0 y 100 es: ", numero8, "<br>");

// Raíz cuadrada de un número:
var numero9 = Math.sqrt(64);
document.write("la raíz cuadrada de 64 es: ", numero9, "<br>"); 

// Potencia de un número:
var numero10 = Math.pow(2, 3);
document.write("el valor de 2 elevado a la potencia de 3 es: ", numero10, "<br>");

// Valores máximo y mínimo de un conjunto de números:
var maximo = Math.max(5, 10, 15);
var minimo = Math.min(5, 10, 15);
document.write("el valor máximo de los números es: ", maximo, "<br>");
document.write("el valor mínimo de los números es: ", minimo, "<br>");