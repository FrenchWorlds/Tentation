 

 const weather = require('weather-js'); 

  const { color } = require('../../config.json')

 const Discord = require('discord.js'); 

  

 module.exports = { 

    name: "météo", 

    description: "Affiche la météo actuelle à un endroit précis.",
     
    category: "⚙️・Utilitaire",
     
    botPermission: [], 

    authorPermission: [], 

    ownerOnly: false,

    usage: "< lieu >",
     
    aliases: ["weather"],

     async run (bot, message, args) { 
         if (!args[0]) return message.channel.send("S'il vous plaît, donnez-moi une ville !");

         weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) { 

             if(error) return message.channel.send(error); 

             if(!args[0]) return message.channel.send('Veuillez spécifier un emplacement !') 

  

             if(result === undefined || result.length === 0) return message.channel.send('Localisation invalide !') 

  

             var current = result[0].current; 

             var location = result[0].location; 

  

             const embed = new Discord.MessageEmbed() 

             .setColor(color) 

             .setAuthor(`Prévisions météo pour ${current.observationpoint}`) 

             .setThumbnail(current.imageUrl) 

       

             .addField('TimeZone :', `UTC ${location.timezone}`, true) 

             .addField('Type de degrés :', 'Celcius', true) 

             .addField('Température :', `${current.temperature}°`, true)  

             .addField('Vent :', `${current.winddisplay}`, true) 

             .addField('Ressenti :', `${current.feelslike}°`, true) 

             .addField('Taux d\'humidité :', `${current.humidity}%`, true) 

  

             message.channel.send(embed) 

         }) 

     } 

 }