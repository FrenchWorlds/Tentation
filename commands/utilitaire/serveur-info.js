 

 const { MessageEmbed } = require('discord.js'); 

const { color } = require('../../config.json')

 module.exports = {
     
     name: "serveur-info", 

     description: "Donne les informations sur le serveur.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["info-serveur"],
 

         run: async (client, message, args) => { 

                 let region; 

                 switch (message.guild.region) { 

                 case 'europe': 

                         region = '🇪🇺 Europe'; 

                         break; 

                 case 'us-east': 

                         region = '🇺🇸 us-east'; 

                         break; 

                 case 'us-west': 

                         region = '🇺🇸 us-west'; 

                         break; 

                 case 'us-south': 

                         region = '🇺🇸 us-south'; 

                         break; 

                 case 'us-central': 

                         region = '🇺🇸 us-central'; 

                         break; 

                 default: 

                         region = 'Inconnue'; 

                 } 

  

                 const embed = new MessageEmbed() 

                         .setThumbnail(message.guild.iconURL({ dynamic: true })) 

                         .setColor(color) 

                         .setTitle(`${message.guild.name} stats`) 

                          
 

                         .addFields(
                                 { 

                                         name: 'Membres: ', 

                                         value: `${message.guild.memberCount} membres`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Membres en ligne: ', 

                                         value: `${message.guild.members.cache.filter((m) => m.user.presence.status === 'online').size} `, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Nombres de bots: ', 

                                         value: `${message.guild.members.cache.filter((m) => m.user.bot).size} bots !`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Crée le: ', 

                                         value: message.guild.createdAt.toLocaleDateString('fr-eu'), 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Nombre de rôles: ', 

                                         value: `${message.guild.roles.cache.size} rôles.`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '🗺 Région: ', 

                                         value: region, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Vérifié: ', 

                                         value: message.guild.verified ? 'Le serveur est vérifié' : 'Le serveur n\'est pas vérifié', 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Boosters: ', 

                                         value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : 'Il n\'y a pas de boosters', 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Emojis: ', 

                                         value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} emojis!` : 'Il n\'y a pas d\'emoji', 

                                         inline: true, 

                                 }, 

                         ); 

                 return message.channel.send(embed); 

         }, 

 };