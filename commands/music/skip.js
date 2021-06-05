module.exports = ({
    name: "skip",
    aliases: ['s'],
    description: "Omite la canción que se está reproduciendo actualmente",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ Se saltó la canción!]
    $skipSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})