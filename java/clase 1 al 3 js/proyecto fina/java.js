async function enviarCodigo() {
    const codigo = document.getElementById("codigo").value;
    const usuario = document.getElementById("usuario").value;
    const API_URL = "http://direccion-ip-de-la-cerradura/api/access-codes"; // este es par poder vincular la cerradura digital que se utilizara

    if (!codigo || !usuario) {
        document.getElementById("mensaje").innerText = " Ingrese todos los datos.";
        return;
    }

    const datos = {
        code: codigo,
        user: usuario,
        type: "temporary", 
        duration: 3600 
    };

    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer TU_TOKEN" 
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        
        if (respuesta.ok) {
            document.getElementById("mensaje").innerText = " Código agregado con éxito.";
        } else {
            document.getElementById("mensaje").innerText = " Error al agregar código.";
            console.error("Error:", resultado);
        }
    } catch (error) {
        document.getElementById("mensaje").innerText = " Error de conexión.";
        console.error("Error de conexión:", error);
    }
}