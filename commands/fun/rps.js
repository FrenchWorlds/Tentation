 

 const Discord = require('discord.js') 

 const { color } = require('../../config.json') 

 module.exports = { 

     name: "rps", 

     description: "Pierre papier ciseaux commandes.",
     category: "🎉・fun",
     aliases: ["ppc"],

  

     async run (bot, message, args) { 

         let embed = new Discord.MessageEmbed() 

         .setTitle("Pierre papier ciseaux ")
         .setColor(color)

         .setDescription("Réagis pour jouer !") 

         .setTimestamp() 

         let msg = await message.channel.send(embed) 

         await msg.react("🪨") 

         await msg.react("✂") 

         await msg.react("📰") 

  

         const filter = (reaction, user) => { 

             return ['🪨', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id; 

         } 

  

         const choices = ['🪨', '✂', '📰'] 

         const me = choices[Math.floor(Math.random() * choices.length)] 

         msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then( 

             async(collected) => { 

                 const reaction = collected.first() 

                 let result = new Discord.MessageEmbed() 

                 .setTitle("Résultats !")
      

                 .setColor(color)
                 .addField("Votre choix :",`${reaction.emoji.name}`) 

                 .addField("Mon choix :", `${me}`) 

                 await msg.edit(result) 

  

                 if((me === "🪨" && reaction.emoji.name === "✂") || 

                 (me === "✂" && reaction.emoji.name === "📰") || 

                 (me === "📰" && reaction.emoji.name === "🪨")) { 

                     message.reply("Tu as perdu !"); 

                 } else if (me === reaction.emoji.name) { 

                     return message.reply("Égalité !"); 

                 } else { 

                     return message.reply("Tu as gagné !"); 

                 } 

             }) 

             .catch(collected => { 

                 message.reply('Le processus a été annulé, vous n\'avez pas répondu à temps !'); 

             })  

  

     } 

 }