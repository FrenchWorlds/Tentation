 

 const { MessageEmbed } = require("discord.js") 

 const { color } = require('../../config.json')
 
 const moment = require('moment') 

  

 module.exports = { 
     
     name: "kick", 

     description: "Expulse l'utilisateur mentionner.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["KICK_MEMBERS"], 

     authorPermission: ["KICK_MEMBERS"], 

     ownerOnly: false,
     
     usage: "< @ | ID >",

     aliases: ["expulsé"],

 run: async(client, message, args) => {   

 const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

 const reason = args.slice(1).join(" ") 

           if (!args[0]) return message.channel.send(":x: | **Spécifiez quelqu'un à expulser.**") 

         if (!mentionedMember) return message.channel.send(":x: | **Je ne trouve pas ce membre.**") 

         if (mentionedMember.id === message.author.id) return message.channel.send(":x: | Vous ne pouvez pas vous expulsé vous même...") 

         if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) { 

             return message.channel.send(":x: | **Vous ne pouvez pas expulser ce membre car votre rôle est inférieur au rôle de ce rôle de membre.**") 

         } 

         if (mentionedMember.kickable) { 

             const embed = new MessageEmbed() 

             .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true})) 

        

             .setColor(color) 
             .setImage('https://media.discordapp.net/attachments/941086846899855421/941086905364250724/540531fb0440ef73fb46468a7a7ef284.gif')
             .setDescription(` 

 **Membre :** ${mentionedMember.user.username} - (${mentionedMember.user.id}) 

 **Raison:** ${reason || "Sans raison 🤷"} 

             `) 

         message.channel.send(embed) 

         mentionedMember.kick() 

         } else { 

             return message.channel.send(":x: | **Je ne peux pas exclure cet utilisateur, assurez-vous que le rôle de l'utilisateur est inférieur à mon rôle.**") 

         } 

         return undefined 

         } 

     }