 

 const { MessageEmbed } = require("discord.js"); 

 const math = require("mathjs"); 

const { color } = require('../../config.json')

  

 module.exports = {
     name: "calcule", 

     description: "Calcule l'opération donner.", 

     category: "⚙️・Utilitaire", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["calc"],

   run: async (client, message, args) => { 

     try { 

       if (!args[0]) return message.channel.send("S'il vous plaît, donnez-moi une équation !"); 

  

       const embed = new MessageEmbed() 

         .setColor(color) 

         .setTitle(`${message.author.tag}`)
       
         .addField("Calcule", "`" + args.join(" ") + "`" || "Non fourni")
         .addField("Résultats", "`" + +math.evaluate(args.join(" ")) + "`")
         
         .setTimestamp(); 

  

       message.channel.send(embed); 

     } catch (error) { 

       message.channel.send(`Veuillez me donner une équation valide ou  Réessayez plus tard !`).then(() => console.log(error)); 

     } 

   } 

 };