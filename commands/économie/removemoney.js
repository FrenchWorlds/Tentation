 

 const { MessageEmbed }= require("discord.js"); 

 const db = require("quick.db"); 

  const { color } = require('../../config.json')

 module.exports = { 

      

         name: "removemoney", 

         aliases: ["-money"], 

         category: "💵・économie", 

         description: "Retire de l'argent à un utilisateur.", 

         usage: "[ mention | ID]", 

       

     botPermission: [], 

     authorPermission: ["ADMINISTRATOR", "MANAGE_GUILD"],

     run: async (bot, message, args) => { 

         if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("❌ |  Vous n'avez pas les autorisations pour retirer de l'argent !"); 

         if (!args[0]) return message.channel.send("**Veuillez entrer un utilisateur !**") 

  

         let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()); 

         if (!user) return message.channel.send("**Entrez un utilisateur valide !**") 

  

         if (!args[1]) return message.channel.send("**Veuillez entrer un montant !**") 

         if (isNaN(args[1])) return message.channel.send("**Entrez un montant valide !**"); 

         let bal = await db.fetch(`money_${user.id}`) 

  

         if (args[0] > bal) return message.channel.send("**Impossible de retirer autant d'argent !**"); 

         db.subtract(`money_${user.id}`, args[1]) 

         let bal2 = await db.fetch(`money_${user.id}`) 

  

         let moneyEmbed = new MessageEmbed() 

             .setColor(color) 

             .setDescription(`✅ |  ${args[1]} coins retirer \n\nNouvelle Balance: ${bal2}`); 

         message.channel.send(moneyEmbed) 

  

     } 

 }