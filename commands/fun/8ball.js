module.exports = ({
    name: "8ball",
    description: "Una pregunta al bot!",
    usage: "",
    category: "fun",
    code: `$color[RANDOM]
    $description[<@$authorID> Pregunto $message $random[Si;No;Tal vez;Claro;Imposible]!]`
})