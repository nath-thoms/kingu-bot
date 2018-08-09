exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");

    if(sayMessage.toUpperCase() === "WHO IS THE BEST?") {
        message.channel.send("Nath is obviously the best.")
    } else {
        message.channel.send(sayMessage); 
        message.delete().catch(O_o=>{});   
    }
}