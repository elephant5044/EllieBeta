const db = require("quick.db");

exports.run = async(client, message, args) => { 
    if(message.author.bot) return;

if (message.member.hasPermission("MANAGE_MESSAGES")) {
    if (args[0] === "help") {
        return message.channel.send({
            "embed": {
              "title": ":question: How to use the `$purge` command.",
              "description": "The purge command is useful in messy situation. You can easily clear loads of messages with just a command. Just remember that you can only purge 100 messages at once and they can't be 14 days or older in age. `$purge 20` would purge 20 messages.",
              "color": 16127
            }
        })
    }
    message.delete();
    
    if (!db.get(`${message.guild.id}.channelid`)) {
       return  message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send({
                "embed": {
                  "title": ":wastebasket:  Messages Cleared!",
                  "description": `**Amount:** ${args[0]}\n**User:** ${message.member}\n**Channel:** ${message.channel}`,
                  "color": 65295
                }
            })
            message.channel.send("Btw you should configure a log channel. Don't know what I'm talking about? Run `$config help`.")
        });
    
    }
    

    try {
    message.channel.bulkDelete(args[0]).then(() => {
        client.channels.get(db.get(`${message.guild.id}.channelid`)).send({
            "embed": {
              "title": ":wastebasket:  Messages Cleared!",
              "description": `**Amount:** ${args[0]}\n**User:** ${message.member}\n**Channel:** ${message.channel}`,
              "color": 65295
            }
        })
    });
} catch(err) {
 
    message.channel.send({
        "embed": {
          "title": ":x: Mission Control, we have a problem.",
          "description": "I wasn't able to purge those messages. This could be a permission issue, the messages are to old, or you entered a number greater then 100.",
          "color": 16774912
        }
    }) 
}


} else {
    message.channel.send({
        "embed": {
          "title": ":x: Sorry, you need to be an admin to get in the club.",
          "description": "You aren't allowed to use this command.   ",
          "color": 16711680
        }
    }) 
}
}