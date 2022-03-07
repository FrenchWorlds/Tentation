module.exports = {
     name: "8ball", 

     description: "Une boule magique.", 

     category: "🎉・fun", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "< question >",

     aliases: [],
    
    run: async (client, message, args) => {
        

         if (args.length <= 0) 

         return message.reply(`Veuiller mettre une question !`)
        
        const awnser = ["Oui c'est sûr !","Peut être..","Je ne sais pas.","Non c'est sur que non."];
        message.channel.send(awnser[Math.floor(Math.random() * 4)]);
                                  
        }
    };