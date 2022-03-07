 

 const db = require("quick.db"); 

  

 module.exports = { 

   name: "warnings", 

   description: "Recevez les avertissements de la vôtre ou de la personne mentionnée.", 

   category: "🧑‍⚖️・modération", 

   run: (client, message, args) => { 

     const user = message.mentions.members.first() || message.author; 

  

     let warnings = db.get(`warnings_${message.guild.id}_${user.id}`); 

  

     if (warnings === null) warnings = 0; 

  

     message.channel.send(`${user} à **${warnings}** warn.`); 

   } 

 };