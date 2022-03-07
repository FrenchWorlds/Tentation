 

 const Discord = require("discord.js") 

 module.exports = { 

     name: 'embedgen', 

     aliases: ["emb"], 

     description: 'Génère un emned.', 

     category: "⚙️・Utilitaire", 

        run: async (client, message, args) => { 

  

        try { 

  

             const filter = msg => msg.author.id == message.author.id; 

             const options = { 

                 max: 1 

             }; 

             //=============================================================================================== 

             // Getting Started 

             const embed = new Discord.MessageEmbed(); 

             message.channel.send("Répondez `skip` ou `non` pour la question suivante, répondez `cancel` pour arrêter la commande."); 

              

      

             //=============================================================================================== 

             // Getting Title 

             message.channel.send("Alors, voulez-vous que votre embed ait un titre ?"); 

             let title = await message.channel.awaitMessages(filter, options); 

             if (title.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content); 

      

             //=============================================================================================== 

             // Getting Description 

             message.channel.send("Super, maintenant vous voulez que votre embed ait une description ?"); 

             let Description = await message.channel.awaitMessages(filter, options); 

             if (Description.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content); 

      

             //=============================================================================================== 

             // Getting Footer 

             message.channel.send("Alors, voulez-vous que votre embed ait un footer ?  ou annuler"); 

             let Footer = await message.channel.awaitMessages(filter, options); 

             if (Footer.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content);  

      

             //=============================================================================================== 

             // Getting URL 

              

      

             //=============================================================================================== 

             // Getting Color 

             message.channel.send("Alors, voulez-vous que votre embed ait une couleur spécifique ?  La valeur par défaut est le noir."); 

             let Color = await message.channel.awaitMessages(filter, options); 

             if (Color.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136") 

      

             //=============================================================================================== 

             // Getting Author Field 

             message.channel.send("Alors, voulez-vous que votre embed ait un champ d'auteur ?"); 

             let Author = await message.channel.awaitMessages(filter, options); 

             if (Author.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content); 

      

             //=============================================================================================== 

             // Getting TimeStamp 

             message.channel.send("Alors, voulez-vous que votre embed ait un horodatage ?  Répondre `oui` ou `non`"); 

             let TimeStamp = await message.channel.awaitMessages(filter, options); 

             if (TimeStamp.first().content == 'cancel') return message.channel.send('Le générateur d\'embed annulé.') 

             if (TimeStamp.first().content !== 'oui') embed.setTimestamp(); 

      

             message.channel.send(embed) 

         } catch (error) { 

             console.error(error); 

         } 

     } 

 }