const { MessageEmbed } = require('discord.js')

const { color } = require('../../config.json')

module.exports = {

     name: "nuke", 

     description: "Clone le channel.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_CHANNELS"], 

     authorPermission: ["MANAGE_CHANNELS"], 

     ownerOnly: false,

     aliases: [],


    run: async (client, message, args) => {
        

       const embed = new MessageEmbed() 

         .setTitle("💥 Channel Nuke💥")

         .setDescription(`Le channel à était supprimer par : **${message.author.username}**`)


         

         .setColor(color) 

         .setTimestamp();

    
        message.channel.send("**Le channel va être supprimer !**");
        
    setTimeout(function(){ 

     message.channel.clone().then(channel => channel.send(embed));

        message.channel.delete();

 }, 1500);   

    }

}