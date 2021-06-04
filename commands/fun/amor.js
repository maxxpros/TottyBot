module.exports = ({
    name: "amor",
    description: "Amor entre vos y una persona",
    usage: "amor <Persona> <Otra Persona>",
    category: "fun",
    code: `$color[RANDOM]
    $description[Amor entre $splitText[1] y $splitText[2] es un $random[0;100]%!]
    $onlyIf[$message[1]!=;{description: Tienes que especificar dos cosas!}{color:RANDOM}]
    $textSplit[$message; ]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]amor <Persona> <Otra Persona>}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})