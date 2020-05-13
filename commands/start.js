const db = require("quick.db");
      //  db.set(`${message.author.id}_money`, payeeNewBalance)

exports.run = async(client, message, args) => { 
    if(message.author.bot) return;
    if (db.get(`${message.author.id}_money`)) {
        return message.channel.send("You already have an account silly!")
    }

    db.set(`${message.author.id}_money`, 100);

    return message.channel.send("Your account has been created with a starting balance of 100 cash.");
    
}
    