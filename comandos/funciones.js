
/*
En este apartado van a estar todas las funciones del bot */
const configuracion = require("../config.json");
var prefijo = configuracion.prefijo;
//////////////////////////////////////////Recursos////////////////////////////////
const { Client, MessageAttachment } = require('discord.js');
const attachment = new MessageAttachment("https://i.pinimg.com/236x/95/c1/af/95c1afc84961e53b3cc6ed042d5e824f.jpg");
//////////////////////////////////////////////////////////////////////////////////
function mensajes(client) {
    /*
    Funcion principal del bot */
    client.on("message", (message) => {
        const comando = message.content;
        /*las siguientes 2 sentencias evitan bucles infinitos entre bots-*/
        if (!comando === "-") return;
        if (message.author.bot) return;

        /*Comandos del bot*/
        switch (comando) {
            case "-ping":
                message.channel.send(":ping_pong: Pong!")
                break;
            case "-pong":
                message.channel.send(":ping_pong: Ping!")
                break;

            case "-bienvenida":
                message.channel.send({
                    embed: {
                        color: 343564,
                        description: 'bienvenide :computer:'
                    }
                })
                break;
            case "-help":
                message.channel.send({
                    embed: {
                        colorr: 3443567,
                        description: 'Comandos disponibles hasta el momento -ping :  responde con un pong!-pong : responde con un ping!-bienvenida : responde con un mensaje en formato'
                    }
                })
                break;
            case "F":
                message.channel.send(`${message.author},`, attachment);
                break;


        }



    });
    //Funciones para nuevos usuarios 
    client.on("guildMemberAdd", (member) => {
        var canal = client.channels.get('572903896239046656');
        canal.send(`${member.user}, bienvenide :computer:`);

    });

}
module.exports = {
    mensajes
}

