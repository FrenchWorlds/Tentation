const { MessageEmbed } = require('discord.js')

const { color } = require('../../config.json')

module.exports = {

     name: "clyde", 

     description: "Envoie un message de clyde.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     

     run: async (client, message, args) => {
         
         if(args[1]) { 

 return message.channel.send(':x: | Aucun espace autorisé !')

}

let text = args.join(" ");

         

if (args.length <= 0) 

         return message.channel.send(`Veuillez mettre un mot ou une phrase.`)
         
     const embed = new MessageEmbed()
     
     .setImage('https://ctk-api.herokuapp.com/clyde/' + text)
     .setColor(color)
     
         message.channel.send(embed);
     }
};