 

 const { Discord, discord } = require("discord.js"); 

 const { MessageEmbed } = require("discord.js"); 

 const moment = require("moment"); 

 const fetch = require("node-fetch") 

  const { color } = require('../../config.json')

 module.exports = { 
     name: "github", 

     description: "Donne les informations sur le github.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< utilisateur >",

     aliases: ["git"], 

     run: async (client, message, args) => { 

  

        try { 

  

   if (!args[0]) return message.channel.send(`Veuillez me donner un nom d'utilisateur valide !`) 

      

   fetch(`https://api.github.com/users/${args.join('-')}`) 

     .then(res => res.json()).then(body => { 

       if(body.message) return message.channel.send(`Utilisateur introuvable |  Veuillez me donner un nom d'utilisateur valide !`); 

     let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body; 

  

             const embed = new MessageEmbed() 

             .setAuthor(`${login} Informations !`, avatar_url) 

             .setColor(color) 

             .setThumbnail(`${avatar_url}`) 

             .addField(`Nom d'utilisateur`, `${login}`) 

             .addField(`ID`, `${id}`) 

             .addField(`Bio`, `${bio || "Aucune bio"}`) 

             .addField(`Repositories publique`, `${public_repos || "0"}`, true) 

             .addField(`Abonnée`, `${followers}`, true) 

             .addField(`Abonnement`, `${following}`, true) 

             .addField(`Location`, `${location || "Aucune Location"}`) 

             .addField(`Compte créé`, moment.utc(created_at).format("dddd, MMMM, Do YYYY")) 

             .setFooter(`${message.author.username}`) 

  

             message.channel.send(embed) 

  

     }) 

  

         } catch (error) { 

             console.log(error); 

             return message.channel.send(`Une erreur s'est produite. Réessayez plus tard !`) 

         } 

     } 

 };