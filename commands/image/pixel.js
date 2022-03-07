const { MessageAttachment } = require('discord.js')

module.exports = {

     name: "pixel", 

     description: "Envoie votre avatar pixelisé.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     

     run: async (client, message, args) => {
         const user = message.mentions.users.first() || message.author;

let link = `https://some-random-api.ml/canvas/pixelate/?avatar=${user.displayAvatarURL({ format: 'png' })}`

let img = new MessageAttachment(link, 'pixel.png');

message.channel.send(img);

  }

};