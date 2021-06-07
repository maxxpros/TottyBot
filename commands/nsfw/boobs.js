module.exports = ({
    name: "boobs",
    description: "Una pregunta al bot!",
    usage: "8ball <pregunta>",
    category: "fun",
    code: `$color[RANDOM]
    $description[<@$findMember[$message]> Queria ver unas $message]
    $image[$randomText[https://cdn.sex.com/images/pinporn/2019/10/14/21982884.gif?width=620;https://cdn.sex.com/images/pinporn/2019/10/14/21982878.gif?width=620;https://cdn.sex.com/images/pinporn/2015/12/12/14524830.jpg?width=620&site=sex&user=rika-chan;https://cdn.sex.com/images/pinporn/2018/03/22/19277821.jpg?width=620&site=sex&user=zokix;https://cdn.sex.com/images/pinporn/2019/09/14/21811770.jpg?width=620&site=sex&user=eric2199;https://cdn.sex.com/images/pinporn/2020/01/21/22532723.jpg?width=620&site=sex&user=ming99;https://cdn.sex.com/images/pinporn/2017/07/11/18036173.jpg?width=620&site=sex&user=hotgirlhub]!]
    $suppressErrors[{description: Asi se usa: $getServerVar[prefix]8ball <pregunta>}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})