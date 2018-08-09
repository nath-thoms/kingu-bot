
exports.run = (client, message, args) => {
    const championData = require("../champion.json");
    let champion = args[0];
    return message.channel.send(`You asked me about ${champion} \n` + JSON.stringify(championData.data[champion].blurb));
    //return message.channel.send("Hey")
      
    }