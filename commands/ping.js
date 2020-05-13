
exports.run = async(client, message, args) => { 
  if(message.author.bot) return;

  if (args[0] === "help") {
        return message.channel.send({
            "embed": {
              "title": ":question: How to use the `$ping` command.",
              "description": "Running `$ping` returns the ping of the bot.",
              "color": 16774912
            }
        })
    }

  message.channel.send({
        "embed": {
          "title": "🏓 Pong",
          "description": "Bot Ping: ```css\n" + `${message.createdTimestamp - Date.now()}` +  " milliseconds``` \nSomething look wrong? Check our [status](https://elliebot.xyz/status).",
          "color": 16127
        }
      })
}
