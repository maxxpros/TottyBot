module.exports = ({
    name: "avatar",
    aliases: ['av'],
    description: "Obtén tu avatar o el de un usuario",
    usage: "avatar (usuario)",
    category: "miscellaneous",
    code: `$color[RANDOM]
    $author[$userTag;$authorAvatar]
    $description[<@$findMember[$message]> avatar]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
