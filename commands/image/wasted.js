const { MessageAttachment } = require('discord.js')


module.exports = {

     name: "wasted", 

     description: "Envoie votre avatar en wasted.", 

     category: "📷・image", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: [],

     

     run: async (client, message, args) => {
         const user = message.mentions.users.first() || message.author;

let link = `https://some-random-api.ml/canvas/wasted?avatar=${user.displayAvatarURL({ format: 'png' })}`

//Make sure the link ends with either .png or .jpg

//create a message attachment with the name of the file with discord.js built in attachment class.

let img = new MessageAttachment(link, 'wasted.png');

message.channel.send(img);
     }
};

