 

 const { MessageEmbed } = require('discord.js'); 

const { color } = require('../../config.json')  

 module.exports = {
     

     name: "give-role", 

     description: "Donne un rôle à un membre.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_ROLES"], 

     authorPermission: ["MANAGE_ROLES"], 

     ownerOnly: false,

     

     usage: "< @ | ID >",

     aliases: ["giverole","+role"],
 

         run: async (client, message, args) => { 

                 message.delete(); 

  

                 if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Vous ne disposez pas de l\'autorisation MANAGE_ROLES').then((m) => m.delete({ timeout: 10000 })); 

  

                 if (!args[0] || !args[1]) return message.channel.send('Utilisation incorrecte, c\'est `<nom d\'utilisateur ou ID utilisateur> <nom du rôle ou  identifiant>`').then((m) => m.delete({ timeout: 10000 })); 

  

                 try { 

                         const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

                         const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, ''))); 

  

                         const alreadyHasRole = member._roles.includes(roleName.id); 
let ticon = member.user.avatarURL({ dynamic: true, size: 2048 });
  

                         if (alreadyHasRole) return message.channel.send('L\'utilisateur a déjà ce rôle.').then((m) => m.delete({ timeout: 10000 })); 

  

                         const embed = new MessageEmbed() 

                                 .setTitle('Rôle ajoutée !',ticon) 

            .addField('Modérateur : ', message.author, true)
            .addField('Nom du rôle :', roleName, true)
            .addField('Nom de l\'utilisateur :',member.user, true) 

                                 .setColor(color) 

     .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))                       
    .setTimestamp()


  

                         return member.roles.add(roleName).then(() => message.channel.send(embed)); 

                 } catch (e) { 

                         return message.channel.send('Essayez de donner un rôle qui existe la prochaine fois...').then((m) => m.delete({ timeout: 10000 })); 

                 } 

         }, 

 };