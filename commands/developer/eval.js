module.exports = ({
    name: "eval",
    aliases: ['e'],
    description: "Evaluar un código / función",
    usage: "eval <code/function>",
    category: "developer",
    code: `$eval[$message]
    $onlyIf[$message[1]!=;{description: Add a message!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]`
})
