  const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "clear", 

     description: "Supprime le nombre de messages choisis.", 

     category: "🧑‍⚖️・modération", 

     botPermission: ["MANAGE_MESSAGE"], 

     authorPermission: ["MANAGE_MESSAGES"], 

     ownerOnly: false,

     aliases: ["purge","Clear"],

     usage: ["< Nombre >"],
    
     

    run: async (client, message, args) => { 

const messageArray = message.content.split(' ');


    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Tu n\'a pas la premissions !');

    

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Merci de mettre un chiffre ou nombre !') }

    if (parseInt(args[0]) > 99) {

        return message.reply('Vous pouvez supprimer que 99 messages par commandes !')

    } else {

        deleteAmount = parseInt(args[0]);

    }
     

       const embed = new MessageEmbed() 

         .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true})) 

         .setDescription(`> **${deleteAmount} messages on bien était supprimer !**`)

         

         .setColor(color) 

         .setTimestamp()

    
    message.channel.bulkDelete(deleteAmount + 1, true);

    message.reply(embed)
        }
    };