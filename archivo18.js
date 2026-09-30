// Programación orientada a objetos en JavaScript: 

var Auto = {
    marca: "Toyota",
    tipo: "Sedán",
    modelo: "Corolla",
    color: "Rojo",
    anio: 2020,
    radio: ['FM', 'AM', 'USB']
} 

document.write('Creación del objeto Auto: <br>');
document.write('Marca: ' + Auto.marca + '<br>');
document.write('Tipo: ' + Auto.tipo + '<br>');
document.write('Modelo: ' + Auto.modelo + '<br>');
document.write('Color: ' + Auto.color + '<br>');
document.write('Año: ' + Auto.anio + '<br>');
document.write('Radio: ' + Auto.radio.join(', ') + '<br>');