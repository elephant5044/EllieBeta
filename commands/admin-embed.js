const Discord = require("discord.js")

exports.run = async(client, message, args) => { 
        if(message.author.bot) return;
        if(message.author.id == "668993543527858196"){
            const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setDescription(message.content.slice(12));
            message.channel.send(exampleEmbed)
        }

} 

