module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $description[<@$authorID> Pregunto $message $random[Si;No;TalVez;Claro;Imposible]!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la pregunta!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{description: Haci se usa: $getServerVar[prefix]8ball <preguta>}{color:RANDOM}]
    `
})