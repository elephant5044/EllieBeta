const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.bot) return; 
  
  if (message.member.hasPermission("ADMINISTRATOR")) {
    db.set(`${message.channel.guild.id}_evida.on`, false)
    message.channel.send({
        "embed": {
          "title": "Evida is off.",
          "description": "Users will not have to verify now.",
          "color": 16711680
        }
      })
    }
}