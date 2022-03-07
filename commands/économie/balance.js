 const { color } = require('../../config.json')

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

  

 module.exports = { 

     name: "balance", 

     aliases: ["bal"], 

     category: "💵・économie", 

     description: "Affiche le solde actuel.", 

     usage: "[username | nickname | mention | ID](optionnel)", 

     

   

   run: async (bot, message, args) => { 

     let user = 

       message.mentions.members.first() || 

       message.guild.members.cache.get(args[0]) || 

       message.guild.members.cache.find( 

         r => 

           r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase() 

       ) || 

       message.guild.members.cache.find( 

         r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase() 

       ) || 

       message.member; 

  

     let bal = db.fetch(`money_${user.id}`); 

  

     if (bal === null) bal = 0; 

  

     let bank = await db.fetch(`bank_${user.id}`); 

  

     if (bank === null) bank = 0; 

 let Total = bal + bank 

     if (user) { 

       let moneyEmbed = new MessageEmbed() 

         .setColor(color) 

         .setDescription( 

           `**Solde de ${user.user.username}**\n**Cash :** ${bal}$\n**Banque :** ${bank}\n**Totale :** ${Total}`
         ); 

       message.channel.send(moneyEmbed); 

     } else { 

       return message.channel.send("**Entrez un utilisateur valide !**"); 

     } 

   } 

 };