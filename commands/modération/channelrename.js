const { MessageEmbed } = require('discord.js'); 
 
const { color } = require('../../config.json')
  

 module.exports = { 

         

     name: "channelrename", 

     description: "Change le nom du salon.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_CHANNELS"], 

     authorPermission: ["MANAGE_CHANNELS"], 

     ownerOnly: false,     

     usage: "< nom >",

     aliases: ["cr"], 

         run: async (client, message, args) => {
             

         let text = args.join(" ");


         if (args.length <= 0) 

         return message.reply(`Veuillez rentrer un nom !`)

         
message.channel.setName(text).catch(console.error);


             
             const embed = new MessageEmbed()
             .setTitle('Salon renommée !')
             .setDescription('Le channel à bien était renommée pour ' + text)
             .addFields( 

                                 { 

                                         name: 'Modérateur :', 

                                         value: "<@" + message.author.id + ">", 

                                         inline: true, 

                                 })
             
             
             .setTimestamp()
             
             .setColor(color)
             
             
             
                 
                 
             message.channel.send(embed)
            
         }
     };