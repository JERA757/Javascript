// Uso de la claúsula break en un bucle for: 

for (let i = 0; i < 10; i++) {

    document.write(i + "<br>");

    if (i === 5) {

        document.write('¡Este es el valor: ' + i + '!<br>');
        break; // Sale del bucle cuando i es igual a 5
    }
}
document.write('¡Se ha terminado el ciclo for!');