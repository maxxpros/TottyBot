module.exports = ({
    name: "userinfo",
    aliases: ['userinformation', 'whois'],
    description: "Conocer información sobre un usuario",
    usage: "userinfo <user>",
    category: "information",
    code: `$color[RANDOM]
    $thumbnail[$userAvatar[$findMember[$message]]]
    $author[$userTag[$findMember[$message]];$userAvatar[$findMember[$message]]]
    $title[Usuario informacion]
    $addField[Bot; $replaceText[$replaceText[$checkCondition[$isBot[$findMember[$message]]==true];true;Yes];false;No]]
    $addField[Roles;
    $replaceText[$replaceText[$checkCondition[$charCount[$userRoles[$findMember[$message];mentions;/]]>1850];true;User has too many roles to be displayed];false;$userRoles[$findMember[$message];mentions; ]]]
    $addField[Role mas alto; <@&$highestRole[$findMember[$message]]>;yes]
    $addField[ID; $findMember[$message];yes]
    $addField[Plataforma; $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None];web;Website];mobile;Phone];desktop;PC];yes]
    $addField[Estado custom; $replaceText[$replaceText[$checkCondition[$checkContains[$getCustomStatus[$findMember[$message];state];https;discord.gg;.gg;.com;.xyz;.app;.net;.org;.info;.co;.edu;.gov;.tv;.club]==true];true;Hidden];false;$replaceText[$getCustomStatus[$findMember[$message];emoji];none;] $replaceText[$replaceText[$checkContains[$getCustomStatus[$findMember[$message];state];none];true;None];false;$getCustomStatus[$findMember[$message];state]]];yes]
    $addField[Estado; $replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;Offline];online;Online];dnd;Do not disturb];idle;Idle];yes]
    $addField[Creacion; $creationDate[$findMember[$message]];yes]
    $addField[Fecha de Ingreso; $memberJoinedDate[$findMember[$message]];yes]
    $addTimestamp
    $footer[Pedido por $userTag;$authorAvatar]
    $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
