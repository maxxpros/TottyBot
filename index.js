const dbd = require("dbd.js")

const bot = new dbd.Bot({
  mobile: false, // you can change it to "true" if you want a mobile status
  token: "ODIyMDYzMTIwMTA5MTQyMDI2.YFMz8Q.cyPduwV3_1fIebbGDUaxaOqJiMY", // change TOKEN with your bot token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>'] // you may change the bot's main prefix in vars.js
})

bot.onMessage({
  guildOnly: false // commands will work in dms. set "true" for commands to work in guilds only
})

bot.status({
   text: ";help┃", 
   type: "STREAMING", 
   url: "enter url/link"
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
