 

 const { Client, Message, MessageEmbed } = require('discord.js'); 

  

 module.exports = { 

    

     name: 'badges', 

     category: '⚙️・Utilitaire', 

     /**  

      * @param {Client} client  

      * @param {Message} message  

      * @param {String[]} args  

      */ 

     run: async(client, message, args) => { 

         const user = message.mentions.users.first() || message.author; 

  

         const flags = user.flags.toArray(); 

  

         

          

         message.channel.send(`Les badges de ${user} sont : **${flags.join(', ')}**`) 

     } 

 }