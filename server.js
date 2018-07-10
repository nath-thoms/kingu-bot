const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// 'client.on('message')' commands triggered when a specific message is sent to channel.

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

    //deletes original message
    message.delete().catch(O_o=>{}); 
    
    // sends joined message
    message.channel.send(sayMessage);
  }







});




client.login(config.token);