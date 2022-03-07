 

 const { MessageEmbed } = require('discord.js'); 

 const { color } = require('../../config.json') 

 module.exports = { 

         name: "unban", 

     description: "Un ban l'utilisateur.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["BAN_MEMBERS"], 

     authorPermission: ["BAN_MEMBERS"], 

     ownerOnly: false,

     usage: "< ID >",
     
     aliases: ["Unban"],


         run: async (client, message, args) => { 

                 if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Tu n\'as pas la permission **BAN_MEMBERS** !').then((m) => m.delete({ timeout: 5000 })); 

  

                 if (!args[0]) return message.channel.send('Veuillez entrer un identifiant d\'utilisateur pour débannir !').then((m) => m.delete({ timeout: 5000 })); 

  

                 let member; 

  

                 try { 

                         member = await client.users.fetch(args[0]); 

                 } catch (e) { 

                         console.log(e); 

                         return message.channel.send('Utilisateur invalide !').then((m) => m.delete({ timeout: 5000 })); 

                 } 

  

                 const reason = args[1] ? args.slice(1).join(' ') : 'Sans raison'; 

  

                 const embed = new MessageEmbed() 

                         .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true })); 

  

                 return message.guild.fetchBans().then((bans) => { 

                         const user = bans.find((ban) => ban.user.id === member.id); 

  

                         if (user) { 

                                 embed.setTitle(`Débanni avec succès ${user.user.tag}`) 

                                         .setColor(color) 

                                         .addField('User ID', user.user.id, true) 

                                         .addField('User Tag', user.user.tag, true) 

                                         .addField('Raison du bannissement', user.reason != null ? user.reason : 'Sans raison') 

                                         .addField('Raison non bannie', reason); 

                                 message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed)); 

                         } else { 

                                 embed.setTitle(`${member.tag} n'est pas bannie !`) 

                                         .setColor(color); 

                                 message.channel.send(embed); 

                         } 

                 }).catch((e) => { 

                         console.log(e); 

                         message.channel.send('Une erreur est survenue !'); 

                 }); 

         }, 

 };