const { MessageEmbed } = require('discord.js'); 
const {default_prefix, color, salonready} = require ('../config.json');

 module.exports.run = (client) => { 

     console.log(`${client.user.tag} est prêt !`);
     

 const statuses = [

        () => `${default_prefix}help`,

        () => `${Math.round(client.ws.ping)}ms`,        

        () => `${client.guilds.cache.size} Serveurs` 

  ]

let i = 0

setInterval(() => {  

  client.user.setActivity(statuses[i](), {type: 'STREAMING'});  

  i = ++i % statuses.length

}, 10000)
     
  const embed = new MessageEmbed() 

         .setTitle(`${client.user.tag}`)
  
         .setDescription("Je suis prêt à être utilisé !")

         

         .setColor(color) 

         .setTimestamp();
     client.channels.fetch(salonready)

    .then(channel => {

        channel.send(embed);
         

     });
          };
 
