module.exports = ({
    name: "$alwaysExecute",
    code: `
   $description[<@$authorID>! Subiste de nivel a **$getUserVar[level]**!]
   $color[RANDOM]
   $setUserVar[req;$multi[$getUserVar[req];2]]
   $setUserVar[xp;0]
   $setUserVar[level;$sum[$getUserVar[level];1]]
   $onlyIf[$getUserVar[req]<$getUserVar[xp];]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]
   $suppressErrors
   `
   })
