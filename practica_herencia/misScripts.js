// Archivo donde están los scripts para la práctica de herencia en JavaScript: 
class Animal{

    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    } 

    mostrarInformacion(){
        return ` ${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }

} 

class Perro extends Animal{

    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    mostrarInformacion(){
        return `${super.mostrarInformacion()} - Raza: ${this.raza}`;
    }

}

class Gato extends Animal{

    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    mostrarInformacion(){
        return `${super.mostrarInformacion()} - Sexo: ${this.sexo}`;
    }

}

class Conejo extends Animal{

    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    mostrarInformacion(){
        return `${super.mostrarInformacion()} - Color: ${this.color}`;
    }
}

let perro = new Perro("Firulais", 20, 5, "Labrador");
let gato = new Gato("Michi", 5, 3, "Macho");
let conejo = new Conejo("Bunny", 2, 1, "Blanco");

let animales = [perro, gato, conejo];

function mostrarAnimales(){

    let listaAnimales = document.getElementById("listaAnimales");

    for (let animal of animales){

        // Métofdo que permite crear un item en una lista HTML:
        let item = document.createElement("li");

        // Muestra información en la lista de animales: 
        item.textContent = animal.mostrarInformacion();

        // Agrega el item a la lista de animales:
        listaAnimales.appendChild(item);
    }
    
}