// Temporizador en JavaScript: 
let elementoSegundos = 1000 * document.getElementById("tiempo").value; 

let elementoTextoAlarma = document.getElementById("textoAlarma");

let elementoSonidoAlarma = document.getElementById("sonidoAlarma");

function comenzarTiempo(){

    /**
     * Función de JavaScript que recibe por parámetro una cantidad 
     * específica de segundos para ejecutar una acción/método:
     */
    setTimeout(tiempoCumplido, elementoSegundos);
} 

function tiempoCumplido(){

    // Se terminó el tiempo: 
    // alert("¡Comenzó el tiempo!"); 

    // Método que extrae el contenido para actualizarlo:
    elementoTextoAlarma.textContent = "¡Encendido!";

    // Mofifica el estilo: 
    elementoTextoAlarma.style.color = "green";

    // Reproduce el sonido de la alarma:
    elementoSonidoAlarma.play();
}