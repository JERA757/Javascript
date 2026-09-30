// Uso de la cláusula continue en un bucle for:
let palabra = 'Javascript';
let resultado = '';

for (let i in palabra) {
   
  if (palabra[i] == 'a'){
    continue; // Si la letra es 'a', se salta a la siguiente iteración
  }  else{
    resultado += palabra[i]; // Si no es 'a', se agrega la letra al resultado
  }
} 

document.write(resultado); // Imprime "Jvscript"
