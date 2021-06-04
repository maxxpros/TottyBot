module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $title[<@$authorID> Pregunto $message[1] $random[Si;No;TalVez;Claro;Imposible]!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la pregunta!}{color:RANDOM}]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]8ball <pregunta>}{color:RANDOM}]
    `
})