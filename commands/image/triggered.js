const { MessageAttachment } = require('discord.js')

module.exports = {

     name: "triggered", 

     description: "Envoie votre avatar en triggered.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: ["vénère"],

     

     run: async (client, message, args) => {
         const user = message.mentions.users.first() || message.author;


let link = `https://some-random-api.ml/canvas/triggered/?avatar=${user.displayAvatarURL({ format: 'png' })}`


let img = new MessageAttachment(link, 'triggered.gif');

message.channel.send(img);

  }
};