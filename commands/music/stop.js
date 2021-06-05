module.exports = ({
    name: "stop",
    aliases: ['st'],
    description: "Detiene la canción que se está reproduciendo actualmente",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏹ Detuviste la canción!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})