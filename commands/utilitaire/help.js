const { MessageEmbed } = require("discord.js");

const { owners, color } = require('../../config.json')

module.exports = { 
    name: 'help',
    description: "Obtenez la liste de toutes les commandes et apprenez même à connaître les détails de chaque commande.",
    category: "⚙️・Utilitaire",
    botPermission: [], 
    authorPermission: [], 
    ownerOnly: false,
    usage: "<cmd>",
    aliases: ["cmd","h"],
       run: async (client, message, args) => { 
          const db = require("quick.db");
           
         if (args[0]) { 
            const command = await client.commands.get(args[0]); 

            if (!command) { 
                return message.channel.send("**Commande inconnu:** " + args[0]); 
            }

            const embed = new MessageEmbed() 
                .setAuthor(command.name, client.user.displayAvatarURL()) 
                .addField(">  Description", command.description || "Non fourni") 
                .addField("> Usage", "`" + command.usage + "`" || "Non fourni")
                .addField("> Aliases", "`" + command.aliases + "`" || "Non fourni")
                .addField("> Catégorie","`" + command.category + "`" || "Non fourni")
                .addField("> Bot permission", "`" + command.botPermission + "`" || "Non fourni")
                .addField("> Auteurs permission", "`" + command.authorPermission + "`" || "Non fourni")
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL()) 
                .setColor(color) 
                .setFooter("Je suis en cours de développement."); 
            
            return message.channel.send(embed); 
        } else { 

            const commands = await client.commands; 

            let prefix = db.get(`prefix_${message.guild.id}`), default_prefix;
            
            let emx = new MessageEmbed()
                .setDescription('**Mon prefix sur ce serveur est : ' + prefix + "**") 
                .setColor(color) 
                .setFooter(`J'ai ${client.commands.size} commandes !`, client.user.displayAvatarURL()) 
                .setTimestamp()
            
            let com = {}; 

			for (let comm of commands.array()) { 

				let category = comm.category || "🥸・Inconnu"; 
				let name = comm.name; 
				if (!com[category]) { 
					com[category] = []; 
				} 
				com[category].push(name); 
			} 

			for(const [key, value] of Object.entries(com)) {  
				let desc = "`" + value.join("`, `") + "`"; 
                
				if (key == "🔞・nsfw") {
					if (message.channel.nsfw) {
						emx.addField(`${key.toUpperCase()}`, desc);
					}
				} else if (key == "🧑‍💻・owner") {
					if (owners.includes(message.author.id)) {
						emx.addField(`${key.toUpperCase()}`, desc);
					}
				} else {
					emx.addField(`${key.toUpperCase()}`, desc); 
				}
			} 

            emx.addField('Liens importants','**🔗  [Support](https://discord.gg/QuPHsVCUt2)**  | **[🦖・Dino](https://discord.com/api/oauth2/authorize?client_id=929758310884859938&permissions=8&scope=bot%20applications.commands)**') 

            return message.channel.send(emx) 
            
        }     
    } 
};
