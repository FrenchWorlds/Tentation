 

 const { MessageEmbed } = require("discord.js");

const { color } = require('../../config.json') 

  

 module.exports = { 


     name: "ban", 

     description: "Ban l'utilisateur avec son id.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["BAN_MEBERS"], 

     authorPermission: ["BAN_MEMBERS"], 

     ownerOnly: false,
     
     usage: "< ID >",

     aliases: ["banid"],
     
   run: async(bot, message, args) => { 

          

         if(!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") && !ownerID.includes(message.author.id)) return; 

          

         const target = args[0]; 

         if (isNaN(target)) return message.reply(`Veuillez spécifier un identifiant.`); 

  

         const reason   = args.splice(1, args.length).join(' '); 

  

              

                 message.guild.members.ban(target, {reason: reason.length < 1 ? 'Aucune raison fournie.': reason}); 

                 const embed2 = new MessageEmbed() 

                 .setColor(color) 

                 .setDescription("** Ils ont été bannis avec succès.  L'utilisateur n'a pas été notifié !**"); 

                 await message.channel.send(embed2);                
       
}};