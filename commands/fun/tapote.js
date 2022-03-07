const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "tapote", 

     description: "Tapote la personne mentionnée.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< @ >",

     aliases: [],

     run: async (client, message, args) => {

         

 const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])  

           if (!args[0]) return message.channel.send(":x: | **Spécifiez quelqu'un à tapoter.**")

         

 const API = require('anime-images-api')

const images_api = new API() 

        images_api.sfw.pat().then(response => {

            

const embed = new MessageEmbed()

    .setDescription(`<@${message.author.id}> tapote <@${mentionedMember.user.id}> !`)

    .setImage(response.image)

    .setColor(color)

            

       

            message.channel.send(embed)

        }) 

    

}

     };