module.exports = ({
    name: "balance",
    aliases: ['bal', 'money', 'cash'],
    description: "Ver su saldo o el de un usuario",
    usage: "balance (user)",
    category: "economy",
    code: `$color[RANDOM]
    $title[$username[$findMember[$message]] Tu balance]
    $description[<@$findMember[$message]> Tienes $getGlobalUserVar[money;$findMember[$message]]💴.]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;balance;$authorID;yes]ms}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})