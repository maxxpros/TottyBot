module.exports = ({
    name: "lindometro",
    description: "Tu nivel de lindura!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $description[El nivel de lindura de <@$findMember[$message]> es $random[0;100]!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la pregunta!}{color:RANDOM}]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]8ball <pregunta>}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})