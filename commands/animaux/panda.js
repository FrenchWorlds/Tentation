const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'panda',

	description: "Montre une image de panda.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: [],

    

    

	run: async (client, message, args) => {

       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/panda')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()

            

       .setTitle('🐼・Image de panda')

            

       .setImage(json.image)

            

       .setColor(color)

       

    .setTimestamp();

       

        

            message.channel.send(embed);

    });

    }

};