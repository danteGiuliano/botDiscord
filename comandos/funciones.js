
/*
En este apartado van a estar todas las funciones del bot */
const configuracion = require("../config.json");
var prefijo = configuracion.prefijo;

function mensajes(client) {
    client.on("message", (message) => {
        /*Aqui van todos los metodos para que el bot reaccione, prej es un valor 
        predeterminado, que le di en la configuracion con el caracter -, esto es importante
        si no se pone el prefijo el bot reaccionara a cualquier ocurrencia de la palabra*/
        if (message.content.startsWith(prefijo+"ping")) {
            message.channel.send("Pong!");
        }
    
    
    
    
    
    
    
    });
}
module.exports={
    mensajes
}

