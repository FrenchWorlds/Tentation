 const { color } = require('../../config.json');

 const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"]; 

 const db = require("quick.db"); 

 const { MessageEmbed } = require('discord.js');   

  

 module.exports = { 

    

         name:"slots", 

         aliases: ["sl"], 

         category: "💵・économie", 

         description: "Jeu de machine à sous |  9x - rares |  3x - commun.", 

         usage: "< moment >", 

       

     run: async (bot, message, args) => { 

  

     let user = message.author; 

     let moneydb = await db.fetch(`money_${user.id}`) 

     let money = parseInt(args[0]); 

     let win = false; 

  

     let moneymore = new MessageEmbed() 

     .setColor(color) 

     .setDescription(`❌ | Vous pariez plus que vous n'en avez.`); 

  

     let moneyhelp = new MessageEmbed() 

     .setColor(color) 

     .setDescription(`❌ | Précisez un montant.`);  

  

     if (!money) return message.channel.send(moneyhelp); 

     if (money > moneydb) return message.channel.send(moneymore); 

  

     let number = [] 

     for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); } 

  

     if (number[0] == number[1] && number[1] == number[2])  {  

         money *= 9 

         win = true; 

     } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {  

         money *= 3 

         win = true; 

     } 

     if (win) { 

         let slotsEmbed1 = new MessageEmbed() 

             .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nVous avez gagné ${money} coins`) 

             .setColor(color) 

         message.channel.send(slotsEmbed1) 

         db.add(`money_${user.id}`, money) 

     } else { 

         let slotsEmbed = new MessageEmbed() 

             .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n Vous avez perdu ${money} coins`) 

             .setColor(color) 

         message.channel.send(slotsEmbed) 

         db.subtract(`money_${user.id}`, money) 

     } 

  

 } 

 };