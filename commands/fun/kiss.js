const { MessageEmbed } = require('discord.js');

const { color, erreur } = require('../../config.json')

module.exports = { 

     name: "kiss", 

     description: "Embrasse la personne mentionnée.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< @ >",

     aliases: [],

     run: async (client, message, args) => {

         

 const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])  

           if (!args[0]) return message.channel.send(erreur + " | **Spécifiez quelqu'un à embrasser.**")

         

 const API = require('anime-images-api')

const images_api = new API() 

        images_api.sfw.kiss().then(response => {

            

const embed = new MessageEmbed()

    .setDescription(`<@${message.author.id}> embrasse <@${mentionedMember.user.id}> !`)

    .setImage(response.image)

    .setColor(color)

            

       

            message.channel.send(embed)

        }) 

    

}

     };