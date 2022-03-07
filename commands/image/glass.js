const { MessageAttachment } = require('discord.js')

module.exports = {

     name: "fenêtre", 

     description: "Envoie une photo de votre avatar dans une fenêtre.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: ["glass"],

     

     run: async (client, message, args) => {

         const user = message.mentions.users.first() || message.author;
         
let link = `https://some-random-api.ml/canvas/glass?avatar=${user.displayAvatarURL({ format: 'png' })}`

//Make sure the link ends with either .png or .jpg

//create a message attachment with the name of the file with discord.js built in attachment class.

let img = new MessageAttachment(link, 'fenêtre.png');

message.channel.send(img);

     }

};