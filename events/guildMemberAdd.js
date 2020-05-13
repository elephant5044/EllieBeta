const db = require("quick.db");

exports.run = async (guild, member) => {
    if (member.bot) return;
    //  console.log(member.guild.id)
    ///   console.log(db.get(`${member.guild.id}_evida`))

    if (db.get(`${member.guild.id}_evida.on`) === true) {
        member.send({
            "embed": {
                "title": "This server is equipped with Evida.",
                "description": `Please go [here](https://evida.elliebot.xyz/?u=${member.id}) to verify yourself.`,
                "color": 5107
            }
        });
    }


}