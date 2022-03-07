const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'raton laveur',

	description: "Montre une image de raton laveur.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["raccoon"],

    

    

	run: async (client, message, args) => {

       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/raccoon')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()

            

       .setTitle('🦝・Image de raton laveur.')

            

       .setImage(json.image)

            

       .setColor(color)

    .setTimestamp();

       

        

            message.channel.send(embed);

    });

    }

};