 

 const { MessageEmbed } = require('discord.js'); 

 const db = require('quick.db'); 

 const { color } = require('../../config.json') 

 module.exports = { 

    

         name: "leaderboard", 

         aliases: ['lb'], 

         category: '💵・économie', 

         description: 'Shows Server\'s Top 10 Users of Economy Leaderboard', 

         usage: ' ', 

       

     run: async (bot, message, args) => { 

         let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data); 

         if (!money.length) { 

             let noEmbed = new MessageEmbed() 

                 .setAuthor(message.member.displayName, message.author.displayAvatarURL()) 

                 .setColor(color) 

                 .setFooter("Rien à voir ici encore !")
  

             return message.channel.send(noEmbed) 

         }; 

  

         money.length = 10; 

         var finalLb = ""; 

         for (var i in money) { 

             if (money[i].data === null) money[i].data = 0 

             finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : "Utilisateur inconnu#0000"}** - ${money[i].data} :dollar:\n`; 

         }; 

  

         const embed = new MessageEmbed() 

             .setTitle(`Leaderboard  de ${message.guild.name}`) 

             .setColor(color) 

             .setDescription(finalLb) 

             .setFooter(bot.user.tag, bot.user.displayAvatarURL()) 

             .setTimestamp() 

         message.channel.send(embed); 

     } 

 };