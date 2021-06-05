module.exports = ({
    name: "resume",
    aliases: ['rs'],
    description: "Reanudar la canción en pausa actual",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[▶ Reanudó la canción!]
    $resumeSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})