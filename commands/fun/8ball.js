module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "8ball <pregunta>",
    category: "fun",
    code: `$color[RANDOM]
    $description[<@$findMember[$message]> Pregunto $message es verdad? $randomText[Si;No;TalVez;Nose;Imposible;Nunca;Claro]!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la pregunta!}{color:RANDOM}]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]8ball <pregunta>}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})