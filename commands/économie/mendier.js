 

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

 const ms = require("parse-ms"); 

  const { color } = require('../../config.json')

 module.exports = { 

   

         name: "mendier", 

         noalias: [""], 

         category: "💵・économie", 

         description: "Mendier de l'argent.", 

         usage: " ", 

          

      

     run: async (bot, message, args) => { 

         let user = message.author; 

  

         let timeout = 120000; 

         let amount = 20; 

  

         let beg = await db.fetch(`beg_${user.id}`); 

  

         if (beg !== null && timeout - (Date.now() - beg) > 0) { 

             let time = ms(timeout - (Date.now() - beg)); 

  

             let timeEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ | Vous avez déjà mendié récemment\n\nRecommencez dans ${time.minutes}m ${time.seconds}s `); 

             message.channel.send(timeEmbed) 

         } else { 

             let moneyEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | Vous avez supplié et reçu ${amount} coins`); 

             message.channel.send(moneyEmbed) 

             db.add(`money_${user.id}`, amount) 

             db.add(`begs_${user.id}`, 1) 

             db.set(`beg_${user.id}`, Date.now()) 

  

  

         } 

     } 

 };