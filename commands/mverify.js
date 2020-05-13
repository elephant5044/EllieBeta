exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    client.emit("guildMemberAdd", message.member);
    message.delete();
}