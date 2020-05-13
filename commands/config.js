    const db = require("quick.db");

    exports.run = async(client, message, args) => { 
        if(message.author.bot) return;
       
        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (args[0] === "help") {
                return message.channel.send({
                    "embed": {
                      "title": ":question: How to use the `$config` command. ",
                      "description": "This command lets you set the channel where you want all the moderation reports to go to. You can check which channel is your log channel by running `$config current`. If you want to change this channel just say `$config #newchannel`. So, if you ever kick/ban/warn/purge, it will be posted to the #newchannel that you specified.",
                      "color": 16774912
                    }
                })
            }

            if (args[0] === "current") {
                console.log(db.get(`${message.guild.id}.channelid`))
                return message.channel.send(client.channels.get(db.get(`${message.guild.id}.channelid`)).toString());
            } 


            if (!args[0]) {
                return message.channel.send({
                    "embed": {
                    "title": ":x: Missing Parameters",
                    "description": "I think you forgot to specify the channel.",
                    "color": 16127
                    }
                }) 
            } else {

                
                var x = args[0].slice(2).trim(2);
                var y = x.substring(0, x.length - 1);
                
                var z = message.guild.channels.get(y);
                
                if (!z) {
                    return message.channel.send({
                        "embed": {
                          "title": ":x: That is not a valid channel.",
                          "description": "Try again using a **valid** channel id.",
                          "color": 16711680
                        }
                    }) 
                }

                db.set(message.guild.id, { channelid: `${y}` })
                message.channel.send({
                    "embed": {
                    "title": `:white_check_mark: ${args[0].toString()} is now where logs will be stored.`,
                    "description": `You can always change this afterwards.`,
                    "color": 65295
                    }
                }) 

                client.channels.get(db.get(`${message.guild.id}.channelid`)).send({
                    "embed": {
                      "title": "This is the new mod log channel!",
                      "description": `Any new mod actions will show up here.`,
                      "color": 65295
                    }
                })

            }
        }
    }