const db = require("quick.db");
exports.run = async(client, message, args) => { 
    if(message.author.bot) return;


    if (message.member.hasPermission("KICK_MEMBERS")) {
        
        if (args[0] === "help") {
            return message.channel.send({
                "embed": {
                  "title": ":question: How to use the `$kick` command. ",
                  "description": "`$kick @evilman123 eating all the candy`\nIn this case evilman123 will be kicked and the reason is eating all the candy.",
                  "color": 16127
                }
            })
        }

        if (!message.mentions.members.first()) {
            message.channel.send({
                "embed": {
                  "title": ":x: Missing Parameters",
                  "description": "You need to specify the person you want to kick! I don't have magic powers! :stuck_out_tongue: ",
                  "color": 16774912
                }
            }) 
        }

        message.mentions.members.first().kick().then((member) => {
        console.log(message.mentions.members.first().toString().length)

        var reason = message.content.slice(7 + message.mentions.members.first().toString().length);
        if (reason.length < 1) {
            reason = "No reason provided"
        }

        client.channels.get(db.get(`${message.guild.id}.channelid`)).send({
            "embed": {
              "title": ":hammer: User kicked!",
              "description": `**User Kicked:** ${message.mentions.members.first()}\n **Reason:** ${reason}`,
              "color": 65295
            }
        })
        message.react("✅");

        if (!db.get(`${message.guild.id}.channelid`)) {
            message.channel.send({
                "embed": {
                  "title": ":hammer: User kicked!",
                  "description": `**User Kicked:** ${message.mentions.members.first()}\n **Reason:** ${message.content.slice(6 + message.mentions.members.first().toString().length)}`,
                  "color": 65295
                }
            })
            message.react("✅");
            message.reply("Did you know that you can have these messages redirect to a specific channel? Try `$config #channel-name`.")
        }

    }).catch(() => {

         message.channel.send({
                "embed": {
                  "title": ":x: Mission Control, we have a problem.",
                  "description": "I wasn't able to kick " + message.mentions.members.first() + ".",
                  "color": 16774912
                }
            }) 
        });  
          
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