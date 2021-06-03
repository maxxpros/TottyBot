const dbd = require("dbd.js")

const bot = new dbd.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: "ODE4Njc5MzY1NTIzOTk2Njgy.YEbkkw.TneNRkOOThHNHNqrGviHaGlpfM0", // change TOKEN with your bot token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>'] // you may change the bot's main prefix in vars.js
})

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
})

bot.status({
  text: `En $serverCount servers┃.help`, // put any text
  type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
  status: "online", // online, dnd, idle, invisible
  time: 75 // amount of times where you can change the bot status (if have multiple statuses)
  })


    // FOR STREAMING STATUS USE THIS
    // bot.status({
    // text: "text", 
    // type: "STREAMING", 
    // url: "enter url/link"
    //   })
    // remove `//` in each side

// dbd.js 2.2.6 version    

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

// for dbd.js latest version
// remove all `//`
// delete the code above

// bot.musicStartCommand({
//  channel: "$channelID",
//  code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
//  })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })

    bot.variables(require('./commands/vars.js'))

    bot.loadCommands('./commands')


  const Discord = require("discord.js");
  const client = new Discord.Client();
  const Zeew = require("zeew");
  const sfw = new Zeew.sfw("604aa664d6de74c6107b8bad");
  const {MessageAttachment} = require("discord.js")
  const { Client, MessageEmbed  } = require("discord.js");


    client.on("message", (message) => {
      if(message.content.startsWith("Hola")) {
        message.channel.send("Tu nariz contra mis bolas");
      }else
      if(message.content.startsWith("hola")) {
        message.channel.send("Tu nariz contra mis bolas");
      }else
      if(message.content.startsWith("Chau")) {
        message.channel.send("Andate sorete con patas");
      }else
      if(message.content.startsWith("chau")) {
        message.channel.send("Andate sorete con patas");
      }else
      if(message.content.startsWith("!help")) {
        message.channel.send("Se esta configurando el help");
      }else
      if(message.content.startsWith("prefix")) {
        message.channel.send("!");
      }
      if(message.content === ("!avatar")) {
       const embed = new MessageEmbed()
       .setTitle("Avatar:")
       .setImage(message.author.displayAvatarURL())
       .setColor("003EFF")
       message.channel.send(embed);
      }
      if(message.content === ("verificado")) {
       const embed = new MessageEmbed()
       .setTitle("Verificate")
       .setColor("27FF00")
       .addField("Apreta el emoji :sunglasses: para verificarte", "BlackSquad")
       message.channel.send(embed);
      }
      if(message.content === ("reglas")) {
       const embed = new MessageEmbed()
       .setTitle("📖ʀᴇɢʟᴀꜱ📖")
       .setAuthor(message.member.displayName, message.author.displayAvatarURL())
       .setColor(0xE964ED)
       .setDescription("Respeta las reglas o seras baneado")
       .addField("1:", "Respetar los rangos")
       .addField("2:", "No spamear")
       .addField("3:", "No ser toxico")
       .setThumbnail("https://media1.tenor.com/images/243d545db68a8f24704a0b077561a25c/tenor.gif?itemid=19009983")
       .setImage("https://4.bp.blogspot.com/-p3pmRCT1NzY/WYctHamyyLI/AAAAAAAAMtk/eJVRM85XUCADfE8YuvOxweiPweHg_hDGwCLcBGAs/s1600/black%2Bsquad.jpg")
       message.channel.send(embed);
       }
    });
   
   /////////////Bienvenidas/////////////
   
    client.on("guildMemberAdd", miembro =>{
      var Canal = client.channels.cache.get("704043094005252236");
      Canal.send("Bienvenido <@" + miembro.id + "> A BlackSquad @here");
    });
   
    client.on("guildMemberAdd", async member => {
     let wel = new Zeew.Bienvenida()
     .token("604aa664d6de74c6107b8bad")
     .estilo("classic")
     .avatar(member.user.displayAvatarURL({format: "png"}))
     .fondo("https://4.bp.blogspot.com/-p3pmRCT1NzY/WYctHamyyLI/AAAAAAAAMtk/eJVRM85XUCADfE8YuvOxweiPweHg_hDGwCLcBGAs/s1600/black%2Bsquad.jpg")
     .colorTit("#fff")
     .titulo("Bienvenido a BlackSquad")
     .colorDesc("#fff")
     .descripcion("@" + member.displayName);
   
     let img = await Zeew.WelcomeZeew(wel);
     let attachment = new MessageAttachment(img, "zeewapi-img.gif");
   
     client.channels.resolve("820374170424705024").send(attachment);
    });
   
    client.on("guildMemberRemove", async member => {
     let wel = new Zeew.Bienvenida()
     .token("604aa664d6de74c6107b8bad")
     .estilo("classic")
     .avatar(member.user.displayAvatarURL({format: "png"}))
     .fondo("https://4.bp.blogspot.com/-p3pmRCT1NzY/WYctHamyyLI/AAAAAAAAMtk/eJVRM85XUCADfE8YuvOxweiPweHg_hDGwCLcBGAs/s1600/black%2Bsquad.jpg")
     .colorTit("#fff")
     .titulo("@" + member.displayName)
     .colorDesc("#fff")
     .descripcion("Se fue de BlackSquad")
   
     let img = await Zeew.WelcomeZeew(wel);
     let attachment = new MessageAttachment(img, "zeewapi-img.gif");
   
     client.channels.resolve("820374170424705024").send(attachment);
    });
   