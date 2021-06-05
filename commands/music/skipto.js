module.exports = ({
    name: "skipto",
    aliases: ['skt'],
    description: "Saltar a una canción diferente en la cola",
    usage: "skipto <number>",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ Se saltó la canción al número de la cola "$message"!]
    $skipTo[$message]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$message!=;{description: You have to specify a queue number to skip to!}{color:RANDOM}]
    $onlyIf[$isNumber[$message]==true;{description: Please specify a valid queue number!}{color:RANDOM}]
    $onlyIf[$queueLength>$message;{description: That queue number doesn't exist!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})