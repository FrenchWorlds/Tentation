const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = {

	name: 'chat',

	description: "Montre une image de chat.",

    category: "🐢・animaux",

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

    

     aliases: ["cat"],

    

    

	run: async (client, message, args) => {

       const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animal/cat')

    .then(res => res.json())

    .then(json => {

      

        

 let embed = new MessageEmbed()

            

       .setTitle('😺・Image de chat.')

            

       .setImage(json.image)

            

       .setColor(color)

       

    .setTimestamp();

       

        

            message.channel.send(embed);

    });

    }

};