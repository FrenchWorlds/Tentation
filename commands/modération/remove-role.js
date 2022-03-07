 

 const { MessageEmbed } = require('discord.js') 

const { color } = require('../../config.json')  

 module.exports = { 

   name: "remove-role", 

   aliases: ["removerole","-role"], 

   category: "🧑‍⚖️・modération", 

   description: "Supprimer le rôle de n'importe quel utilisateur.", 

   run: async (client, message, args) => { 

      

     let target = message.mentions.members.first(); 

      

     if(!target) return message.reply(`Je n'arrive pas à trouver l'utilisateur.`) 

      

     let rrole = message.mentions.roles.first(); 

      

     if(!rrole) return message.reply(`Je n'arrive pas à trouver le rôle.`) 

      

     let ticon = target.user.avatarURL({ dynamic: true, size: 2048 }); 

     let aicon = message.author.avatarURL({ dynamic: true, size: 2048 }); 

      

       const embed = new MessageEmbed() 

       .setAuthor('Rôle enlevée !', ticon) 

       .setThumbnail(target.user.displayAvatarURL({ dynamic: true })) 

       .setColor(color) 
       

            .addField('Modérateur : ', message.author, true)

            .addField('Nom du rôle :', rrole, true)

            .addField('Nom de l\'utilisateur :', target, true)
       


       .setTimestamp() 

        

       await message.channel.send(embed) 

        

       target.roles.remove(rrole) 

      

   } 

 }