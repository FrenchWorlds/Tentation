const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "anal", 

     description: "Envoie une image nsfw.", 

     category: "🔞・nsfw", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     run: async (client, message, args) => {
     let nom = 'anal';
         

if (message.channel.nsfw === false) {

    return message.channel.send(":warning: Ce salon n'est pas NSFW !");}

         if (message.channel.nsfw === true) {

         const NSFW = require("nsfw-discord");

const nsfw = new NSFW();

const image = await nsfw.anal();

const embed = new MessageEmbed()

    .setTitle(`${nom}`)

   .setDescription(`Parfois l'image ne s'affiche pas alors [clique ici](${image})`)

    .setColor(color)

    .setImage(image);

message.channel.send(embed);

      }

   }

};