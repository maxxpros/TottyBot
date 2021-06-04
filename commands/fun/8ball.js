module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "",
    category: "fun",
    code: `
    if (command === "8ball") { //command Definido
        var rpts = ["SÃ­", "No", "Tal vez", "No sÃ©", "Â¡Claro!", "Si <3", "No >:("]; // Las Respuestas
    
        let pregunt = args.slice(1).join(' '); //Si falta la pregunta
        if(!pregunt) return message.channel.send(':x: | Falta la pregunta.');
        
        const embed = new Discord.RichEmbed() //Creamos el embed
            .setTitle('Command | 8Ball')
            .setThumbnail(message.author.avatarURL)
            .addField('Su pregunta es:', args, true)
            .addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
        message.channel.send(embed)
    }`
})