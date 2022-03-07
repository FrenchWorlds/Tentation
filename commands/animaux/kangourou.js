const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'kangourou',

	description: "Montre une image de kangourou.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["kangaroo"],

    

    

	run: async (client, message, args) => {

       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/kangaroo')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()

            

       .setTitle('🦘・Image de kangourou.')

            

       .setImage(json.image)

            

       .setColor(color)

    .setTimestamp();

       

        

            message.channel.send(embed);

    });

    }

};