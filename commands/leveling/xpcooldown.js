module.exports = ({
    name: "expcooldown",
    aliases: ['xpcooldown'],
    description: "Cambiar el tiempo de reutilización de EXP del servidor",
    category: "leveling",
    usage: "expcooldown <number in seconds>",
    code: `$description[✅ I set EXP cooldown to "$message".]
    $color[RANDOM]
    $setServerVar[expcd;$message]
    $onlyIf[$message!=;{description:Tienes que especificar un mensaje para cambiar el enfriamiento de EXP del servidor! (En segundos)
        Ejemplo - $getServerVar[prefix]expcooldown 60 (1 minuto)}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: La nivelación no está habilitada en este servidor! Para habilitarlo haz \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
   $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]`
  })
