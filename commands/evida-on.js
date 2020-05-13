const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.bot) return; 
  
  if (message.member.hasPermission("ADMINISTRATOR")) {
    
    db.set(`${message.channel.guild.id}_evida.on`, true)
    message.channel.send({
        "embed": {
          "title": "Evida is on.",
          "description": "Users will have to verify now.",
          "color": 1310464
        }
      })
    }
}