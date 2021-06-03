module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Consulta la tabla de clasificación de dinero",
    usage: "",
    category: "economy",
    code: `$title[Clasificacion de dinero]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[money;asc; {top}. {username} - {value}💴]]
    $cooldown[5s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
