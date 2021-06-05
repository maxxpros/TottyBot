module.exports = ({
    name: "lyrics",
    aliases: ['ly', 'l'],
    description: "Obtener la letra de la reproducción actual o de una canción específica",
    usage: "lyrics (song)",
    category: "music",
    code: `$color[RANDOM]
    $if[$argsCount>0]
    $title[Lyrics de $message]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $elseIf[$argsCount==0]
    $title[Lyrics for $songInfo[title]]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $endelseif
    $endif
    $botTyping
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]`
})
