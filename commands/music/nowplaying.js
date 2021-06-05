module.exports = ({
    name: "nowplaying",
    aliases: ['np'],
    description: "Ver la canción que se está reproduciendo actualmente",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏯ Canción que se está reproduciendo actualmente - **[$songInfo[title]\\]($songInfo[url])**]
    $thumbnail[$songinfo[thumbnail]]
    $addTimestamp
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]`
})
