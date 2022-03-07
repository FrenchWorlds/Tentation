 

 const ms = require('ms'); 

 module.exports = {
     

     name: "gwend", 

     description: "Termine un giveaway.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: ["MANAGE_MESSAGES"], 

     ownerOnly: false,

     

     usage: "< gwid >",

     aliases: [],

 run: async (client, message, args) => { 

  

     // If the member doesn't have enough permissions 

     if(!message.member.hasPermission('MANAGE_MESSAGES')){ 

         return message.channel.send(':x : Vous devez disposer des autorisations de gestion des messages pour relancer les cadeaux.'); 

     } 

  

     // If no message ID or giveaway name is specified 

     if(!args[0]){ 

         return message.channel.send(':x: Vous devez spécifier un ID de message valide !'); 

     } 

  

     // try to found the giveaway with prize then with ID 

     let giveaway =  

     // Search with giveaway prize 

     client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) || 

     // Search with giveaway ID 

     client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]); 

  

     // If no giveaway was found 

     if(!giveaway){ 

         return message.channel.send('Impossible de trouver un giveaway pour `'+ args.join(' ') + '`.'); 

     } 

  

     // Edit the giveaway 

     client.giveawaysManager.edit(giveaway.messageID, { 

         setEndTimestamp: Date.now() 

     }) 

     // Success message 

     .then(() => { 

         // Success message 

         message.channel.send('Le giveaway se terminera dans moins de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...'); 

     }) 

     .catch((e) => { 

         if(e.startsWith(`Le giveaway avec l'ID de message ${giveaway.messageID} est déjà terminé.`)){ 

             message.channel.send('Ce giveaway est déjà terminé !'); 

         } else { 

             console.error(e); 

             message.channel.send('Une erreur c\'est produite.'); 

         } 

     }); 

  

 }
 
 };