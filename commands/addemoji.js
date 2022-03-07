 

 const Discord = require("discord.js"); 

 const { parse } = require("twemoji-parser"); 

  const { color } = require('../../config.json')

  

 module.exports = { 

   name: "addemoji", 

   category: "⚙️・Utilitaire", 

   usage: " <emoji> <name>", 

   description: "Voler un emoji sur un autre serveur.", 

   botPermissions: ["MANAGE_EMOJIS"], 

   memberPermissions: ["MANAGE_EMOJIS"], 

 run:  async (bot, message, args) => { 

     const emoji = args[0]; 

     if (!emoji) return message.channel.send("S'il vous plaît, donnez-moi un emoji !"); 

  

     let customemoji = Discord.Util.parseEmoji(emoji); 

  

     if (customemoji.id) { 

       const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${ 

         customemoji.animated ? "gif" : "png" 

       }`; 

       const name = args.slice(1).join(" "); 

  

       message.guild.emojis.create( 

         `${Link}`, 

         `${name || `${customemoji.name}`}` 

       ); 

       const Added = BaseEmbed(message) 

         .setTitle("Emoji ajouté") 

         .setColor(color) 

         .setDescription( 

           `Emoji a été ajouté !  |  Nom : ${ 

             name || `${customemoji.name}` 

           } | Aperçu : [Click Me](${Link})` 

         ); 

       return message.channel.send(Added); 

     } else { 

       let CheckEmoji = parse(emoji, { assetType: "png" }); 

       if (!CheckEmoji[0]) 

         return message.channel.send("S'il vous plaît, donnez-moi un emoji valide !"); 

       message.channel.send( 

         "Vous pouvez utiliser des emoji normaux sans ajouter de serveur !" 

       ); 

     } 

   }, 

 };