module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$authorID> Pregunto $message[1] $random[Si;No;TalVez;Claro;Imposible]!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la pregunta!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]

    `
})