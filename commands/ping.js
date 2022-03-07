 const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'ping',

	description: "Latence du bot",

    category: "🤖・bot",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["latence"],

    

    

	run: async (client, message, args) => {

message.channel.send('**Ping en cours...**').then((msg) => {

 ping = msg.createdTimestamp - message.createdTimestamp;

 const embed = new MessageEmbed()

  .setColor(color)

  .setTimestamp()
 
  .setTitle('🏓・Ping')
  .setDescription(`Bot : ${Date.now() - message.createdTimestamp}ms. API : ${Math.round(client.ws.ping)}ms`);

  


 message.channel.send(embed);

 msg.delete();

});
        
   },
    };