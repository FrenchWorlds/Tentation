 

 const { MessageEmbed } = require("discord.js"); 

 const db = require("quick.db"); 

  

 module.exports = { 

   name: "warn", 

   category: "🧑‍⚖️・modération", 

   usage: "<@mention> <reason>", 

   description: "Avertir toute personne qui ne respecte pas les règles.", 
     
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

         "Veuillez mentionner la personne que vous souhaitez avertir - warn @mention <raison>" 

       ); 

     } 

  

     if (message.mentions.users.first().bot) { 

       return message.channel.send("Vous ne pouvez pas avertir les bots"); 

     } 

  

     if (message.author.id === user.id) { 

       return message.channel.send("Vous ne pouvez pas vous avertir vous même."); 

     } 

  

     if (user.id === message.guild.owner.id) { 

       return message.channel.send( 

         "Espèce d'idiot, comment avertir le propriétaire du serveur -_-" 

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

       db.set(`warnings_${message.guild.id}_${user.id}`, 1); 

       user.send( 

         `Vous avez été warn sur **${message.guild.name}** pour la raison : ${reason}` 

       ); 

       await message.channel.send( 

         `Vous avez warn **${ 

           message.mentions.users.first().username 

         }** pour : ${reason}` 

       ); 

     } else if(warnings !== null) { 

        

       db.add(`warnings_${message.guild.id}_${user.id}`, 1); 

        

       user.send(`Vous avez été prévenu dans **${message.guild.name}** pour ${reason}`); 

        

       await message.channel.send(`Vous avez warn **${message.mentions.users.first().username}** pour : ${reason}`); 

        

       message.delete 

        

     } 

   } 

 };