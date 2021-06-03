module.exports = ({
    name: "channelinfo",
    aliases: ['channelinformation', 'chnlinformation', 'chnlinfo'],
    description: "Conocer información sobre un canal de servidor específico",
    usage: "channelinfo (canal)",
    category: "information",
    code: `$color[RANDOM]
    $author[$userTag;$authorAvatar]
    $title[Informacion del canal]
    $addField[Visible; $replaceText[$replaceText[$checkCondition[$channel[$findServerChannel[$message];isviewable]==true];true;Yes];false;No];yes]
    $addField[ID; $findServerChannel[$message];yes]
    $addField[Posicion; $channel[$findServerChannel[$message];rawposition];yes]
    $addField[Descripcion; $replaceText[$replaceText[$checkCondition[$channelTopic[$findServerChannel[$message]]!=];true;$channelTopic[$findServerChannel[$message]]];false;None];yes]
    $addField[Tipo; $toLocaleUpperCase[$channelType[$findServerChannel[$message]]];yes]
    $addField[Creacion; $channel[$findServerChannel[$message];created];yes]$addTimestamp
    $onlyIf[$findServerChannel[$message;no]!=;{description: :x: That server channel doesn't exist!}{color:RANDOM}]
    $suppressErrors[{description:An error occurred! Please contact the Bot Developer if this keeps happening!}{color:RANDOM}]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
