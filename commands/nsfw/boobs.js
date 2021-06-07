module.exports = ({
    name: "boobs",
    category: "fun",
    description: "Muestra un meme aleatorio de Reddit",
    usage: "", 
    code: `$djseval[(async()=>{
   channel.startTyping()
   const Discord = require("discord.js");
   const fetch = require('node-fetch')
   const NSFW = require("discord-nsfw");
   const nsfw = new NSFW();
   
   const image = await nsfw.pussy();
   const embed = new Discord.MessageEmbed()
   .setTitle(Boobs2)
   .setColor('RANDOM')
   .setImage(image)
   message.channel.send(embed)
   channel.stopTyping()
   })()]
   $cooldown[3s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
   })  