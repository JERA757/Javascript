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

function comenzarReloj(){

    setInterval(mostrarHora, 1000);
} 

function mostrarHora(){

    let tiempoActual = new Date(); 

    let hora = String(tiempoActual.getHours()).padStart(2, "0");
    let minutos = String(tiempoActual.getMinutes()).padStart(2, "0");
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");

    let textoHora = hora + ':' + minutos + ':' + segundos;
    elementoTextoAlarma.textContent = textoHora;
}