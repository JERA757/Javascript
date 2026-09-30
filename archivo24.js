// Forma de declarar y definir una clase en herencia de JavaScript:

// a) Declaración de Clases: 
class Papel{

    constructor(alto, ancho){

        this.alto = alto;
        this.ancho = ancho;
    }

}

// b.1) Expresión de clases: Anónimas
let Papel2 = class{

    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }   
}

// b.2) Expresión de clases: Nombradas
let Papel3 = class MiPapel{

    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

class PapelZ{

    constructor(alto, ancho){

        this.alto = alto;
        this.ancho = ancho;
    }

}