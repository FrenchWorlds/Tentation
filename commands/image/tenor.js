 
 module.exports = {

     name: "tenor", 

     description: "Envoie un gif venant de tenor.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< recherche >",

     aliases: [],

     

     run: async (client, message, args) => {
         

let text = args.join(" ");

         

if (args.length <= 0) 

         return message.channel.send(`Veuillez mettre un mot !`)

         const { tenorkey } = require('../../config.json')
         const Tenor = require("tenorjs").client({

    "Key": tenorkey, // https://tenor.com/developer/keyregistration

    "Filter": "off", // "off", "low", "medium", "high", not case sensitive

    "Locale": "fr_EU", // Your locale here, case-sensitivity depends on input

    "MediaFilter": "minimal", // either minimal or basic, not case sensitive

    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly

});
         
         
         Tenor.Search.Random(text, "1").then(Results => {

      Results.forEach(Post => {

            message.channel.send('GIF pour le mot : ' + "`" + text + "`");

       message.channel.send(`${Post.url}`);

      });

}).catch(console.error);
         

}

     };