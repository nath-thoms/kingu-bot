exports.run = (client, message, args) => {
    message.channel.send("doki!").catch(console.error);
}