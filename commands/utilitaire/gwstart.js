 

 const ms = require('ms'); 

const { color,everyoneMention } = require('../../config.json')

 module.exports = {
     

     name: "gwstart", 

     description: "Commence une giveaway.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: ["MANAGE_MESSAGES"], 

     ownerOnly: false,

     

     usage: "< salon temps w cadeau >",

     aliases: [],

run: async (client, message, args) => { 

  

     // If the member doesn't have enough permissions 

     if(!message.member.hasPermission('MANAGE_MESSAGES')){ 

         return message.channel.send(':x : Vous devez disposer des autorisations de gestion des messages pour lancer des cadeaux.'); 

     } 

  

     // Giveaway channel 

     let giveawayChannel = message.mentions.channels.first(); 

     // If no channel is mentionned 

     if(!giveawayChannel){ 

         return message.channel.send(':x: Vous devez mentionner un salon valide !'); 

     } 

  

     // Giveaway duration 

     let giveawayDuration = args[1]; 

     // If the duration isn't valid 

     if(!giveawayDuration || isNaN(ms(giveawayDuration))){ 

         return message.channel.send(':x: Vous devez spécifier une durée valide !\nExemple: gwstart salon 10s 1 exemple'); 

     } 

  

     // Number of winners 

     let giveawayNumberWinners = args[2]; 

     // If the specified number of winners is not a number 

     if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){ 

         return message.channel.send(':x: Vous devez indiquer un nombre valide de gagnants !\nExemple: gwstart salon 10s 1 exemple'); 

     } 

  

     // Giveaway prize 

     let giveawayPrize = args.slice(3).join(' '); 

     // If no prize is specified 

     if(!giveawayPrize){ 

         return message.channel.send(':x: Vous devez spécifier un prix valide !\nExemple: gwstart salon 10s 1 exemple'); 

     } 

  

     // Start the giveaway 

     client.giveawaysManager.start(giveawayChannel, { 

         // The giveaway duration 

         time: ms(giveawayDuration), 

         // The giveaway prize 

         prize: giveawayPrize, 

         // The giveaway winner count 

         winnerCount: parseInt(giveawayNumberWinners), 
 

         // Messages 

         messages: { 

             giveaway: (everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY** 🎉🎉", 

             giveawayEnded: (everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY TERMINÉ** 🎉🎉", 

             timeRemaining: "Temps restant: **{duration}**!", 

             inviteToParticipate: "Réagissez avec 🎉 pour participer !", 

             winMessage: 'Félicitations, {winners}! Vous avez gagné **{prize}** !', 

             embedFooter: "Giveaways", 

             noWinner: "Giveaway annulé, aucune participation valide.", 

             hostedBy: "Crée par: {user}", 

             winners: "gagnants", 

             endedAt: "Terminé", 

             units: { 

                 seconds: "seconds", 

                 minutes: "minutes", 

                 hours: "heure", 

                 days: "jours", 

                 pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2 

             } 

         } 

     }); 

  

     message.channel.send(`Giveaway commencé dans ${giveawayChannel}!`); 

  

 }

};