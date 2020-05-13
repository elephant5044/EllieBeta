const db = require("quick.db")
exports.run = async(client, message, args) => {
    if(message.author.bot) return;

    if (message.author.id == "668993543527858196" || message.author.id == "587061927260454948") {
        var oldbal = db.get(`${args[1]}_money`);
        db.set(`${args[1]}_money`, args[0]);
        message.channel.send(`> Reset balance of ${oldbal} to ${args[0]}`)
    }
}





