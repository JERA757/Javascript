// Uso del sitch-case en JavaScript: 

let valor = parseInt(prompt("Ingrese un número del 1 al 3:"));

switch (valor) {
    case 1:
        document.write('Ingresó el número UNO (1) <br>');
        break;

    case 2:
        document.write('Ingresó el número DOS (2) <br>');
        break;

    case 3:
        document.write('Ingresó el número TRES (3) <br>');
        break;

    default:
        document.write('¡No es un número válido! <br>');
        break;
}