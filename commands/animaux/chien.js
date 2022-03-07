const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')


module.exports = {

	name: 'chien',

	description: "Montre une image de chien.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["dog"],

    

    

	run: async (client, message, args) => {
       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/dog')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()
            
       .setTitle('🐶・Image de chien.')
            
       .setImage(json.image)
            
       .setColor(color)

       .setFooter('Développer par 🫀・French.')


    .setTimestamp();
       
        
            message.channel.send(embed);
    });
    }

};
    
