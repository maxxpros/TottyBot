module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq'],
    description: "Repite la cola actual",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Ahora se esta repitiendo la cola actual!];false;Ya no se esta repitiendo la cola.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
