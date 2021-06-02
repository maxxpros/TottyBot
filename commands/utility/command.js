module.exports = ({
    name: "command",
    aliases: ['cmd'],
    description: "Ver la informacion de un comando",
    usage: "command <command name>",
    category: "utility",
    code:
    `
    $title[$toLocaleUppercase[$commandInfo[$message[1];name]]]
    $description[<> - Argumentos obligatorios
() - Argumentos opcionales]
    $color[RANDOM]
    $addField[Uso;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;None];yes]
    $addField[Alias;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,;, ]];false;None]]
    $addField[Descripcion;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;None]]
    $addField[Categoria;$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];category]!=];true;$commandInfo[$message[1];category]];false;None]];yes]
    $onlyIf[$commandInfo[$message[1];name]!=;{description:❌ Ese no es un comando valido!}{color:RANDOM}]
    $onlyIf[$message!=;{description:Tienes que especificar un nombre de comando para ver información!}{color:RANDOM}]
    $addTimestamp
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;commandinfo;$authorID;yes]ms}]
    `
    })
