let selector = document.getElementById("miSelector");
let entrada = document.getElementById("miEntrada");
let boton = document.getElementById("miBoton"); 
let lista = document.getElementById("miListado"); 
let archivo = "series.json"; 

selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("change", mensajeModo); 
entrada.addEventListener("keydown", verificarEntrada); 
boton.addEventListener("click", buscar);

function cambiarArchivo(){

    archivo = selector.value; 
    let evento = new CustomEvent("cambioModo"); 
    selector.dispatchEvent(evento);
}

function mensajeModo(){

    alert("El archivo de búsqueda ahora es: " + selector.value);
}

function verificarEntrada(evento){

    if ((evento.keyCode < 65 || evento.keyCode > 90) && 
         evento.keyCode != 32 && evento.keyCode != 8){

            evento.preventDefault();
    } 
} 

function buscar(){

    lista.innerHTML = "";

    fetch(archivo).then(respuesta => respuesta.json()).
     then(function(salida){

        for(let item of salida.data){

            if (item.nombre.startsWith(entrada.value.toUpperCase())){

                let p = document.createElement("p");
                p.id = item.nombre; 
                p.innerHTML = item.sinopsis; 
                p.style.display = "none";
                let li = document.createElement("li");
                li.innerHTML = item.nombre; 

                li.addEventListener("mouseover", function(){

                    let p = document.getElementById(item.nombre);
                    p.style.display = "block";
                });

                li.addEventListener("mouseout", function(){

                    let p = document.getElementById(item.nombre);
                    p.style.display = "none";
                });

            }
        }
     }).catch(function (error){

        console.log(error);
     });
}
