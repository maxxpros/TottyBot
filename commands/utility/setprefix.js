module.exports = ({
    name: "setprefix",
    aliases: ['changeprefix', 'prefix'],
    usage: "setprefix <prefix>",
    description: "Cambiar el prefix del bot",
    category: "utility",
    code: `$description[✅ El nuevo prefix es "$message".]
    $color[RANDOM]
    $setServerVar[prefix;$message]
    $onlyIf[$message[1]!=;{description:Tienes que especificar un mensaje para cambiar el prefijo del servidor!
    Ejemplo - $getServerVar[prefix]}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
    })
