module.exports = ({
    name: "exp",
    aliases: ['xp'],
    description: "Verifique su EXP actual del servidor o el de un usuario",
    usage: "exp (user)",
    category: "leveling",
    code: `$color[RANDOM]
    $description[<@$findMember[$message]> Tu exp actual es **$getUserVar[xp;$findMember[$message]]**!
Necesitas **$replaceText[$sub[$sum[$getUserVar[req;$findMember[$message]];0];$getUserVar[xp;$findMember[$message]]];-; ;1]** exp para subir al nivel **$sum[$getUserVar[level;$findMember[$message]];1]**!]
$cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;exp;$authorID;yes]ms}]
$onlyIf[$isBot[$findMember[$message]]==false;{description: Mention a User, not a Bot!}{color:RANDOM}]
$onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
