// Solicitud PUT: 
/* 
fetch('https://jsonplaceholder.typicode.com/posts/5', {

    method: 'PUT', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo Título',
        body: 'Nueva descripción'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)).
catch(error => console.error('Error: ', error)); 
*/

// Solicitud DELETE: 
/*
 fetch('https://jsonplaceholder.typicode.com/posts/5', {method: 'DELETE'})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error)); 
*/

// Solicitud PATCH: 
fetch('https://jsonplaceholder.typicode.com/posts/5', {

    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo Título',
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)).
catch(error => console.error('Error: ', error)); 