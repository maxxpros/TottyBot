module.exports = ({
    name: "youdied",
    category: "fun",
    description: "youdied",
    usage: "youdied (user)",
    code: `
    $image[https://api.tomio.codes/api/youdied?url=$replaceText[$userAvatar[$findUser[$message]];webp;png]]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })