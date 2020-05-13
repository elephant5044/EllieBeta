const db = require("quick.db");
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  if(message.author.bot) return; 
  
  if (message.member.hasPermission("ADMINISTRATOR")) {
    if (args[0] == "welcome") {
        if (!args[1]) {
            const exampleEmbed = new Discord.RichEmbed()
                .setColor("#0099ff")
                .setDescription("**Missing Parameters:**\n`CHANNEL_NAME`\n`WELCOME_MESSAGE`");
            return message.channel.send(exampleEmbed)
        } 
    }
    db.set(`${message.channel.guild.id}_evida.on`, false)

    }
}