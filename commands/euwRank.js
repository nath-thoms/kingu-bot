
exports.run = (client, message, args) => {
    const config = require("../config.json");
    const Discord = require('discord.js');
    const url = "https://euw1.api.riotgames.com/lol"
    const axios = require('axios');
    const riotKey = config.riotKey;
    const summonerId = args.join("");
    axios.get(`${url}/summoner/v3/summoners/by-name/${summonerId}?api_key=${riotKey}`)
        .then((res) => {
            const summonerNumber = res.data.id
            return summonerNumber;        
        })
        .then((summonerNumber) => {
            console.log(summonerNumber)
            axios.get(`${url}/league/v3/positions/by-summoner/${summonerNumber}?api_key=${riotKey}`)
        .then((res) => {
            console.log(res)

            const embed = new Discord.RichEmbed()
                .setTitle(`${summonerId}'s Ranking Information`)
                .addField("Leagues:\n", `Solo-Q = ${res.data[1].tier} - ${res.data[1].rank} - ${res.data[0].leaguePoints} LP.`)

                message.channel.send({embed})
        })
    })
}