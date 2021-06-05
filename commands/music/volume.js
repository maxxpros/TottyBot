module.exports = ({
    name: "volume",
    aliases: ['vol', 'v'],
    description: "Cambiar el volumen de la música",
    category: "music",
    usage: "volume <numero>",
    code: `$color[RANDOM]
    $description[🔊 Cambiaste el volumen a "$message".]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{color:RANDOM}{description:You must be in the same Voice Channel as the Bot!} {field:Bot's Voice Channel:<#$voiceID[$clientID]>} {field:User Voice Channel:<#$voiceID>}] 
    $onlyIf[$queueLength>0;{description:The queue is empty!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
    $onlyIf[$message[1]<=200;{description: The max Volume is "200"!}{color:RANDOM}] 
    $onlyIf[$message[1]>=1;{description: The min Volume is "1"!}{color:RANDOM}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]`
    }) 
