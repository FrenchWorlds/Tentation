module.exports = {

     name: "typing", 

     description: "Fait écrire le bot.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< text >",

     aliases: [],

    

    run: async (client, message, args) => {
     

     message.channel.startTyping();
     let text = args.join(" ");

         

	

         if (message.content.includes("discord.gg/")) 

         return message.reply(`Yo n'essayez pas de poster un lien de serveur en m'utilisant !!!`)

         if (args.length <= 0) 

         return message.reply(`Allez mec dis quelque chose !`)

         

  message.delete();

  message.channel.send(text);
        
 

     message.channel.stopTyping();
     
    }};