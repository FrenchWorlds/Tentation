 

 const { color } = require('../../config.json') 

 const Discord = require("discord.js"); 

  

 module.exports = { 

   name: "rip", 

   aliases: ["mort"], 

   category: "📷・image", 

   description: "Affiche la création de RIP avec l'avatar de l'utilisateur.", 

   usage: "<user>", 

   run: async (client, message, args) => { 

      

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 

  

     const Embed = new Discord.MessageEmbed() 

     .setColor(color) 

     .setTitle("Repose en paix") 

     .setImage(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`) 

      

     .setTimestamp(); 

  

     return message.channel.send(Embed); 

   } 

 };