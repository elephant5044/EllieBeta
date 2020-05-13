exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    message.channel.send("You can invite me using this link: <https://elliebot.xyz/invite>.")
}
