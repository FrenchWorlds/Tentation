

  

 module.exports = { 

     name: "qrcode", 

     description: "Génère un qrcode.", 

     aliases: ["qr"], 
     category: "⚙️・Utilitaire",
     cooldown: "10s", 

     run: async(client, message, args) => { 

         if(!args[0]) { 

    return message.channel.send(':x: | Veuillez spécifier le **texte/lien** vers lequel vous souhaitez que le **code QR** aille !') 

 } 

  const text = args.join("+");


 

  
 

         message.channel.send(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`); 

     } 

 }