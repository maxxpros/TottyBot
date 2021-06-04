module.exports = ({
    name: "anime",
    category: "fun",
    description: "Poner modo anime a alguien",
    usage: "anime (user)",
    code: `
    $image[https://api.tomio.codes/api/anime?url=$replaceText[$userAvatar[$findUser[$message]];webp;png]]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })