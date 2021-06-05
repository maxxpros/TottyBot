module.exports = ({
    name: "queue",
    aliases: ['q'],
    category: "music",
    usage: "",
    description: "Muestra la cola actual",
    code:
    `
    $color[RANDOM]
    $thumbnail[$songinfo[thumbnail]]
    $title[Cola de música]
    $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
    $addField[Canción actual;[$songinfo[title]\\]($songinfo[url])]
   
    $footer[Page $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
    $addTimestamp
   
    $textSplit[$divide[$queueLength;10];.]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:RANDOM}{description:You must be in the same Voice Channel as the Bot!}] 
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]
    $suppressErrors[{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
    `
   })