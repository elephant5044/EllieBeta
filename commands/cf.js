/*
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



exports.run = async (client, message, args) => {
    if(message.author.bot) return; 
    console.log("test")
    var xhr = new XMLHttpRequest();
    var handle = message.content.slice(9);

    if (!handle) {
        return console.log("rip")
    }

    var link  = 'http://codeforces.com/api/user.rating?handle=' + handle;

    xhr.onreadystatechange = function() {
  

        if (this.readyState == 4 && this.status === 400)  return message.channel.send(":x: User not found.");

        if (this.readyState == 4 && this.status == 200) {
         
           var response = JSON.parse(xhr.responseText);
    

           message.channel.send({ "embed": {
            "title": "Custom Ellie Module Response:",
            "description": `\n**Module Name: Codeforce API\nParameters: <user>\nResponse:\n\n**${handle}'s rank is ${response.result[response.result.length-1].newRating}.`,
            "color": 587775
            } })
        } else {
console.log("bad");          
message.reply("tox");

        }
    };
    xhr.open("GET", link, true);
    xhr.send();
  
}
*/
