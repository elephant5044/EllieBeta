
exports.run = async(client, message, args) => { 
    if(message.author.bot) return;

	if (message.author.id == "668993543527858196" || message.author.id == "587061927260454948") {
		
		try {
			const code = args.join(" ");
			let evaled = eval(code);
	   
			if (typeof evaled !== "string")
			  evaled = require("util").inspect(evaled);
	   // egg egg egg
			message.channel.send(clean(evaled), {code:"xl"});
		  } catch (err) {
			message.channel.send("```" + err + "```")
		  }	

}
}





