 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

  

 module.exports = { 

   name: "unwarn", 

   category: "🧑‍⚖️・modération", 

   usage: "<@mention> <reason>", 

   description: "Enlève les warns de la personne mentionnée.", 

     

   authorPermission: ["MANAGE_GUILD"],

     

   run: async (client, message, args) => { 

     if (!message.member.hasPermission("MANAGE_GUILD")) { 

       return message.channel.send( 

         "Vous devez avoir la permission de gérer le serveur  pour utiliser cette commande !" 

       ); 

     } 

  

     const user = message.mentions.members.first(); 

  

     if (!user) { 

       return message.channel.send( 

         "Veuillez mentionner la personne que vous souhaitez enlever les warns - unwarn @mention <raison>" 

       ); 

     } 

  

     if (message.mentions.users.first().bot) { 

       return message.channel.send("Vous ne pouvez pas avertir les bots"); 

     } 

  

     if (message.author.id === user.id) { 

       return message.channel.send("Vous ne pouvez pas vous unwarn vous même."); 

     } 

  

     if (user.id === message.guild.owner.id) { 

       return message.channel.send( 

         "Espèce d'idiot, comment unwarn le propriétaire du serveur -_-" 

       ); 

     } 

  

     const reason = args.slice(1).join(" "); 

  

     if (!reason) { 

       return message.channel.send( 

         "Veuillez indiquer la raison de l'avertissement - avertir @mention <raison>"

       ); 

     } 

  

     let warnings = db.get(`warnings_${message.guild.id}_${user.id}`); 

  

     if (warnings === null) { 

       db.delete(`warnings_${message.guild.id}_${user.id}`, 1); 
 

       await message.channel.send( 

         `Vous avez unwarn **${ 

           message.mentions.users.first().username 

         }** pour : ${reason}` 

       ); 

     } else if(warnings !== null) { 

        

       db.delete(`warnings_${message.guild.id}_${user.id}`, 1); 

        

        

       await message.channel.send(`Vous avez unwarn **${message.mentions.users.first().username}** pour : ${reason}`); 

        

       message.delete 

        

     } 

   } 

 };