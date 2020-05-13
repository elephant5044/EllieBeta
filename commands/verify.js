const db = require("quick.db");
var request = require('request');
exports.run = async (client, message, args) => {
  if(message.author.bot) return;  
if (db.get(`${message.guild.id}_evida.on`) === true) {


  message.delete();
  //  message.react("✅")

    request(`https://evida.glitch.me/check?u=${message.author.id}`, function (error, response, body) {
      if (body === "good") {
          message.author.send({
            "embed": {
              "title": "Verified!",
              "description": `Thanks for verifying!`,
              "color": 16127
            }
          })

       

        try {
          var role = message.guild.roles.get(db.get(`${message.guild.id}_evida.rolename.id`))
       //    message.channel.send(db.get(`${message.guild.id}_evida.rolename.id`))
       message.member.addRole(role);
   console.log(role)

        } catch(err) {
          console.log(err)
           message.channel.send("This server has incorrectly configured Evida. Please contact the server owner.")
        }


      } else {
          message.author.send({
            "embed": {
              "title": ":x: Sorry! But I don't think you verified correctly.",
              "description": "Make sure you click on the link I set you.",
              "color": 16711680
            }
          })
      }
    });
} else {

    message.channel.send({
        "embed": {
          "title": ":x: Sorry! But this server doesn't have Evida enabled. Contact the server owner for help.",
          "description": "Evida is the verification component for Ellie.",
          "color": 16711680
        }
      })
}
}