const Discord = require("discord.js")
const db = require("quick.db");
var workTimeout = []
var work = ["saving the world", "eating potatoes", "building a monument of Ellie", 'recreating the Matrix', 'taking over Discord', 'being the President', 'giving Wumpus a treat'];
exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    if (!workTimeout.includes(message.author.id)) {
        var toPayUserBalance = db.get(`${message.author.id}_money`);
        if (!toPayUserBalance) return message.channel.send("Please open a bank account first **$start**.")
// e e
        var random = Math.floor(Math.random() * 500);
        var item = work[Math.floor(Math.random() * work.length)];
        var toPayUserBalance = parseInt(db.get(`${message.author.id}_money`));
        var newBalance = toPayUserBalance + random;
        db.set(`${message.author.id}_money`, newBalance);
        message.channel.send(`:construction_worker: You earned ${random} for ${item}.`)
        workTimeout.push(message.author.id)
        setTimeout(function () {
            workTimeout.splice(
                workTimeout.indexOf(message.author.id), 1
            );
        }, 300000);

    } else {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setDescription("You can only work every 5 minutes.");

        return message.channel.send(exampleEmbed)
    }

}

