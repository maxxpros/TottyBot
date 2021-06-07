module.exports = ({
    name: "rip",
    aliases: ['dead'],
    usage: "rip (user)",
    description: "⚰",
    category: "fun",
    code: `
    const Discord = require("discord.js");
    const NSFW = require("discord-nsfw");
    const nsfw = new NSFW();


    $color[RANDOM]
    $image[boobs]
    $cooldown[3s;{description:Un poco demasiado rápido allí. Esperar **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
})