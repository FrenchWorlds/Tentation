 

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

  const { color } = require('../../config.json')

 module.exports = { 

     

         name: "addmoney", 

         aliases: ["+money"], 

         category: "💵・économie", 

         description: "Ajoute de l'argent à un utilisateur.", 

         usage: "[ mention | ID]", 

         

     botPermission: [], 

     authorPermission: ["ADMINISTRATOR"], 

     ownerOnly: false,

    

     

      

     run: async (bot, message, args) => { 

         if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ |  Vous n'êtes pas autorisé à ajouter de l'argent !  - [ADMINISTRATEUR]]"); 

         if (!args[0]) return message.channel.send("**Veuillez entrer un utilisateur !**") 

  

         let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()); 

         if (!user) return message.channel.send("**Entrez un utilisateur valide !**") 

         if (!args[1]) return message.channel.send("**Veuillez entrer un montant !**") 

         if (isNaN(args[1])) return message.channel.send(`**❌ |  Votre montant n'est pas un chiffre !**`); 

         if (args[0] > 10000) return message.channel.send("**Impossible d'ajouter autant de montant !**") 

         db.add(`money_${user.id}`, args[1]) 

         let bal = db.fetch(`money_${user.id}`) 

  

         let moneyEmbed = new MessageEmbed() 

             .setColor(color) 

             .setDescription(`✅ ${args[1]}  ajoutés\n\nNouveau solde : ${bal}`); 

         message.channel.send(moneyEmbed) 

  

     } 

 };