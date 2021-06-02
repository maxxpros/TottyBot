module.exports = ({
    name: "levels",
    aliases: ['lvls', 'levelleaderboard', 'lvlleaderboard', 'levellb', 'lvllb'],
    description: "Consulta la tabla de clasificación de nivel de servidor",
    usage: "",
    category: "leveling",
    code: `$title[Tabla de nivel]
    $description[$userLeaderboard[level;asc;{top}. {username} - Level {value}]]
    $color[RANDOM]
    $cooldown[5s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;levels;$authorID;yes]ms}]
    $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
