let prefix = "-"

exports.run = async (client, message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        client.channels.get('709576659422019614').send(`Command Executed: ${message.content}\nAuthor: ${message.author.id}`)
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        let commandfile = client.commands.get(cmd.slice(prefix.length));
        if (!commandfile) return;
        commandfile.run(client, message, args);
    }

}