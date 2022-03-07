 

 const { MessageEmbed } = require('discord.js'); 

 const os = require('os');

const { color } = require('../../config.json')
  

 module.exports = { 
     name: "bot-info", 

     description: "Obtient les informations sur le bot.", 

     category: "🤖・bot", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["botinfo","infobot"],

     usage: "",

         run: async (client, message, args) => {
             let totalSeconds = (client.uptime / 1000);

let days = Math.floor(totalSeconds / 86400);

totalSeconds %= 86400;

let hours = Math.floor(totalSeconds / 3600);

totalSeconds %= 3600;

let minutes = Math.floor(totalSeconds / 60);

let seconds = Math.floor(totalSeconds % 60);
             
             let uptime = `${days}j  ${hours}h ${minutes}min ${seconds}s`;

                 const embed = new MessageEmbed() 

                         .setThumbnail(client.user.displayAvatarURL()) 

                         .setTitle('Bot Stats') 

                         .setColor(color) 

                         .addFields( 

                                 { 

                                         name: '🌐 Serveurs', 

                                         value: `${client.guilds.cache.size} servers.`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '📺 Channels', 

                                         value: ` ${client.channels.cache.size} channels.`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '👥 Utilisateurs', 

                                         value: ` ${client.users.cache.size} utilisateurs`, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: '⏳ Ping', 

                                         value: `${Math.round(client.ws.ping)}ms`, 

                                         inline: true, 

                                 },
                                 { 

                                         name: '⌨️ Uptime', 

                                         value: `${uptime}`, 

                                         inline: true, 

                                 },

                                 { 

                                         name: 'Join Date', 

                                         value: client.user.createdAt, 

                                         inline: true, 

                                 }, 

                                 { 

                                         name: 'Serveur Info', 

                                         value: `Cores: ${os.cpus().length}`, 

                                         inline: true, 

                                 }, 

                         ) 

                         .setFooter(`Crée par: ${message.author.tag}`, message.author.displayAvatarURL()); 

  

                 return message.channel.send(embed); 

         }, 

 };