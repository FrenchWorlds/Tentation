const { MessageEmbed } = require("discord.js") 

const { color } = require('../../config.json')

 const moment = require('moment') 

  

 module.exports = { 

     

     name: "ban", 

     description: "Ban l'utilisateur mentionner.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["BAN_MEBERS"], 

     authorPermission: ["BAN_MEMBERS"], 

     ownerOnly: false,
     
     usage: "< @ | ID >",

     aliases: ["bl"],

 run: async(client, message, args) => {   

 const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

 const reason = args.slice(1).join(" ") 

           if (!args[0]) return message.channel.send(":x: | **Spécifiez quelqu'un à bannir.**") 

         if (!mentionedMember) return message.channel.send(":x: | **Je ne trouve pas ce membre.**") 

         if (mentionedMember.id === message.author.id) return message.channel.send(":x: | Vous ne pouvez pas vous bannir vous même...") 

         if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) { 

             return message.channel.send(":x: | **Vous ne pouvez pas bannir ce membre car votre rôle est inférieur au rôle de ce membre.**") 

         } 

         if (mentionedMember.bannable) { 

             const embed = new MessageEmbed() 

             .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true})) 

             
          
             .setColor(color) 

             .setDescription(` 

 **Membre :** ${mentionedMember.user.username} - (${mentionedMember.user.id}) 

 **Raison:** ${reason || "Sans raison 🤷"} 

             `) 

         message.channel.send(embed) 

         mentionedMember.ban() 

         } else { 

             return message.channel.send(":x: | **Je ne peux pas bannir cet utilisateur, assurez-vous que le rôle de l'utilisateur est inférieur au mien.**") 

         } 

         return undefined 

         } 

     }