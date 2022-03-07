 

 const { MessageEmbed } = require('discord.js'); 

const { color } = require('../../config.json')  

 module.exports = { 

         name: "user-info", 

     description: "Avoir les informations sur un utilisateur.", 

     category: "🧑‍⚖️・modération", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,
     
     usage: "< @ | ID >",

     aliases: ["userinfo","infouser","info-user"],
     
         run: async (client, message, args) => { 

                 const user =                        message.mentions.members.first() 

                         || message.guild.members.cache.get(args[0]) 

                         || message.member; 

  

                 let status; 

                 switch (user.presence.status) { 

                 case 'online': 

                         status = ':green_circle: online'; 

                         break; 

                 case 'dnd': 

                         status = ':red_circle: ne pas déranger'; 

                         break; 

                 case 'idle': 

                         status = ':yellow_circle: inactif'; 

                         break; 

                 case 'offline': 

                         status = ':white_circle: invisible'; 

                         break; 

                 default: 

                         status = 'Unknown'; 

                 } 

  

                 const embed = new MessageEmbed() 

                         .setTitle(`${user.user.username} stats`) 

                         .setColor(color) 

                         .setThumbnail(user.user.displayAvatarURL({ dynamic: true })) 

                         .addFields( 

                                 { 

                                         name: 'Pseudo: ', 

                                         value: user.user.username, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '#️⃣ Hashtag: ', 

                                         value: `#${user.user.discriminator}`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '🆔 ID: ', 

                                         value: user.user.id, 

                                 }, 

                                 { 

                                         name: 'Status: ', 

                                         value: status, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Activity: ', 

                                         value: user.presence.activities[0] ? user.presence.activities[0].name : 'L\'utilisateur ne joue pas à un jeu !', 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Liens de son avatar: ', 

                                         value: `[Click ](${user.user.displayAvatarURL()})`, 

                                 }, 

                                 { 

                                         name: 'Crée le : ', 

                                         value: user.user.createdAt.toLocaleDateString('fr-eu'), 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Rejoins le serveur le : ', 

                                         value: user.joinedAt.toLocaleDateString('fr-eu'), 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Roles: ', 

                                         value: user.roles.cache.map((role) => role.toString()).join(' ,'), 

                                         inline: true, 

                                 }, 

                         ); 

  

                 return message.channel.send(embed); 

         }, 

 };