const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.bot) return;

  message.channel.send(message.mentions.members.first().id);
}