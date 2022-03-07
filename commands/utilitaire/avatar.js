const { MessageEmbed } = require("discord.js");

const { color } = require('../../config.json')

module.exports = {
     name: "avatar", 

     description: "Montre l'avatar de l'utilisateur mentionner.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< @ | ID >",

     aliases: ["pp","pic"],
     run: async (client, message, args) => {
          

     const user = message.mentions.users.first() || message.author; 

  

     const embed = new MessageEmbed() 

       .setTitle(`Avatar de ${user.username}`) 

       .setDescription( 

         `[Url de l'avatar](${user.displayAvatarURL({ 

           size: 1024, 

           dynamic: true 

         })}) pour télécharger son avatar !` 

       ) 

       .setImage(user.displayAvatarURL({ size: 1024, dynamic: true })) 

       .setColor(color) 

       .setFooter( 

         `Demander par : ${message.author.username}`, 

         message.author.displayAvatarURL() 

       ) 

       .setTimestamp(); 

  

     message.reply(embed);



     
     }
};