const { MessageAttachment } = require('discord.js')

module.exports = {

     name: "passed", 

     description: "Envoie votre avatar en passed.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     

     run: async (client, message, args) => {

         const user = message.mentions.users.first() || message.author;

let link = `https://some-random-api.ml/canvas/passed?avatar=${user.displayAvatarURL({ format: 'png' })}`

//Make sure the link ends with either .png or .jpg

//create a message attachment with the name of the file with discord.js built in attachment class.

let img = new MessageAttachment(link, 'passed.png');

message.channel.send(img);

     }

};