const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'oiseaux',

	description: "Montre une image d'oiseaux.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["birb"],

    

    

	run: async (client, message, args) => {

       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/birb')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()

            

       .setTitle('🐦・Image de oiseaux.')
                 

            

       .setImage(json.image)

            

       .setColor(color)

    .setTimestamp();

       

        

            message.channel.send(embed);

    });

    }

};