 const { color } = require('../../config.json')

 const db = require('quick.db') 

 const { MessageEmbed } = require('discord.js') 

 const ms = require("parse-ms"); 

 const Jwork = require('../../json/works.json'); 

 const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)]; 

  

 module.exports = { 

     

         name: "work", 

         aliases: ["wr"], 

         category: "💵・économie", 

         description: "Travailler pour gagner de l'argent.", 

         usage: " ", 

       

     run: async (bot, message, args) => { 

  

         let user = message.author; 

         let author = await db.fetch(`work_${user.id}`) 

  

         let timeout = 1800000; 

  

         if (author !== null && timeout - (Date.now() - author) > 0) { 

             let time = ms(timeout - (Date.now() - author)); 

  

             let timeEmbed = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ | Vous avez déjà travaillé récemment\n\nRéessayez dans ${time.minutes}m ${time.seconds}s `); 

             message.channel.send(timeEmbed) 

         } else { 

             let amount = Math.floor(Math.random() * 1000) + 1; 

             let embed1 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | **${JworkR} ${amount}**`) 

             message.channel.send(embed1) 

  

             db.add(`works_${user.id}`, 1) 

             db.add(`money_${user.id}`, amount) 

             db.set(`work_${user.id}`, Date.now()) 

         }; 

     } 

 };