const db = require("quick.db");
const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
  if(message.author.bot) return;

  if (args[0]) {
    if(db.get(`${message.mentions.members.last().id}_money`)) {
      const exampleEmbed = new Discord.RichEmbed()
          .setColor("#0099ff")
          .setTitle(":money_with_wings: " + message.mentions.members.last().user.username + "'s balance")
          .setThumbnail(`${message.mentions.members.last().user.avatarURL}`)

          .addField("Current Balance","```css\n" + db.get(`${message.mentions.members.last().id}_money`) + "```");

      return message.channel.send(exampleEmbed);
    } else {
      return message.channel.send("That user does not have an account. They can make one by saying **$start**!")
    }
  }

  if (!db.get(`${message.author.id}_money`)) return message.channel.send("You don't have an account yet! To make one say **$start**!")

    const exampleEmbed = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setTitle(":money_with_wings: " + message.author.username + "'s balance")
        .setThumbnail(message.author.avatarURL)
        .addField("Current Balance","```css\n" + db.get(`${message.author.id}_money`) + "```")
        .addField("Inventory",`[See Online](http://localhost/api/inventory?user=${message.author.id})`);
    return message.channel.send(exampleEmbed);


}