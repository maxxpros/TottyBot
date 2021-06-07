module.exports = ({
    name: "say",
    description: "Un mensaje que quieres que diga!",
    usage: "say <Mensaje>",
    category: "fun",
    code: `$message
    $deletecommand
    $onlyIf[$message!=;{description: Tienes que especificar un mensaje para que diga!}{color:RANDOM}]`
})