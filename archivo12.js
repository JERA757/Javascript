// Ciclo for-in en JavaScript: 

let palabra = "JavaScript";

for(let i in palabra){

    document.write(palabra[i] + "<br>");
} 

let vocal = 0; 

palabra = "Murcielago";

for (let i in palabra) {
    
    if (palabra[i] === "a" || palabra[i] === "e" || 
        palabra[i] === "i" || palabra[i] === "o" || 
        palabra[i] === "u") {

        vocal++;
    }
}

document.write("<br>El número de vocales en " + palabra + " es: " + vocal + "<br>");
document.write('¡Se ha terminado el ciclo for-in!');