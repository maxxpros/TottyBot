module.exports = ({
    name: "boobs",
    aliases: ['shoot'],
    category: "fun",
    description: "Sostener un arma",
    usage: "gun (user)",
    code: `
    $image[https://api.tomio.codes/api/ass]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })