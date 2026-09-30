// Creación de la clase Persona con atributos y métodos: 
class Persona{
    
    nombre = 'Homero';
    apellido = 'Simpson';
    correo = 'amantedelacomida@aol.com';
    direccion = 'Ave. Siempreviva 742';
    telefono = '555-1234';

    trabajar(){
        return 'Trabaja en la planta nuclear de Springfield';
    }

    estudiar(){
        return 'Escuela primaria de Springfield';
    }

}

const homero = new Persona();

document.write(homero.nombre + ' ' + homero.apellido + '<br>');
document.write(homero.trabajar() + '<br>');

const bart = new Persona();
document.write('Nombre: Bart ' + bart.apellido + '<br>');
document.write(bart.estudiar() + '<br>');