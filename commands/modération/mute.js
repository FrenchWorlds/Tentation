module.exports = {
    
     name: "mute", 

     description: "Mute la personne mentionnée.", 

     category: "🧑‍⚖️・modération", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< @ >",

     aliases: [],
    run: async (client, message, args) => {
     

 const {Message, MessageEmbed}= require('discord.js') 

 const ms = require('ms') 
 

         if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande.") 

         const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

         if(!Member) return message.channel.send('Le membre est introuvable.') 

         const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === '🔇・mute') 

         if(!role) { 

             try { 

                 message.channel.send("Rôle \'🔇・mute\' introuvable, tentative de création d'un rôle masqué.") 

  

                 let muterole = await message.guild.roles.create({ 

                     data : { 

                         name : '🔇・mute', 

                         permissions: [] 

                     } 

                 }); 

                 message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => { 

                     await channel.createOverwrite(muterole, { 

                         SEND_MESSAGES: false, 

                         ADD_REACTIONS: false 

                     }) 

                 }); 

                 message.channel.send('Le rôle mute a été créé avec succès.') 

             } catch (error) { 

                 console.log(error) 

             } 

         }; 

         let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === '🔇・mute') 

         if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} a déjà été mute.`) 

         await Member.roles.add(role2) 

         message.channel.send(`${Member.displayName} est maintenant mute.`) 

     } 

 
    
  


};