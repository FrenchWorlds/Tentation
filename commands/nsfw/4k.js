const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "4k", 

     description: "Envoie une image nsfw.", 

     category: "🔞・nsfw", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     run: async (client, message, args) => {

     let nom = '4k';

         

if (message.channel.nsfw === false) {

    return message.channel.send(":warning: Ce salon n'est pas NSFW !");}

         if (message.channel.nsfw === true) {

         const NSFW = require("nsfw-discord");

const nsfw = new NSFW();

const image = await nsfw.fourk();

const embed = new MessageEmbed()

    .setTitle(`${nom}`)

   .setDescription(`Parfois l'image ne s'affiche pas alors [clique ici](${image})`)

    .setColor(color)

    .setImage(image);

message.channel.send(embed);

      }

   }

};
