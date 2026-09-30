// Uso de la clase Date para obtener la fecha y hora actual: 
const fechaActual = new Date();
document.write(fechaActual + "<br>");

let fecha = new Date(); 
document.write('Hoy es: '+ fecha.getDate() + '<br>'); 
document.write('El mes es: '+ (fecha.getMonth() + 1) + '<br>');
document.write('El año es: '+ fecha.getFullYear() + '<br>');
document.write('La hora es: '+ fecha.getHours() + ':' + fecha.getMinutes() 
  + ':' + fecha.getSeconds() + '<br>'  );