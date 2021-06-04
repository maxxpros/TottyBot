module.exports = ({
    name: "invite",
    aliases: ['add'],
    description: "Invitarme a mi server!",
    usage: "",
    category: "utility",
    code: `
        $var rpts = ["SÃ­", "No", "Tal vez", "No sÃ©", "Â¡Claro!", "Si <3", "No >:("]; // Las Respuestas
    
        $let pregunt = args.slice(1).join(' '); //Si falta la pregunta
        $if(!pregunt) return message.channel.send(':x: | Falta la pregunta.');
        

            $setTitle('Command | 8Ball')
            $setThumbnail(message.author.avatarURL)
            $addField('Su pregunta es:', args, true)
            $addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)], true)
        $message.channel.send(embed)`
})