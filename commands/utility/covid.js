module.exports = ({
    name: "covid",
    aliases: ['pag'],
    description: "Pagina del bot!",
    usage: "",
    category: "utility",
    code: `
    $description[(https://dinosaur.ml/covid19/country/?country=$message)]
    $color[RANDOM]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})