 

 const Discord = module.require("discord.js"); 

 const { color } = require('../../config.json') 

 module.exports = { 

    name: "unlock", 

    description: "Déverrouille un salon.", 

     usage: "unlock <channel>", 

   args: "", 

   
     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_CHANNELS"], 

     authorPermission: ["MANAGE_CHANNELS | MANAGE_SERVER"],

    run: async(client, message, args) => { 

    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) { 

    return message.channel.send("Vous n'avez pas assez d'autorisations.") 

    } 

    message.channel.overwritePermissions([ 

      { 

         id: message.guild.id, 

         null : ['SEND_MESSAGES'], 

      }, 

     ],); 

    const embed = new Discord.MessageEmbed() 
 

    .setDescription(`🔓 | ${message.channel} a été débloqué`) 

    .setColor(color); 

    await message.channel.send(embed); 

    message.delete(); 

 } 

 }