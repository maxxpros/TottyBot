module.exports = ({
    name: "roleinfo",
    aliases: ['roleinformation'],
    description: "Conocer información sobre un rol de servidor específico",
    usage: "roleinfo <role>",
    category: "information",
    code: `$color[$role[$findRole[$message];hex]]
    $author[$userTag;$authorAvatar]
    $title[Informacion del role]
    $addField[Hoisted; $replaceText[$replaceText[$checkCondition[$isHoisted[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Mencionable; $replaceText[$replaceText[$checkCondition[$isMentionable[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Color; $role[$findRole[$message];hex];yes]
    $addField[ID; $findRole[$message];yes]
    $addField[Posicion; $role[$findRole[$message];position];yes]
    $addField[Creado; $role[$findRole[$message];created];yes]
    $addTimestamp
    $onlyIf[$findRole[$message]!=;{description: :x: That role doesn't exist!}{color:RANDOM}]
    $onlyIf[$message!=;{description:Tienes que especificar un rol para ver la información de ese rol!}{color:RANDOM}]
    $suppressErrors[{description:An error occurred! Please contact the Bot Developer if this keeps happening!}{color:RANDOM}]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
