const { color } = require('../../config.json')

const { MessageEmbed } = require('discord.js'); 



 const db = require('quick.db')
 
module.exports = {
         name: "snipe", 

     description: "Envoie le dernier message supprimer.", 

     category: "🧑‍⚖️・modération", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: [],
    
    run: async(client, message, args) => {
         

         let msg = db.get(`snipemsg_${message.channel.id}`) 

         let senderid = db.get(`snipesender_${message.channel.id}`) 

         if(!msg) { 

             return message.channel.send(`Il n'y a rien à voir.`) 

         } 

         let embed = new MessageEmbed() 

         .setTitle(`Supprimer par : ${client.users.cache.get(senderid).username}`, client.users.cache.get(senderid).displayAvatarURL({ format: "png", dynamic: true })) 

         .setDescription(msg) 

         .setColor(color) 

         .setTimestamp(); 

         message.channel.send(embed)
        
    }
};