module.exports = ({
    name: "help",
    aliases: ['h', 'commands', 'cmds'],
    description: "Mirar la lista de comandos",
    usage: "",
    category: "utility",
    code:
    `
    $thumbnail[$userAvatar[$clientID]]
    $description[Usa \`$getServerVar[prefix]command <command name>\` para mostrar la información de un comando
Utiles:
\`\`\`
command
help
invite
pagina
ping
setprefix
\`\`\`
Diversion:
\`\`\`
8ball
amor
gun
jail
lindometro
meme
rip
say
stonks
\`\`\`
Sistema de niveles:
\`\`\`
leveling enable/disable (enabled by default)
levels
exp
expcooldown
\`\`\`
Economia:
\`\`\`
daily
work
beg
pay
roulette
balance
leaderboard
award (Bot Developer only)
\`\`\`
Informacion:
\`\`\`
userinfo
channelinfo
roleinfo
serverinfo
botinfo
developerinfo
\`\`\`
Diversos: 
\`\`\`
avatar
membercount
emojicount
poll
\`\`\`
Developer:
\`\`\`
eval
\`\`\`
]
$color[RANDOM]`
    })
