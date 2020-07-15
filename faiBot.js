const configuracion = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const protocolo = require("./comandos/funciones.js");
var prefijo = configuracion.prefijo;
/*
Script para iniciar el bot */

client.on("ready",() => {
    console.log("Fai bot iniciado  :D");
});
//El client representa al bot, y el menssage es lo que se pasa por parametro.
client.on("message",(message) => {
        /*las siguientes 2 sentencias evitan bucles infinitos entre bots y que no reaccione
        Si no se usa el prefijo "-" */
        if (!message.content.startsWith(prefijo)) return;
        if (message.author.bot) return;
        /*Buscare al comando deseado por el usuario en mi protocolo de mensajes.
        si no se usa el prefijo de config, el bot no  ejecutara la funcion*/
        protocolo.mensajes(client);
});

client.login(configuracion.token);