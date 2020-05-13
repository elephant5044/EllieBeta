const db = require("quick.db");
exports.run = async (client, message, args) => {
    if(message.author.bot) return;


    if (message.member.hasPermission("BAN_MEMBERS")) {

        if (args[0] === "help") {
            return message.channel.send({
                "embed": {
                    "title": ":question: How to use the `$ban` command. ",
                    "description": "`$ban @evilman123 eating all the candy`\nIn this case evilman123 will be banned and the reason is eating all the candy.",
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

        var reason = message.content.slice(7 + message.mentions.members.first().toString().length);
        if (reason.length < 1) {
            reason = "No reason provided"
        }
        message.mentions.members.first().ban().then((member) => {
            message.react("✅");
            console.log(message.mentions.members.first().toString().length)

            client.channels.get(db.get(`${message.guild.id}.channelid`)).send({
                "embed": {
                    "title": ":hammer: User banned!",
                    "description": `**User Banned:** ${message.mentions.members.first()}\n **Reason:** ${reason}`,
                    "color": 65295
                }
            })
            

            if (!db.get(`${message.guild.id}.channelid`)) {
                message.channel.send({
                    "embed": {
                        "title": ":hammer: User Banned!",
                        "description": `**User Banned:** ${message.mentions.members.first()}\n **Reason:** ${reason}`,
                        "color": 65295
                    }
                })
                message.reply("Did you know that you can have these messages redirect to a specific channel? Try `$config #channel-name`.")
                message.react("✅");
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