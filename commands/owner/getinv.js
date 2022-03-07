

  

 module.exports = { 

     name: "getinvite", 

     description: "Crée une invitation vers le serveur choisis.", 

     category: "🧑‍💻・owner", 

     botPermission: ["CREATE_INSTANT_INVITE"], 

     authorPermission: [], 

     ownerOnly: true,

     aliases: ["gi","getinv"],
     
     usage: "< Nom | ID >",

     run: async(bot, message, args) => { 
          

         let guild = null; 

  

         if (!args[0]) return message.channel.send("Entrez le nom du serveur ou l'ID du serveur où vous souhaitez avoir le lien d'invitation")
                                                    

  

         if(args[0]){ 

             let fetched = bot.guilds.cache.find(g => g.name === args.join(" ")); 

             let found = bot.guilds.cache.get(args[0]); 

             if(!found) { 

                 if(fetched) { 

                     guild = fetched; 

                 } 

             } else { 

                 guild = found 

             } 

         } else { 

             return message.channel.send("Le nom du serveur est invalide"); 

         } 

         if(guild){ 

             let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE")); 

             if(!tChannel) { 

                 return message.channel.send("Désolé, je n'ai pas la permission CREATE_INSTANT_INVITE !");  

             } 

             let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => { 

                 return message.channel.send(`${err} s'est produit !`); 

             }); 

             message.channel.send(invite.url); 

         } else { 

             return message.channel.send(`\`${args.join(' ')}\` - Je suis pas sur le serveur.`); 

         } 
 

     } 

  

 }