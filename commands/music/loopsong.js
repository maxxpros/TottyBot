module.exports = ({
    name: "loopsong",
    aliases: ['lps', 'ls'],
    description: "Repite la canción actual",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopSong;true;Ahora se esta repitiendo la canción!];false;Ya no se esta repitiendo la canción.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
