// evida

const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.bot) return;

  if (message.member.hasPermission("ADMINISTRATOR")) {
    
    if (args[0] === "current") {
      return message.channel.send("People have to verify in: " + client.channels.get(db.get(`${message.guild.id}_evida.channel.id`)).toString());
    }


    if (!args[0]) {
      return message.channel.send({
        "embed": {
          "title": ":x: Missing Parameters",
          "description": "You need to specify the channel you want users to verify in. ",
          "color": 16774912
        }
      })
    }

    let verifiedRole = message.guild.roles.find(role => role.name === args[1]);
    if (!verifiedRole) {
      return message.channel.send({
        "embed": {
          "title": ":x: You provided me with an invalid role!",
          "description": "Please ensure that you say a role that is actually in this server.",
          "color": 16774912
        }
      })
    }

    var x = args[0].slice(2).trim(2);
    var y = x.substring(0, x.length - 1);

    var z = message.guild.channels.get(y);

    if (!z) {
      return message.channel.send({
        "embed": {
          "title": ":x: That is not a valid channel.",
          "description": "Try again using a **valid** channel id.",
          "color": 16711680
        }
      })
    } else {
      db.set(`${message.guild.id}_evida`, { on: true, channel: z, rolename: verifiedRole, monetize: false })
      message.channel.send({
        "embed": {
          "title": `:white_check_mark: Evida has been configured.`,
          "description": `Users will now be required to verify to enter this server.`,
          "color": 65295
        }
      })

      
      message.channel.send({
        "embed": {
          "title": `:information_source: Quick heads up!`,
          "description": `Make sure only users with the **${args[1]}** role can see the server channels. Make sure ${z} is unlocked for people without the **${args[1]}** role.`,
          "color": 65295
        }
      })

      client.channels.get(db.get(`${message.guild.id}_evida.channel.id`)).send({
        "embed": {
          "title": "Please check your DM's.",
          "description": "Say `$verify` after you have finished the first part.",
          "color": 5107
        }
    })
    }





  } else {
    message.channel.send({
      "embed": {
        "title": ":x: Sorry, you need to be an admin to get in the club.",
        "description": "You aren't allowed to use this command.   ",
        "color": 16711680
      }
    })
  }
}