const db = require("quick.db");
const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
    if(message.author.bot) return;
    if (message.member.hasPermission("ADMINISTRATOR")) {
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')	
    .setDescription(`✅ **${message.mentions.members.first()}** *has been given a strike.*\n\n[Details](https://dashboard.elliebot.xyz/legacy/warns/${message.guild.id})`);
    // message.mentions.members.first()
    message.channel.send(exampleEmbed)

    client.channels.get(db.get(`${message.guild.id}.channelid`)).send({
        "embed": {
            "title": "⚠️ User warned!",
            "description": `**User Warned:** ${message.mentions.members.first()}\n **Reason:** ${message.content.slice(7 + message.mentions.members.first().toString().length)}`,
            "color": 65295
        }
    })


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