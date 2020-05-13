const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {
    if(message.author.bot) return;

        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setTitle("Bot Information")
            .setDescription("**Website:** https://elliebot.xyz\n**Documentation:** https://elliebot.xyz/docs\n**Status:** https://elliebot.xyz/status\n**Discord Server:** https://elliebot.xyz/server\n**Bot Invite**: https://elliebot.xyz/invite");

        return message.channel.send(exampleEmbed)

};