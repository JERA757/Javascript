// Temporizador en JavaScript: 
let elementoSegundos = parseInt(document.getElementById("tiempoElegido").value); 

let elementoTextoAlarma = document.getElementById("textoAlarma");

function comenzarTiempo(){

    /**
     * Función de JavaScript que recibe por parámetro una cantidad 
     * específica de segundos para ejecutar una acción/método:
     */
    setTimeout(tiempoCumplido, 1000 * elementoSegundos);
} 

function tiempoCumplido(){

    // Se terminó el tiempo: 
    alert("¡Comenzó el tiempo!"); 

    // Método que extrae el contenido para actualizarlo:
    elementoTextoAlarma.textContent = "¡Encendido!";

    // Mofifica el estilo: 
    elementoTextoAlarma.style.color = "green";
}