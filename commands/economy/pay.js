module.exports = ({
    name: "pay",
    aliases: ['give'],
    description: "Pagar / dar dinero a un usuario",
    usage: "pay <Cuanto> <usario>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$findMember[$messageSlice[1]]> Le han pagado/regalado $message[1]💴 por <@$authorID>!]
    $setGlobalUserVar[money;$sum[$getGLobalUserVar[money;$findMember[$messageSlice[1]]];$message[1]];$findMember[$messageSlice[1]]]
    $setGlobalUserVar[money;$sub[$getGLobalUserVar[money];$message[1]]]
    $onlyIf[$getGlobalUserVar[money]>=$message[1];{description: No tienes $ $message[1]💴 para completar esa transacción!}{color:RANDOM}]
    $onlyIf[$isBot[$findMember[$messageSlice[1]]]==false;{description:Bots doesn't need money!}{color:RANDOM}]
    $onlyIf[$checkContains[$findMember[$messageSlice[1]];$authorID]==false;{description: You must specify a guild member to pay/give 💴!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Argument must be a number!}{color:RANDOM}]
    $onlyIf[$message[1]!=;{description: Tienes que especificar la cantidad de 💴 que se te dará!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]pay <amount> <user>}{color:RANDOM}]
    `
})
