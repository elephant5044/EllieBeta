const Discord = require("discord.js");
const db = require("quick.db");
var recently = [];
exports.run = async (client, message, args) => {


    // INPUT CHECKS
    if (message.author.bot) return;
    if (!message.mentions.members.first()) return message.channel.send("You need to mention the person you want to rob.")
    if (!args[0]) return message.channel.send("How much are you planning to rob?")
    if (message.mentions.members.first() === message.author) return message.channel.send("Stop trying to rob yourself you fool.")
    var robbedPerson = db.get(`${message.mentions.members.first().id}_money`);
    var robber = parseInt(db.get(`${message.author.id}_money`));
    if (!robber) return message.channel.send("Please open a bank account first **$start**.")
    if (!robbedPerson) return message.channel.send(message.mentions.members.first() + "doesn't have an account yet. They can start one by running **$start**")
    if (robber < 0) return message.channel.send("No.")
    const exampleEmbed = new Discord.RichEmbed()
        .setColor("#ff1c00")
        .setDescription("This person has been recently robbed. Leave em alone.");
    if (recently.includes(message.mentions.members.last().id)) return exampleEmbed;

    var bagSize;
    if (db.get(`${message.author.id}_robber_bag_size`) !== "true") {
        // User does not have a money bag
        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setDescription("*Ahem*. Where were you planning to store that money? Buy a money bag first you fool. `$shop`");

        return message.channel.send(exampleEmbed)
    } else {

        if (Math.round(Math.random()) === 1) {
            // robbery success
            db.set(`${message.author.id}_robber_bag_size`, "false");
            db.set(`${message.author.id}_money`, (robber + parseInt(args[0])));
            const exampleEmbed = new Discord.RichEmbed()
                .setColor("#00ff25")
                .setDescription("*Mission Success*. Nice. You succeeded with the robbery.")
                .addField("Previous Balance", "```css\n" + robber + "```", true)
                .addField("New Balance", "```css\n" + (robber + parseInt(args[0])) + "```", true);

            return message.channel.send(exampleEmbed)

        } else {
            // robbery failed

            db.set(`${message.author.id}_robber_bag_size`, "false");
            db.set(`${message.author.id}_money`, (robber - parseInt(args[0])));

            const exampleEmbed = new Discord.RichEmbed()
                .setColor("#ff1c00")
                .addField("Money Lost", "```" + parseInt() + "```", true)
                .addField("Previous Balance", "```css\n" + robber + "```", true)
                .addField("New Balance", "```css\n" + (robber - parseInt(args[0])) + "```", true)
                .setDescription("*Mission Failed*. You got caught when escaping with the money.");


            return message.channel.send(exampleEmbed)
        }

        // bagSize = db.get(`${message.author.id}_money`);

    }
};