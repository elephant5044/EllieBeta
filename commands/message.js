let prefix = "$"  

 exports.run = async(client, message) => {
  if (message.author.bot) return;
  client.user.setActivity('$help | elliebot.xyz', { type: 'PLAYING' });
  if (message.content.startsWith(prefix)) {
    
 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(!commandfile) return;    
    commandfile.run(client,message,args);
 }
                            
  }