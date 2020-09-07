const configuracion = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const protocolo = require("./comandos/funciones.js");
var prefijo = configuracion.prefijo;
/*
Script para iniciar el bot */

client.on("ready", () => {
    console.log("Fai bot iniciado  :D");
    client.user.setStatus({
        status: "online",
        game: {
            name: "-help|owo",
            type: "PLAYING"
        }
    });
});
/*Buscare al comando deseado por el usuario en mi protocolo de mensajes.
si no se usa el prefijo de config, el bot no  ejecutara la funcion*/
protocolo.mensajes(client);

client.login(configuracion.token);