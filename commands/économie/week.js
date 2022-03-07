 const { color } = require('../../config.json');

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

 const ms = require("parse-ms"); 

  

 module.exports = { 

     

         name: "week", 

         aliases: ["week"], 

         category: "💵・économie", 

         description: "Vous donne 5000 par jour.",
         usage: " ", 

       

     run: async (bot, message, args) => { 

  

         let user = message.author; 

         let timeout = 604800000; 

         let amount = 5000; 

  

         let weekly = await db.fetch(`weekly_${user.id}`); 

  

         if (weekly !== null && timeout - (Date.now() - weekly) > 0) { 

             let time = ms(timeout - (Date.now() - weekly)); 

  

             let timeEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ | Vous avez déjà récupéré votre récompense hebdomadaire\n\nRécupérez-la à nouveau dans ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `); 

             message.channel.send(timeEmbed) 

         } else { 

             let moneyEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | Vous avez récupéré votre récompense hebdomadaire de ${amount} coins`);  

             message.channel.send(moneyEmbed) 

             db.add(`money_${user.id}`, amount) 

             db.set(`weekly_${user.id}`, Date.now()) 

  

  

         } 

     } 

 };