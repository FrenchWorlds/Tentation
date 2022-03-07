 const { MessageEmbed } = require('discord.js');

 const discord = require("discord.js"); 

const { color } = require('../../config.json')  

 module.exports = { 
     


     name: "invite", 

     description: "Obtient l'invitation du bot.", 

     category: "🤖・bot", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["inv","add"],
 

   run: async (client, message, args) => { 

       

     var invite = new MessageEmbed() 

         .setTitle(`**🔧・Invite ${client.user.username} sur votre serveur !**`) 

         .addField("🔗・__**Lien d'invitation du bot :**__", "**[Cliquez ici](https://discord.com/api/oauth2/authorize?client_id=929758310884859938&permissions=8&scope=bot%20applications.commands)**") 

         .addField("🔗・__**Lien d'invitation du support :**__", "**[Cliquez ici](https://discord.gg/sTK3YhYbkE)**") 

         .setColor(color) 

     message.channel.send(invite) 

 }
     
 }
 

 