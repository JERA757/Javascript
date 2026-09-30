async function crearPost(titulo, contenido){

    try{

        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST', 
            headres: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({

                title: 'mi Titulo personal', 
                body: 'Un contenido personal', 
                userID: 1
            })
        });

        if (!respuesta.ok){

            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }

        let data = await (respuesta.json()); 
        console.log("Registro creado: ", data);

    }catch(error){

        console.error('Algo salió mal al crear el registro: ' + error);
    }
} 

crearPost("Un título de ejemplo", "Un contenido cualquiera");