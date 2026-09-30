// Clases y Subclases en JavaScript: Herencia. 
// Con sus respectivos métodos get y set:

class Deportista{

    constructor(nombre, apellido){

        this.nombre = nombre;
        this.apellido = apellido;
    } 

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

}

class Futbolista extends Deportista{

    constructor(nombre, apellido, goles){

        super(nombre, apellido);

        this.goles = goles;
    }

    get goles(){
        return this._goles;
    }

    set goles(goles){
        this._goles = goles;
    }

}