 

 

 const Discord = require('discord.js') 

 const client = new Discord.Client(); 

 const { Client, MessageEmbed } = require('discord.js'); 

 const { inspect } = require('util') 

let config = require('../../config.json');

const { color, owners, token, tenorkey } = require('../../config.json');   

 module.exports = { 

     name: 'eval', 

     usage: "", 

     description: "Évalue n'importe quelle chaîne en tant que code javascript et l'exécute.", 

     category: "🧑‍💻・owner", 

     

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: true,

     aliases: [],
      

     run: async (client, message, args) => {  

  

         const command = args.join(" "); 

         if(!command) return message.channel.send("Vous devez écrire une commande") 

  

             let words = ["token", "owners", "tenorkey"] 

             if(words.some(word => message.content.toLowerCase().includes(word))){ 

                 return message.channel.send("Ce mot est sur la liste noire !") 

             }

         

             const evaled = eval(command)  

             const embed = new Discord.MessageEmbed() 

             .setColor("GREEN") 

             .setTitle("Évaluer correctement !") 

             .addField(`**Type:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true) 

             .addField("**Evalué en :**", `\`\`\`yaml\n${Date.now()-message.createdTimestamp} ms\`\`\``, true) 

             .addField("**Entrée**", `\`\`\`js\n${command}\`\`\``) 

             .addField("**Sortie**", `\`\`\`js\n${inspect(evaled, {depth: 0})} \`\`\``) 

  

             message.channel.send(embed); 

  

          

     }};