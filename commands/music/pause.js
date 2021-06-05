module.exports = ({
    name: "pause",
    aliases: ['ps'],
    description: "Pausar la canción que se está reproduciendo actualmente",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏸ Se pausó la canción!]
    $pauseSong
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})