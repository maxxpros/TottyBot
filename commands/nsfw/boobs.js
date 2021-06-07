module.exports = ({
    name: "boobs",
    category: "nsfw",
    description: "Sostener un arma",
    usage: "gun (user)",
    code: `
    $image[https://api.tomio.codes/api/boobs]
    $color[RANDOM]
    $addTimestamp
    $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})