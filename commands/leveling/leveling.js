module.exports = ({
    name: "leveling",
    aliases: ['lvling'],
    description: "Cambiar si la nivelación debe habilitarse o deshabilitarse en el servidor",
    usage: "leveling <enable/disable>",
    category: "leveling",
    code: `$color[RANDOM]
    $description[✅ La nivelación ahora es "$getServerVar[leveling]".]
    $setServerVar[leveling;$toLowerCase[$message[1]]]
    $onlyIf[$getServerVar[leveling]!=$message[1];{description: Leveling is already $message[1]!}{color:RANDOM}]
    $onlyIf[$checkContains[$message[1];enable;disable;enabled;disabled]==true;{description: Choose only between "enable" or "disable"!}{color:RANDOM}]
    $onlyIf[$message[1]!=; {description: Especifique si desea "habilitar" o "deshabilitar" la nivelación en este servidor.!}{color:RANDOM}]
    $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
