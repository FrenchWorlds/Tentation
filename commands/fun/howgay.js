 
const { color } = require('../../config.json')

 const Discord = require('discord.js') 

  

 module.exports = { 
     
     

     name: "howgay", 

     description: "Regarde à quels points quelqu'un est gay.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< @ >",

     aliases: ["gay"],

  

     async run (bot, message, args) { 

         let member = message.mentions.users.first() || message.author 

  

         let rng = Math.floor(Math.random() * 101); 

  

         const howgayembed = new Discord.MessageEmbed() 

         .setTitle(`Calculatrice de gay !`)


         .setDescription(`${member.username} is ` + rng + "% Gay🌈") 

         .setColor(color) 

  

         message.channel.send(howgayembed); 

     } 

 }