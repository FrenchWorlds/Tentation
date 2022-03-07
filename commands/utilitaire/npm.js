 

 const { MessageEmbed } = require("discord.js"); 

 const fetch = require("node-fetch"); 

 const moment = require("moment"); 

const { color } = require('../../config.json')

 module.exports = { 
     name: "npm", 

     description: "Recherche le package.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< nom >",

     aliases: [],
     
   run: async (client, message, args) => { 

     let query = args.join(' '); 

     if (!query) query = await awaitMessages(message); 

     if (!query) return; 

     const res = await fetch(`https://registry.npmjs.com/${encodeURIComponent(query)}`).catch(err => console.log(err)); 

     if (res.status === 404) return message.channel.send('Aucun résultat de recherche trouvé, essayez peut-être de rechercher quelque chose qui existe.'); 

     const body = await res.json(); 

     const embed = new MessageEmbed() 

         .setColor(color) 

         .setTitle(body.name) 

         .setURL(`https://www.npmjs.com/package/${body.name}`) 

         .setDescription(body.description || 'Aucune description') 

         .addField('❯ Version', body['dist-tags'].latest, true) 

         .addField('❯ License', body.license || 'Aucune', true) 

         .addField('❯ Auteur', body.author ? body.author.name : 'Inconue', true) 

         .addField('❯ Crée en', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true) 

         .addField('❯ Modification Date', body.time.modified ? moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss') : 'Inconue', true) 

         .addField('❯ Repository', body.repository ? `[View Here](${body.repository.url.split('+')[1]})` : 'Inconue', true) 

         .addField('❯ Maintainers', body.maintainers.map(user => user.name).join(', ')) 

     message.channel.send(embed); 

  

  

    async function awaitMessages(message) { 

     let responce; 

  

     const filter = (user) => { 

         return user.author.id === message.author.id; 

     }; 

  

     message.channel.send('**Que voulez-vous rechercher ?** \nTapez `cancel` pour annuler la commande.'); 

  

     await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['time'] }) 

         .then((msg) => { 

             const firstMsg = msg.first(); 

             if (firstMsg.content.toLowerCase() === 'cancel') return firstMsg.react('👍'); 

             responce = firstMsg.content; 

         }) 

         .catch(() => { 

             message.channel.send('Welp .. vous avez mis trop de temps à annuler la commande.'); 

         }); 

  

     return responce; 

    } 

   }, 

 };