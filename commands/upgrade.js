const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {
    if(message.author.bot) return;

    const exampleEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Invalid Upgrade Code")
        .setDescription("You have used an invalid upgrade code. If you have purchased Ellie Plus and are still having trouble please join our Discord Server (https://elliebot.xyz/server). You can purchase Ellie Plus here: https://gumroad.com/l/elliediscordbot");
    return message.channel.send(exampleEmbed)

};