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