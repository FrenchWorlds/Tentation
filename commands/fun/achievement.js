 const { color } = require('../../config.json')

 const { MessageEmbed } = require("discord.js"); 

  

 module.exports = { 

   name: "achievement", 

   description: "Vous donnes un exploit.",

 

   aliases: ["ach"],
   usage: "< texte >",

   category: "🎉・fun", 

   run: async (client, message, args) => { 

     const text = args.join("+"); 

     const e = new MessageEmbed() 

       .setTitle("Minecraft achievement !") 
       .setColor(color)
       .setImage( 

         `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}` 

       ); 

     message.channel.send(e); 

   }, 

 };