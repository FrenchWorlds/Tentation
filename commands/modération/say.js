 

 module.exports = { 

     name: "say", 

     description: "Envoie le message que vous avez envoyés", 

     category: "🧑‍⚖️・modération", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     aliases: ["tell","Say"],

 

     run: (client, message, args) => { 

         let text = args.join(" ");
         

	



         if (message.content.includes("discord.gg/")) 

         return message.reply(`Yo n'essayez pas de poster un lien de serveur en m'utilisant !!!`)

         if (args.length <= 0) 

         return message.reply(`Allez mec dis quelque chose !`)
         
  message.delete();

  message.channel.send(text);

     
     }

 }