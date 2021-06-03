module.exports = ({
    name: "work",
    desription: "trabajar para ganar más dinero!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[Trabajaste y conseguiste $random[50;2000]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;2000]]]
    $globalCooldown[1h;{description: You can work again in **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
