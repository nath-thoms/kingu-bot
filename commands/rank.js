exports.run = (clientInformation, message, args) => {
    
    const servers = ['euw', 'eune', 'na', 'br', 'lan', 'las', 'oce', 'ru', 'tr', 'jp', 'cn'];
    const playerServer = args.shift();
    const summonerId = args.join("");

    if(servers.includes(playerServer)) {
        message.reply(`https://${playerServer}.op.gg/summoner/userName=${summonerId}`);
    } else if(playerServer === 'kr') {
        message.reply(`http://op.gg/summoner/userName=${summonerId}`)
    } else {
        message.react('🤮')
        message.reply("Eww - gross request  - I couldn't find that summoner! \n say '!help' for command list.")
    }
}