 const { color } = require('../../config.json')

 const db = require('quick.db') 

 const { MessageEmbed } = require('discord.js') 

 const ms = require("parse-ms"); 

 const Jvole = require('../../json/vole.json'); 

 const JvoleR = Jvole[Math.floor(Math.random() * Jvole.length)]; 

  

 module.exports = { 

     

         name: "vole", 

         aliases: ["voler"], 

         category: "💵・économie", 

         description: "Voler pour gagner de l'argent.", 

         usage: " ", 

       

     run: async (bot, message, args) => {
     

         let user = message.author; 

         let author = await db.fetch(`vole_${user.id}`) 

  

         let timeout = 6e+7; 

  

         if (author !== null && timeout - (Date.now() - author) > 0) { 

             let time = ms(timeout - (Date.now() - author)); 

  

             let timeEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ | Vous avez déjà voler récemment\n\nRéessayez dans ${time.minutes}m ${time.seconds}s `); 

             message.channel.send(timeEmbed) 

         } else { 

             let amount = Math.floor(Math.random() * 5000) + 1; 

             let embed1 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | **${JvoleR} ${amount}** coins`) 

             message.channel.send(embed1) 

  

             db.add(`vole_${user.id}`, 1) 

             db.add(`money_${user.id}`, amount) 

             db.set(`vole_${user.id}`, Date.now()) 

         };
     
     }};