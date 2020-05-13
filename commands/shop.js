const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    const exampleEmbed = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setTitle("Ellie Shop")
        .setDescription("Purchase goods like money bags and other goods. To buy an item just say: ```$buy Money Bag```", true)
        .addField(":moneybag:  `Money Bag`", "You'll need to this to rob people. A bag can hold $100\n**Price: $50**", true)
        .addField(":blue_car:  `Car`", "Can get you to your job early and qualify you for a bigger bonus as a result.\n**Price: $1000**", true)
        .addField(":cloud_lightning: `Lightning Teleporter`", "Can get you to your job instantly and qualify you for huge bonuses as a result.\nPrice: **$15000**", true)
        .setFooter("Did you know that if you have Ellie Plus you get 50% off everything in the store?");
    message.channel.send(exampleEmbed);
}