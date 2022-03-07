 

 const { MessageEmbed } = require("discord.js"); 

const { color } = require('../../config.json')

 const db = require("quick.db"); 

  

 module.exports = { 

   

     name: "pay", 

     noalias: [""], 

     category: "💵・économie", 

     description: "Payer à quelqu'un.", 

     usage: "[mention | ID] < montant >", 

      

    

   run: async (bot, message, args) => { 

 try { 

   let user2 = message.author 

     if (!args[0]) return message.channel.send("**Veuillez entrer un utilisateur !**"); 

     let user = 

       message.mentions.members.first() || 

       message.guild.members.cache.get(args[0]) || 

       message.guild.members.cache.find( 

         r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase() 

       ) || 

       message.guild.members.cache.find( 

         r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase() 

       ); 

     if (!user) return message.channel.send("**Entrez un utilisateur valide !**"); 

  

     let member = db.fetch(`money_${user2.id}`); 

  

     let embed1 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`❌ | Mentionnez quelqu'un pour payer.`); 

  

     if (!args[0]) { 

       return message.channel.send(embed1); 

     } 

     let embed2 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`❌ Vous ne pouvez pas vous payer vous même.`); 

  

     if (user.user.id === message.author.id) { 

       return message.channel.send(embed2); 

     } 

  

     let embed3 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`❌ | Spécifiez un montant à payer.`); 

  

     if (!args[1]) { 

       return message.channel.send(embed3); 

     } 

     let embed4 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`❌ | Entrez un montant valide !`); 

  

     if (isNaN(args[1])) { 

       return message.channel.send(embed4); 

     } 

     let embed5 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`❌ | Vous n'avez pas assez d'argent.`); 

  

     if (member < args[1]) { 

       return message.channel.send(embed5); 

     } 

  

     let embed6 = new MessageEmbed() 

       .setColor(color) 

       .setDescription(`✅ | Vous avez payé ${user.displayName} ${args[1]} coins`); 

  

     message.channel.send(embed6); 

     db.add(`money_${user.id}`, args[1]); 

     db.subtract(`money_${user2.id}`, args[1]); 

     } catch { 

          

     } 

   } 

 };