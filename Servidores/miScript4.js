// Estructura del AXIOS simple (GET): 
/* 
 axios.get('https://jsonplaceholder.typicode.com/posts')
.then(respuesta => console.log(respuesta.data))
.catch(error => console.error(error));
*/ 

// Estructura del AXIOS simple (POST):

let datos = {
    title: 'Un nuevo título', 
    body: 'Contenido nuevo bebe'
}; 

axios.post('https://jsonplaceholder.typicode.com/posts', datos)
.then(respuesta => console.log('¡El POST fue creado con éxito! ', respuesta.data))
.catch(error => console.error(error));

// Estructura compleja del AXIOS all() y spread(): 

/*
let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');

axios.all([pedido1, pedido2, pedido3])
.then(
    axios.spread((respuesta1, respuesta2, respuesta3) => {
        // Código a ejecutar: 
    })
)
.catch(error => {
    // Manejo de errores: 
});
*/

// Interceptores en AXIOS de JavaScript: 

/*
 * Interceptores de solicitudes deben ir antes de las peticiones 
 * del axios:  
*/
let miToken = 'el_Token';

axios.interceptors.request.use((configuracion) => {

    configuracion.headers.authorization = 'Bearer ${miToken}'; 
    return configuracion;

}, (error) =>{
    return Promise.reject(error);
});

/*
 * Interceptores de respuestas; al igual que el anterior,
 * deben ir antes de las solicitudes-respuestas: 
 */
axios.interceptors.response.use((respuesta) => {

    respuesta.data.customField = 'Nuevo campo';
    return respuesta;

}, (error) => {

    return new Promise.reject(error);
});