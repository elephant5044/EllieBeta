
exports.run = async(client, message, args) => { 
    if(message.author.bot) return;
  
    if (args[0] === "help") {
          return message.channel.send({
              "embed": {
                "title": ":question: How to use the `$broadcast` command.",
                "description": "You can't this is a developer only command.",
                "color": 16774912
              }
          })
      }
  
      if (message.author.id == "668993543527858196") {
          if (args[0] == "test") {
        message.guild.members.forEach(member => {
            member.send("A test of the Ellie Broadcast System.")
        });
    }


    if (args[1] == "miracle-sponsor1") {
        message.channel.send({
            "embed": {
              "title": "Developer Broadcast",
              "description": "Advert for Team Miracle is now running.",
              "color": 16127
            }
          })
        message.guild.members.forEach(member => {
            member.send("Good evening @everyone\nWe've partnered with Rematch to bring to you guys weekly Wager Ladders worth $100’s of dollars. Rematch also hosts 3-5 free-entry tournaments EVERY DAY with limited spots for around $100-200USD in prizes, so be sure to join them as quickly as possible!\nRematch has built-in systems and mechanics that make it impossible to scam during wager matches and tournaments. This is the future of wagering - join the wave. \n\n*Create your account here*: <https://www.rematch.gg/r/miracle>\n\nFor any questions regarding the tournaments, make a ticket at #support-tickets through their server! https://discord.gg/Y82NbEp")
        });
    }
      }


    
  }
  