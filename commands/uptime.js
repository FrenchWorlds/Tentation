 const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'uptime',

	description: "Dis depuis combien de temps le bot est connecté.",

    category: "🤖・bot",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: [],

    

    

	run: async (client, message, args) => {
let totalSeconds = (client.uptime / 1000);

let days = Math.floor(totalSeconds / 86400);

totalSeconds %= 86400;

let hours = Math.floor(totalSeconds / 3600);

totalSeconds %= 3600;

let minutes = Math.floor(totalSeconds / 60);

let seconds = Math.floor(totalSeconds % 60);

             

             let uptime = `${days}jours  ${hours}heurs ${minutes}minutes ${seconds}secondes`;

 
 const embed = new MessageEmbed()

  .setColor(color)

  .setTimestamp()
 
  .setTitle('🕘・Uptime')

  .setDescription(`${uptime}`);

  

 message.channel.send(embed);

 message.delete();



        

   },

    };