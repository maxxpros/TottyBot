module.exports = ({
    name: "lindometro",
    description: "Tu nivel de lindura!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $description[El nivel de lindura de <@$findMember[$message]> es es:
    :sunglasses: $random[0;100]% :sunglasses:!]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]lindometro}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})