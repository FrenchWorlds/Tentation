 

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

 const ms = require("parse-ms"); 

  const { color } = require('../../config.json');

 module.exports = { 

      

         name: "daily", 

         aliases: ["coins-system"], 

         category: "💵・économie", 

         description: "Vous donne 200 par jour.", 

         usage: " ", 

       

     run: async (bot, message, args) => { 

         let user = message.author; 

  

         let timeout = 86400000; 

         let amount = 200; 

  

         let daily = await db.fetch(`daily_${user.id}`); 

  

         if (daily !== null && timeout - (Date.now() - daily) > 0) { 

             let time = ms(timeout - (Date.now() - daily)); 

  

             let timeEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ |  Vous avez déjà récupéré votre récompense quotidienne\n\nRécupérez-la à nouveau dans ${time.hours}h ${time.minutes}m ${time.seconds}s `); 

             message.channel.send(timeEmbed) 

         } else { 

             let moneyEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | Vous avez récupéré votre récompense quotidienne elle est de ${amount} coins`); 

             message.channel.send(moneyEmbed) 

             db.add(`money_${user.id}`, amount) 

             db.set(`daily_${user.id}`, Date.now()) 

  

  

         } 

     } 

 };