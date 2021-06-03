module.exports = ({
    name: "botinfo", 
    aliases: ['botstats'],
    description: "Verifique la información / estadísticas del bot",
    usage: "",
    category: "information",
    code: `$title[Botinfo ($username[$clientID])]
    $color[RANDOM]
    $thumbnail[$userAvatar[$clientID]]
    $addField[RAM; $ramMB]
    $addField[CPU Usage; $cpu/100]
    $addField[Ping; $pingms]
    $addField[Tiempo prendido;$uptime]
    $addField[Comandos; $commandsCount]
    $addField[Usuarios;$allMembersCount]
    $addField[Canales;$allChannelsCount]
    $addField[Servers;$serverCount]
    $addField[Version;1.0.0]
    $addField[Creado;$creationDate[$clientID]]
    $addField[Developer;$userTag[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]`
    })
