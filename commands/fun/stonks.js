module.exports = ({
    name: "stonks",
    category: "fun",
    description: "STONKS",
    usage: "stonks (user)",
    code: `
    $image[https://api.tomio.codes/api/stonks?url=$replaceText[$userAvatar[$findUser[$message]];webp;png]]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })