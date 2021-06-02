module.exports = ({
    name: "setprefix",
    aliases: ['changeprefix', 'prefix'],
    usage: "setprefix <prefix>",
    description: "Cambiar el prefix del bot",
    category: "utility",
    code: `$description[✅ El nuevo prefix es "$message".]
    $color[RANDOM]
    $setServerVar[prefix;$message]
    $onlyIf[$message[1]!=;{description:You have to specify a message to change the server prefix! 
    Example - $getServerVar[prefix]}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
    })
