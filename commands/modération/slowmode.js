 

 const { MessageEmbed } = require('discord.js'); 

const { color } = require('../../config.json')

 const ms = require('ms'); 

  

 module.exports = { 

         

     name: "slowmode", 

     description: "Change le slowmode du salon.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_CHANNELS"], 

     authorPermission: ["MANAGE_CHANNELS"], 

     ownerOnly: false,

     

     usage: "< montant >",

     aliases: ["slw"], 

         run: async (client, message, args) => { 

                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas l\'autorisation **MANAGE_CHANNELS** !').then((m) => m.delete({ timeout: 5000 })); 

  

                 if (!args[0]) { 

                         return message.channel.send('Vous n\'avez pas précisé de temps !').then((m) => m.delete({ timeout: 5000 })); 

                 } 

  

                 const currentCooldown = message.channel.rateLimitPerUser; 

  

                 const reason = args[1] ? args.slice(1).join(' ') : 'Sans raison'; 

  

                 const embed = new MessageEmbed() 

                         .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true })); 

  

                 if (args[0] === 'off') { 

                         if (currentCooldown === 0) return message.channel.send('Le cooldow est déjà désactivé').then((m) => m.delete({ timeout: 5000 })); 

  

                         embed.setTitle('Slowmode désactiver') 

                                 .setColor(color); 

                         return message.channel.setRateLimitPerUser(0, reason); 

                 } 

  

                 const time = ms(args[0]) / 1000; 

  

                 if (Number.isNaN(time)) { 

                         return message.channel.send(`pas une heure valide, veuillez réessayer !  EX : ***${client.prefix}slowmode 5s***`).then((m) => m.delete({ timeout: 5000 })); 

                 } 

  

                 if (time >= 21603.6) { 

                         return message.channel.send('Cette limite de mode lent est trop élevée, veuillez saisir une valeur inférieure à 6 heures.').then((m) => m.delete({ timeout: 5000 })); 

                 } 

  

                 if (currentCooldown === time) { 

                         return message.channel.send(`Le mode lent est déjà réglé sur ${args[0]}`); 

                 } 

  

                 embed.setTitle('Slowmode activée') 

                         .addField('Slowmode: ', args[0]) 

                         .addField('Raison: ', reason) 

                         .setColor(color); 

  

                 const msg = await message.channel.setRateLimitPerUser(time, reason); 

                 return msg.send(embed); 

         }, 

 };