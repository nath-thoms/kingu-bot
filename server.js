const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const championData = require("./champion.json");
const anivia = championData.data.Anivia.blurb;
const aniviaBlurb = JSON.stringify(anivia);
const axios = require('axios');
const url = "https://euw1.api.riotgames.com/lol"
const riotKey = config.riotKey;

// 'client.on('message')' commands triggered when a specific message is sent to channel.

client.on('error', console.error);

client.on('message', async message => {
    
    if(message.content.indexOf(config.prefix) !== 0) return;
    
  // seperating the command from the input
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.log(err);
    message.reply("Ooops, sorry that doesn't work!");
  }

//   if(command === "say") {
//       console.log("what is happening");
      
//     // if first argument is a repeat of command - handle error.
//       if (args[0].toLowerCase() === "!say") {
//           return message.reply("Stop trying to crash me oWo (✿◠‿◠) ")
//       }
    
//     // joins array 'args' into message  
//     const sayMessage = args.join(" ");
//     if(sayMessage === "is Karthus a dead champion?") {
//       message.channel.send("No! Only noobs think that! 😻 ")
//     } else {

//     //deletes original message
//     message.delete().catch(O_o=>{}); 

   
//     const sayMessage = args.join(" ");
//     // sends joined message
//     message.channel.send(sayMessage);
//   }
// }

//   if(command === "lore") {
//     let champion = args[0];
//     return message.channel.send(JSON.stringify(championData.data[champion].blurb));
//   }

  
//   if (command === "thisisasecreteastereggtotestifthisshitworkscorrectlywhywouldievertypethisinareallifesituation") {
//     message.reply('Hi. This is a secret command in which I waste your time as you expect something exciting to happen. This is just a message in plain text. Top kek')
//     message.react('😍')
//       }


//   if (command === "rank") {
//     const servers = ['euw', 'eune', 'na', 'br', 'lan', 'las', 'oce', 'ru', 'tr', 'jp', 'cn'];
//     const playerServer = args.shift();
//     const summonerId = args.join("");
//     if (servers.includes(playerServer)) {
//       message.reply(`http://${playerServer}.op.gg/summoner/userName=${summonerId}`);
//     } else if(playerServer === 'kr') {
//       message.reply(`http://op.gg/summoner/userName=${summonerId}`)
//     } else {
//       message.reply("Eww, gross request! Try again! ✌️ ")
//     }
//   }

//   if (command === "myrank") {
//     const summonerId = args.join("");
//     axios.get(`${url}/summoner/v3/summoners/by-name/${summonerId}?api_key=${riotKey}`)
//       .then( (res) => {
//         const summonerNumber = res.data.id
//         return summonerNumber;
//       })
//       .then((summonerNumber) => {
//         console.log(summonerNumber)
//         axios.get(`${url}/league/v3/positions/by-summoner/${summonerNumber}?api_key=${riotKey}`)
//         .then((res) => {
//           console.log(res)

//           const embed = new Discord.RichEmbed()
//             .setTitle(`${summonerId}'s Ranking Information`)
//             .addField("Leagues:", `Solo-Q = ${res.data[0].tier} - ${res.data[0].rank} - ${res.data[0].leaguePoints} LP.`)

//           message.channel.send({embed})
//         })
//       })
//   }
     
});


client.login(config.token);