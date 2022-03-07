const { MessageEmbed } = require("discord.js") 

const { color } = require('../../config.json')

 module.exports = { 

     

     name: "dm", 

     description: "Envoies un message à l'utilisateur mentionner.", 

     category: "🧑‍⚖️・modération", 

     botPermission: [], 

     authorPermission: ["MANAGE_GUILD"], 

     ownerOnly: false,

     

     usage: "< @ >",

     aliases: [],

 run: async(client, message, args) => {
     const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

     
    const reason = args.slice(25).join(" ")
    
                 const user =                        message.mentions.members.first() 

                         || message.guild.members.cache.get(args[0]) 

                         || message.member;
           if (message.member.hasPermission('MANAGE_GUILD')) {

           if (!args[1]) return message.channel.send(":x: | **Veuillez mettre un message !**")
               
           if (!args[0]) return message.channel.send(":x: | **Spécifiez quelqu'un à envoyer un message.**") 

         if (!mentionedMember) return message.channel.send(":x: | **Je ne trouve pas ce membre essayer en le mentionnant. **") 

         if (mentionedMember.id === message.author.id) return message.channel.send(":x: | Vous ne pouvez pas vous envoyer un message vous même...")
     
        if (mentionedMember.id === '929758310884859938') return message.channel.send(":x: | Je ne vais pas m'envoyer un message moi même...")
     
var dmMessage = message.content.slice(25).trim();
         

     const embed = new MessageEmbed() 

         .setTitle("✉️ - Message envoyé")



     .addFields( 

                                 { 

                                         name: 'Expéditeur :', 

                                         value: message.author.username, 

                                         inline: true, 

                                 }) 
      .addFields( 

                                 { 

                                         name: 'Destinataire :', 

                                         value: user.user.username, 

                                         inline: true, 

                                 })

      .setColor(color)
      
      .setTimestamp()
     
      .setFooter("Dev par French.")
     message.channel.send(embed);
     
     const dm = new MessageEmbed() 

         .setTitle("📫 - Message reçu")

     .addFields( 

                                 { 

                                         name: 'Expéditeur :', 

                                         value: message.author.username, 

                                         inline: true, 

                                 }) 

      .addFields( 

                                 { 

                                         name: 'Contenus :', 

                                         value: dmMessage, 

                                         inline: true, 

                                 })

      .setColor(color)
     

      .setTimestamp()
      .setFooter("Dev par French.")

      mentionedMember.send(dm);
               }else message.channel.send('Vous ne pouvez pas utiliser ça ! Vous n\'avez pas assez de permissions.')
     }
};