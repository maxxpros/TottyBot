module.exports = ({
    name: "beg",
    description: "Suplicar por dinero!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[Le rogaste a $randomMention y te dio $random[10;500]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[10;500]]]
    $globalCooldown[25s;{description: No ruegues tanto ... Hazlo de nuevo en **%time%!**}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
