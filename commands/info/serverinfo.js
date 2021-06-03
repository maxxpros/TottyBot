module.exports = ({
    name: "serverinfo",
    aliases: ['serverinformation', 'servinformation', 'servinfo'],
    description: "Conocer información sobre el servidor",
    usage: "",
    category: "information",
    code: `$color[RANDOM]
    $thumbnail[$serverIcon]
    $author[$serverName;$serverIcon]
    $title[Server Information]
    $addField[Other;
    Verificacion Level: $serverVerificationLevel
    Filtrado de contenido: $serverContentFilter$replaceText[$replaceText[$checkCondition[$serverFeatures==];true;];false;
    Características: $serverFeatures;yes]
    Creacion: $creationDate[$guildID]
    ID: $guildID]
    $addField[Miembros;
    Total: $membersCount
    Online: $sum[$membersCount[$guildID;online];$membersCount[$guildID;dnd];$membersCount[$guildID;idle]]
    Offline: $membersCount[$guildID;offline]$replaceText[$replaceText[$checkCondition[$botCount<1];true;];false;
    Bots: $botCount]]
    $addField[Boost;
    Level: $serverBoostLevel
    Boosts: $serverBoostCount$replaceText[$replaceText[$checkCondition[$vanityURL==];true;];false;
    Vanity URL: discord.gg/$vanityURL
    Vanity Uses: $vanityUses]]
    $addField[General;
    Owner: <@$ownerID>
    Region: $serverRegion
    Chanales: $channelCount$replaceText[$replaceText[$checkCondition[$roleCount==0];true;];false;
    Roles: $roleCount]$replaceText[$replaceText[$checkCondition[$emojiCount==0];true;];false;
    Emojis: $emojiCount]$replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;];false;]]
    $addTimestamp  
$cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
