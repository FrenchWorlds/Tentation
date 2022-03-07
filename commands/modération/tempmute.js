 

 const {Message, MessageEmbed}= require('discord.js') 

 const ms = require('ms') 

  

 module.exports = { 

     name : 'tempmute', 

     /** 

      * @param {Message} message 

      */ 

     run : async(client, message, args) => { 

         if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande.") 

         const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

         const time = args[1] 

         if(!Member) return message.channel.send('Le membre est introuvable.') 

         if(!time) return message.channel.send('Veuillez spécifier le temps.') 

         const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === '🔇・mute') 

         if(!role) { 

             try { 

                 message.channel.send('Rôle 🔇・mute introuvable, tentative de création d\'un rôle mute.') 

  

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

                 message.channel.send('Le rôle 🔇・mute été créé avec succès.') 

             } catch (error) { 

                 console.log(error) 

             } 

         }; 

         let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === '🔇・mute') 

         if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} a déjà été mute.`) 

         await Member.roles.add(role2) 

         message.channel.send(`${Member.displayName} est maintenant mute.`) 

  

         setTimeout(async () => { 

             await Member.roles.remove(role2) 

             message.channel.send(`${Member.displayName} est maintenant unmute.`) 

         }, ms(time)) 

     } 

 }