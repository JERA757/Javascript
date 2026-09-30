// Solicitudes http con credenciales: 

// Versión básica: 
/*
let usuario = 'usuario01';
let clave = '123456';

fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'GET', 
    credentials: 'include',
    headers: {
        'Authorization': 'Basic' + btoa(usuario + ':' + clave),
        'Content-Type': 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)).
catch(error => console.error('Error: ', error)); 
*/

// Versión Bearer: 
/* 
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'GET', 
    credentials: 'include',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)).
catch(error => console.error('Error: ', error));
 */

// Optar por el uso del caché: 
/*
 * Las opciones del caché son las siguientes: 
 * a) default: El navegador decide cuándo usar el caché. 
 * b) no-store: No se almacena nada en el caché.
 * c) reload: Se fuerza a recargar la información desde el servidor, 
 *    ignorando el caché.
 * d) no-cache: Se permite almacenar en caché, pero se verifica con el 
 *    servidor si hay cambios antes de usarlo.
 * e) force-cache: Se usa el caché siempre que esté disponible, 
 *    incluso si está desactualizado.
 * f) only-if-cached: Solo se usa el caché y no se hace ninguna solicitud 
 *    al servidor. Si no hay una respuesta en caché, se devuelve un error.
 */
/*
let token = 'miToken';
fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'GET', 
    credentials: 'include',
    cache: 'no-cache',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)).
catch(error => console.error('Error: ', error));
 */

// Manejar redirecciones: 
/*
 * Código de las redirecciones: 
 * 300, 301, 302, 303, 307, 308 (códigos de estado) 
 * a) follow: El navegador sigue automáticamente las redirecciones.
 * b) error: Se lanza un error si se encuentra una redirección.
 * c) manual: El navegador no sigue las redirecciones automáticamente,
*/
let token = 'miToken';
fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'GET', 
    credentials: 'include',
    cache: 'no-cache',
    redirect: 'manual',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
})
.then(respuesta => {

    if (respuesta.type === 'opaquedirect'){

        let nuevaDireccion = respuesta.headers.get('location');
        console.log('Redirigiendose a: ', nuevaDireccion);

    } else{

        return respuesta.json();
    }
})
.then(data => console.log(data)).
catch(error => console.error('Error generado: ', error));
