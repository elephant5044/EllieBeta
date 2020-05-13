const db = require("quick.db");
      //  db.set(`${message.author.id}_money`, payeeNewBalance)

exports.run = async(client, message, args) => {
    if(message.author.bot) return;
    var toPayUserBalance = db.get(`${message.mentions.members.first().id}_money`);
    var myBalance = parseInt(db.get(`${message.author.id}_money`));

    if (!toPayUserBalance) return message.channel.send(`${message.mentions.members.first().toString()} does not have an account. They can create an account by saying **$start**.`)
    if (!myBalance) return message.channel.send("Sorry! You need to create an account! Please say **$start**");

    var toPayUser = parseInt(args[1], 10);
    if (!toPayUser) return message.channel.send("You need to specify how much money to pay the user.")

    if (toPayUser < 0) {
      return message.channel.send(":x: Bank Security has denied your payment.")
    }

    if (myBalance <= toPayUser) {
        return message.channel.send("You don't have enough money to perform this payment.")
    }

    var me = myBalance - toPayUser;
    var person2 = toPayUserBalance + toPayUser;
    db.set(`${message.mentions.members.first().id}_money`, person2);
    db.set(`${message.author.id}_money`, me);
    return message.channel.send(`:money_with_wings: ${message.mentions.members.first()} has been payed ${toPayUser}.`)




}
