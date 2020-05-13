const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    var currentBalance = parseInt(db.get(`${message.author.id}_money`));
    if (!currentBalance) return message.channel.send("You'll need to create a bank account first. Run **$start**.")

    var item = message.content.slice(5).toUpperCase();
    var itemContext = "```" + message.content.slice(5).toUpperCase() + "```";

    var price;

    if (item === "CAR") {
        price = 1000;
    } else if (item === "MONEY BAG") {
        price = 50;
    } else if (item === "LIGHTNING TELEPORTER") {
        price = 15000
    } else {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle("You are attempting to buy something that does not exist.");

        return message.channel.send(exampleEmbed);

    }
    if (currentBalance > price) {
        db.set(`${message.author.id}_money`, (currentBalance - price));
        db.set(`${message.author.id}_robber_bag_size`, "true")

        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setTitle("Payment Completed")
            .setFooter("All purchases are non-fundable. If you are running low on cash you can get 50% on everything in the shop by upgrading to Ellie Plus. To learn more run $upgrade")
            .addField("Item Name", `${itemContext}`, true)
            .addField("Item Price", "```css\n" + price + "```", true)
            .addField("Current Balance", "```css\n" + currentBalance + "```")
            .addField("New Balance", "```css\n" + (currentBalance - price) + "```");
        return message.channel.send(exampleEmbed);
    } else {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#0099ff")
            .setTitle("You don't have enough money to buy this item.")
            .addField("Current Balance", "```css\n" + currentBalance + "```", true)
            .addField("Item Price", "```css\n" + price + "```", true)
            .addField("Cash Needed", "```css\n" + (price - currentBalance) + "```", true)


        return message.channel.send(exampleEmbed);
    }




    /*
    const exampleEmbed = new Discord.RichEmbed()
        .setColor("#0099ff")
        .setTitle("Ellie Shop")
        .setDescription("Purchase goods like money bags and other goods. To buy an item just say: ```$buy Money Bag```", true)
        .addField(":moneybag:  `Money Bag`", "Can hold $100\nPrice: $50")
        .addField(":blue_car:  `Car`", "Can get you to your job early and qualify you for a bigger bonus as a result.\nPrice: $1000", true)
        .addField(":cloud_lightning: `Lightning Teleporter`", "Can get you to your job instantly and qualify you for huge bonuses as a result.\nPrice: $15000");
    message.channel.send(exampleEmbed);
    */

};