
exports.run = async(client, message, args) => { 
  if(message.author.bot) return;    
  message.channel.send({
            "embed": {
              "title": "❓ Ellie Help",
              "description": "**Prefix**: `$`",
              "color": 16127,
              "footer" : "Add Ellie to your server https://elliebot.xyz/invite",
              "fields": [
                {
                  "name" : "Moderation Commands",
                  "value" :"$kick @user reason\n$ban @user reason\n$purge amount\n$warn @user\n$mverify\n$config current\n$config #channel-name"
                },
                 {
                  "name" : "Economy Commands",
                  "value" :"$balance\n$pay @user amount\n$work"
                },
                {
                  "name" : "Evida Commands",
                  "value" :"$evida-config #channel-name <rolename>\n$evida-off\n$evida-on\n$mverify"
                },
                {
                  "name" : "Music Commands",
                  "value" :"$play <youtube-link>\n$np\n$pause\n$queue\n$resume\n$skip\n$stop\n$volume"
                }
              ]
            }
          })
 }
 /*
 {
                  "name" : "Music Commands",
                  "value" :"$play song-name\n$skip\n$quene\n$pause\n$stop"
        
                },
 */
