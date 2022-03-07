 

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

 const { default_prefix, color } = require('../../config.json'); 


 module.exports = { 

     

         name: "roulette", 

         aliases: ["roul"], 

         category: "💵・économie", 

         description: "Parier une couleur pour gagner ou perdre.", 

         usage: "[couleur] <montant>", 

         

      

     run: async (bot, message, args) => { 

         let prefix = "&" 

         let fetched = await db.fetch(`prefix_${message.guild.id}`); 

  

         if (fetched === null) { 

             fetched = prefix 

         } else { 

             prefix = fetched 

         } 

        

         let user = message.author; 

  

         function isOdd(num) { 

             if ((num % 2) == 0) return false; 

             else if ((num % 2) == 1) return true; 

         } 

  

         let colour = args[0]; 

         let money = parseInt(args[1]); 

         let moneydb = await db.fetch(`money_${user.id}`) 

  

         let random = Math.floor((Math.random() * 10)); 

  

         let moneyhelp = new MessageEmbed() 

             .setColor(color) 

             .setDescription(`❌ | Spécifiez un montant à miser:  ${prefix}roulette <couleur> <montant>`); 

  

         let moneymore = new MessageEmbed() 

             .setColor(color) 

             .setDescription(`❌ | Vous pariez plus que vous n'en avez.`); 

  

         let colorbad = new MessageEmbed() 

             .setColor(color) 

             .setDescription(`❌ | Spécifiez une couleur : Rouge [1,5x] (normal) Noir [2x] (dur) Vert [15x] (rare)`); 

  

         if (!colour) return message.channel.send(colorbad); 

         colour = colour.toLowerCase() 

         if (!money) return message.channel.send(moneyhelp); 

         if (money > moneydb) return message.channel.send(moneymore); 

  

         if (colour == "b" || colour.includes("noir")) colour = 0; 

         else if (colour == "r" || colour.includes("rouge")) colour = 1; 

         else if (colour == "g" || colour.includes("vert")) colour = 2; 

         else return message.channel.send(colorbad); 

  

         if (random == 1 && colour == 2) { // Green 

             money *= 15 

             db.add(`money_${user.id}`, money) 

             let moneyEmbed1 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`✅ | Vous avez gagné des pièces de ${money}\n\nMultiplicateur : 15x`); 

             message.channel.send(moneyEmbed1) 

         } else if (isOdd(random) && colour == 1) { // Red 

             money = parseInt(money * 1.5) 

             db.add(`money_${user.id}`, money) 

             let moneyEmbed2 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`🔴 | Vous avez gagné des pièces de ${money}\n\nMultiplicateur : 1,5x`); 

             message.channel.send(moneyEmbed2) 

         } else if (!isOdd(random) && colour == 0) { // Black 

             money = parseInt(money * 2) 

             db.add(`money_${user.id}`, money) 

             let moneyEmbed3 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`⬛ | Vous avez gagné des pièces de ${money}\n\nMultiplicateur : 2x`); 

             message.channel.send(moneyEmbed3) 

         } else { // Wrong 

             db.subtract(`money_${user.id}`, money) 

             let moneyEmbed4 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription(`❌ | Vous avez perdu des pièces de ${money}\n\nMultiplicateur : 0x`); 

             message.channel.send(moneyEmbed4) 

         } 

           db.add(`games_${user.id}`, 1) 

     } 

 };