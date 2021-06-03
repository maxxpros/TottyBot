module.exports = ({
    name: "daily",
    description: "Reclama tu dinero diario!",
    usage: "",
    category: "economy",
    code:`
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[100;5000]]]
$color[RANDOM]
$description[Reclamaste tu diario y obtuviste $random[100;5000]💴!]
$globalCooldown[1d;{description: Puede reclamar su próximo dinero diario en **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
