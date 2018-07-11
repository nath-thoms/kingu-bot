const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// 'client.on('message')' commands triggered when a specific message is sent to channel.

client.on('error', console.error);

client.on('message', async message => {
    
    if(message.content.indexOf(config.prefix) !== 0) return;
    if (message.content === '!doki') {
        message.react('😍')
        message.reply('doki! dok!');
        
    }

  // seperating the command from the input
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "say") {

      
    // if first argument is a repeat of command - handle error.
      if (args[0].toLowerCase() === "!say") {
          return message.reply("Stop trying to crash me oWo (✿◠‿◠) ")
      }
    
    // joins array 'args' into message  
    const sayMessage = args.join(" ");
    if(sayMessage === "is Karthus a dead champion?") {
      message.channel.send("No! Only weebs think that! 😻 ")
    } else {

    //deletes original message
    message.delete().catch(O_o=>{}); 

   
    const sayMessage = args.join(" ");
    // sends joined message
    message.channel.send(sayMessage);
  }
}

  
  if (command === "thisisasecreteastereggtotestifthisshitworkscorrectlywhywouldievertypethisinareallifesituation") {
    message.reply('Hi. This is a secret command in which I waste your time as you expect something exciting to happen. This is just a message in plain text. Top kek')
    message.react('😍')
      }

  // if (command === "euw") {
  //     const summonerId = args.join("");
  //     message.reply(`http://euw.op.gg/summoner/userName=${summonerId}`);
  // }

  if (command === "NSFW") {
    message.reply('Ohh. Senpai is feeling horny OwO ')
    message.reply(`http://www.ehs.ucsb.edu/files/images/gs/hazard4.jpg`);
}




  // if (command === "rank") {
  //   const servers = ['euw', 'eune', 'na', 'br', 'lan', 'las', 'oce', 'ru', 'tr', 'jp', 'cn'];
  //   const playerServer = args.shift();
  //   const summonerId = args.join("");
  //   if (servers.includes(playerServer)) {
  //     message.reply(`http://${playerServer}.op.gg/summoner/userName=${summonerId}`);
  //   } else if(playerServer === 'kr') {
  //     message.reply(`http://op.gg/summoner/userName=${summonerId}`)
  //   } else {
  //     message.reply("Eww, gross request! Try again! ✌️ ")
  //   }
  // }
      
});


client.login(config.token);